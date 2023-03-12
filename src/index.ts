import * as process from 'process'
import { log } from './log'

log(`-----\nWelcome to cpu-plugin`)
log(`Arguments: ${JSON.stringify(process.argv)}`)

import './actions/sample'
import { StreamDeck } from '@stream-deck-for-node/sdk'

interface PluginSettings {
	sample: string
}

export const sd = new StreamDeck<PluginSettings>()
