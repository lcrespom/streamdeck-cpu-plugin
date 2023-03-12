import * as os from 'os'

type Load = {
	user: number
	sys: number
	idle: number
}

let oldtimes: Load[]

function cpuLoads(): Load[] {
	let times = os.cpus().map(cpu => cpu.times)
	if (!oldtimes) {
		oldtimes = times
		return []
	}
	let deltas: os.CpuInfo['times'][] = []
	for (let i = 0; i < times.length; i++) {
		let cputimes = Object.assign({}, times[i])
		Object.keys(cputimes).forEach(k => (cputimes[k] = cputimes[k] - oldtimes[i][k]))
		deltas.push(cputimes)
	}
	oldtimes = times
	return deltas.map(d => ({ user: d.user + d.nice, sys: d.sys + d.irq, idle: d.idle }))
}

function totalLoad(loads: Load[]): Load {
	return loads.reduce(
		(total, current) => ({
			user: total.user + current.user,
			sys: total.sys + current.sys,
			idle: total.idle + current.idle
		}),
		{ user: 0, sys: 0, idle: 0 }
	)
}

//----------------------------------------

let cpuHistory: Load[] = []
let width = 0
let height = 0
let cpuPos = 0
let sysColor: string
let usrColor: string

function makeSVG(l: Load): string {
	cpuHistory[cpuPos] = l
	cpuPos = (cpuPos + 1) % width
	let result = `<svg width="${width}" height="${height}">\n`
	for (let i = 0; i < width; i++) {
		result += makeLine(i, cpuHistory[(cpuPos + i) % width]) + '\n'
	}
	result += '</svg>'
	return result
}

function makeLine(x: number, l: Load) {
	let total = l.user + l.sys + l.idle
	let sys = Math.round((height * l.sys) / total)
	let user = sys + Math.round((height * l.user) / total)
	let sysLine = `<line x1="${x}" y1="${height}" x2="${x}" y2="${
		height - sys
	}" stroke="${sysColor}" />`
	let usrLine = `<line x1="${x}" y1="${height - sys}" x2="${x}" y2="${
		height - user
	}" stroke="${usrColor}" />`
	return sysLine + usrLine
}

export function historySVG(): string {
	let loads = cpuLoads()
	if (!loads) return ''
	return makeSVG(totalLoad(loads))
}

export function initHistory(w: number, h: number, sysCol = '#F00', usrCol = '#0F0') {
	width = w
	height = h
	sysColor = sysCol
	usrColor = usrCol
	cpuHistory = []
	for (let i = 0; i < width; i++) cpuHistory.push({ user: 0, sys: 0, idle: height })
}
