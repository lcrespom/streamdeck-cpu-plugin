import * as process from 'process'
import { log } from './log'

log(`Welcome to cpu-plugin`)
log(`Arguments: ${JSON.stringify(process.argv)}`)

import './actions/sample'
import { StreamDeck } from '@stream-deck-for-node/sdk'

interface PluginSettings {
	sample: string
}

export const sd = new StreamDeck<PluginSettings>()
