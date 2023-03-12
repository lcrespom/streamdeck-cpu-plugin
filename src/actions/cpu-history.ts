import { Action, AppearDisappearEvent, BaseAction, KeyEvent } from '@stream-deck-for-node/sdk'
import { sd } from '../index'
import { log } from '../log'

@Action('cpu-history')
export class SampleAction extends BaseAction {
	intervalId: NodeJS.Timer

	onAppear(e: AppearDisappearEvent) {
		log('Appear ' + JSON.stringify(e))
		this.intervalId = setInterval(_ => this.updateButton(e.context), 1000)
	}

	onDisappear(e: AppearDisappearEvent) {
		log('Disappear ' + JSON.stringify(e))
		if (this.intervalId) clearInterval(this.intervalId)
	}

	updateButton(ctx: string) {
		//sd.setTitle(ctx, 'X ' + ++counter)
	}
}
