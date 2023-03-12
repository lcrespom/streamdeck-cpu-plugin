import { Action, AppearDisappearEvent, BaseAction, KeyEvent } from '@stream-deck-for-node/sdk'
import { sd } from '../index'
import { log } from '../log'

let counter = 0

@Action('sample-action')
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

	onKeyDown(e: KeyEvent) {
		sd.setTitle(e.context, 'Tap ' + ++counter)
	}

	updateButton(ctx: string) {
		sd.setTitle(ctx, 'X ' + ++counter)
	}
}
