import * as fs from 'fs'

export function log(msg: string) {
	let now = new Date().toISOString().substring(11, 19)
	fs.appendFileSync('cpu.log', now + ' ' + msg + '\n')
}
