import * as fs from 'fs'
import * as process from 'process'

function log(msg: string) {
	let now = new Date().toISOString().substring(11, 19)
	fs.appendFileSync('cpu.log', now + ' ' + msg + '\n')
}

log(`Welcome to cpu-plugin`)
log(`Arguments: ${JSON.stringify(process.argv)}`)

import './actions/sample'
import { StreamDeck } from '@stream-deck-for-node/sdk'

interface PluginSettings {
	sample: string
}

export const sd = new StreamDeck<PluginSettings>()
