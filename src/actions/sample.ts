import { Action, AppearDisappearEvent, BaseAction, KeyEvent } from '@stream-deck-for-node/sdk'
import { sd } from '../index'

let counter = 0

@Action('sample-action')
export class SampleAction extends BaseAction {
	ctx: string
	visible = false
	intervalId: NodeJS.Timer

	constructor() {
		super()
		this.intervalId = setInterval(_ => this.updateButton(), 1000)
	}

	onAppear(e: AppearDisappearEvent) {
		this.ctx = e.context
		this.visible = true
	}

	onDisappear() {
		this.visible = false
		if (this.intervalId) clearInterval(this.intervalId)
	}

	onKeyDown(e: KeyEvent) {
		sd.setTitle(e.context, 'Tap ' + ++counter)
	}

	updateButton() {
		if (!this.visible) return
		sd.setTitle(this.ctx, 'X ' + ++counter)
	}
}
