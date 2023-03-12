import * as fs from 'fs'
import * as process from 'process'

function log(msg: string) {
	fs.appendFileSync('cpu.log', msg + '\n')
}

log(`Welcome to cpu-plugin - ${new Date()}`)
log(`Arguments: ${JSON.stringify(process.argv)}`)

import './actions/sample'
import { StreamDeck } from '@stream-deck-for-node/sdk'

interface PluginSettings {
	sample: string
}

export const sd = new StreamDeck<PluginSettings>()
