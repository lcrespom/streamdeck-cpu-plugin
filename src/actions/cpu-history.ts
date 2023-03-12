import { Action, AppearDisappearEvent, BaseAction, KeyEvent } from '@stream-deck-for-node/sdk'
import { sd } from '../index'
import { log } from '../log'
import { initHistory, historySVG, totalCPUPercentage } from './cpuload'

@Action('cpu-history')
export class SampleAction extends BaseAction {
	intervalId: NodeJS.Timer

	onAppear(e: AppearDisappearEvent) {
		log('Appear ' + JSON.stringify(e))
		initHistory(144, 144)
		this.intervalId = setInterval(_ => this.updateButton(e.context), 1000)
	}

	onDisappear(e: AppearDisappearEvent) {
		log('Disappear ' + JSON.stringify(e))
		if (this.intervalId) clearInterval(this.intervalId)
	}

	updateButton(ctx: string) {
		let svg = historySVG()
		if (!svg) return
		sd.setImage(ctx, 'data:image/svg+xml;charset=utf8,' + svg)
		sd.setTitle(ctx, totalCPUPercentage())
	}
}
