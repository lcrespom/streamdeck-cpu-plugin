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
		sd.setImage(e.context, 'data:image/svg+xml;charset=utf8,' + THE_SVG)
	}

	updateButton(ctx: string) {
		sd.setTitle(ctx, 'X ' + ++counter)
	}
}

const THE_SVG = `

<svg width="144" height="144">
<line x1="0" y1="144" x2="0" y2="144" stroke="#F00" /><line x1="0" y1="144" x2="0" y2="144" stroke="#0F0" />
<line x1="1" y1="144" x2="1" y2="144" stroke="#F00" /><line x1="1" y1="144" x2="1" y2="144" stroke="#0F0" />
<line x1="2" y1="144" x2="2" y2="144" stroke="#F00" /><line x1="2" y1="144" x2="2" y2="144" stroke="#0F0" />
<line x1="3" y1="144" x2="3" y2="144" stroke="#F00" /><line x1="3" y1="144" x2="3" y2="144" stroke="#0F0" />
<line x1="4" y1="144" x2="4" y2="144" stroke="#F00" /><line x1="4" y1="144" x2="4" y2="144" stroke="#0F0" />
<line x1="5" y1="144" x2="5" y2="144" stroke="#F00" /><line x1="5" y1="144" x2="5" y2="144" stroke="#0F0" />
<line x1="6" y1="144" x2="6" y2="144" stroke="#F00" /><line x1="6" y1="144" x2="6" y2="144" stroke="#0F0" />
<line x1="7" y1="144" x2="7" y2="144" stroke="#F00" /><line x1="7" y1="144" x2="7" y2="144" stroke="#0F0" />
<line x1="8" y1="144" x2="8" y2="144" stroke="#F00" /><line x1="8" y1="144" x2="8" y2="144" stroke="#0F0" />
<line x1="9" y1="144" x2="9" y2="144" stroke="#F00" /><line x1="9" y1="144" x2="9" y2="144" stroke="#0F0" />
<line x1="10" y1="144" x2="10" y2="144" stroke="#F00" /><line x1="10" y1="144" x2="10" y2="144" stroke="#0F0" />
<line x1="11" y1="144" x2="11" y2="144" stroke="#F00" /><line x1="11" y1="144" x2="11" y2="144" stroke="#0F0" />
<line x1="12" y1="144" x2="12" y2="144" stroke="#F00" /><line x1="12" y1="144" x2="12" y2="144" stroke="#0F0" />
<line x1="13" y1="144" x2="13" y2="144" stroke="#F00" /><line x1="13" y1="144" x2="13" y2="144" stroke="#0F0" />
<line x1="14" y1="144" x2="14" y2="144" stroke="#F00" /><line x1="14" y1="144" x2="14" y2="144" stroke="#0F0" />
<line x1="15" y1="144" x2="15" y2="144" stroke="#F00" /><line x1="15" y1="144" x2="15" y2="144" stroke="#0F0" />
<line x1="16" y1="144" x2="16" y2="144" stroke="#F00" /><line x1="16" y1="144" x2="16" y2="144" stroke="#0F0" />
<line x1="17" y1="144" x2="17" y2="144" stroke="#F00" /><line x1="17" y1="144" x2="17" y2="144" stroke="#0F0" />
<line x1="18" y1="144" x2="18" y2="144" stroke="#F00" /><line x1="18" y1="144" x2="18" y2="144" stroke="#0F0" />
<line x1="19" y1="144" x2="19" y2="144" stroke="#F00" /><line x1="19" y1="144" x2="19" y2="144" stroke="#0F0" />
<line x1="20" y1="144" x2="20" y2="144" stroke="#F00" /><line x1="20" y1="144" x2="20" y2="144" stroke="#0F0" />
<line x1="21" y1="144" x2="21" y2="144" stroke="#F00" /><line x1="21" y1="144" x2="21" y2="144" stroke="#0F0" />
<line x1="22" y1="144" x2="22" y2="144" stroke="#F00" /><line x1="22" y1="144" x2="22" y2="144" stroke="#0F0" />
<line x1="23" y1="144" x2="23" y2="144" stroke="#F00" /><line x1="23" y1="144" x2="23" y2="144" stroke="#0F0" />
<line x1="24" y1="144" x2="24" y2="144" stroke="#F00" /><line x1="24" y1="144" x2="24" y2="144" stroke="#0F0" />
<line x1="25" y1="144" x2="25" y2="144" stroke="#F00" /><line x1="25" y1="144" x2="25" y2="144" stroke="#0F0" />
<line x1="26" y1="144" x2="26" y2="144" stroke="#F00" /><line x1="26" y1="144" x2="26" y2="144" stroke="#0F0" />
<line x1="27" y1="144" x2="27" y2="144" stroke="#F00" /><line x1="27" y1="144" x2="27" y2="144" stroke="#0F0" />
<line x1="28" y1="144" x2="28" y2="144" stroke="#F00" /><line x1="28" y1="144" x2="28" y2="144" stroke="#0F0" />
<line x1="29" y1="144" x2="29" y2="144" stroke="#F00" /><line x1="29" y1="144" x2="29" y2="144" stroke="#0F0" />
<line x1="30" y1="144" x2="30" y2="144" stroke="#F00" /><line x1="30" y1="144" x2="30" y2="144" stroke="#0F0" />
<line x1="31" y1="144" x2="31" y2="144" stroke="#F00" /><line x1="31" y1="144" x2="31" y2="144" stroke="#0F0" />
<line x1="32" y1="144" x2="32" y2="144" stroke="#F00" /><line x1="32" y1="144" x2="32" y2="144" stroke="#0F0" />
<line x1="33" y1="144" x2="33" y2="144" stroke="#F00" /><line x1="33" y1="144" x2="33" y2="144" stroke="#0F0" />
<line x1="34" y1="144" x2="34" y2="144" stroke="#F00" /><line x1="34" y1="144" x2="34" y2="144" stroke="#0F0" />
<line x1="35" y1="144" x2="35" y2="144" stroke="#F00" /><line x1="35" y1="144" x2="35" y2="144" stroke="#0F0" />
<line x1="36" y1="144" x2="36" y2="144" stroke="#F00" /><line x1="36" y1="144" x2="36" y2="144" stroke="#0F0" />
<line x1="37" y1="144" x2="37" y2="144" stroke="#F00" /><line x1="37" y1="144" x2="37" y2="144" stroke="#0F0" />
<line x1="38" y1="144" x2="38" y2="144" stroke="#F00" /><line x1="38" y1="144" x2="38" y2="144" stroke="#0F0" />
<line x1="39" y1="144" x2="39" y2="144" stroke="#F00" /><line x1="39" y1="144" x2="39" y2="144" stroke="#0F0" />
<line x1="40" y1="144" x2="40" y2="144" stroke="#F00" /><line x1="40" y1="144" x2="40" y2="144" stroke="#0F0" />
<line x1="41" y1="144" x2="41" y2="144" stroke="#F00" /><line x1="41" y1="144" x2="41" y2="144" stroke="#0F0" />
<line x1="42" y1="144" x2="42" y2="144" stroke="#F00" /><line x1="42" y1="144" x2="42" y2="144" stroke="#0F0" />
<line x1="43" y1="144" x2="43" y2="144" stroke="#F00" /><line x1="43" y1="144" x2="43" y2="144" stroke="#0F0" />
<line x1="44" y1="144" x2="44" y2="144" stroke="#F00" /><line x1="44" y1="144" x2="44" y2="144" stroke="#0F0" />
<line x1="45" y1="144" x2="45" y2="144" stroke="#F00" /><line x1="45" y1="144" x2="45" y2="144" stroke="#0F0" />
<line x1="46" y1="144" x2="46" y2="144" stroke="#F00" /><line x1="46" y1="144" x2="46" y2="144" stroke="#0F0" />
<line x1="47" y1="144" x2="47" y2="144" stroke="#F00" /><line x1="47" y1="144" x2="47" y2="144" stroke="#0F0" />
<line x1="48" y1="144" x2="48" y2="144" stroke="#F00" /><line x1="48" y1="144" x2="48" y2="144" stroke="#0F0" />
<line x1="49" y1="144" x2="49" y2="144" stroke="#F00" /><line x1="49" y1="144" x2="49" y2="144" stroke="#0F0" />
<line x1="50" y1="144" x2="50" y2="144" stroke="#F00" /><line x1="50" y1="144" x2="50" y2="144" stroke="#0F0" />
<line x1="51" y1="144" x2="51" y2="144" stroke="#F00" /><line x1="51" y1="144" x2="51" y2="144" stroke="#0F0" />
<line x1="52" y1="144" x2="52" y2="144" stroke="#F00" /><line x1="52" y1="144" x2="52" y2="144" stroke="#0F0" />
<line x1="53" y1="144" x2="53" y2="144" stroke="#F00" /><line x1="53" y1="144" x2="53" y2="144" stroke="#0F0" />
<line x1="54" y1="144" x2="54" y2="144" stroke="#F00" /><line x1="54" y1="144" x2="54" y2="144" stroke="#0F0" />
<line x1="55" y1="144" x2="55" y2="144" stroke="#F00" /><line x1="55" y1="144" x2="55" y2="144" stroke="#0F0" />
<line x1="56" y1="144" x2="56" y2="144" stroke="#F00" /><line x1="56" y1="144" x2="56" y2="144" stroke="#0F0" />
<line x1="57" y1="144" x2="57" y2="144" stroke="#F00" /><line x1="57" y1="144" x2="57" y2="144" stroke="#0F0" />
<line x1="58" y1="144" x2="58" y2="144" stroke="#F00" /><line x1="58" y1="144" x2="58" y2="144" stroke="#0F0" />
<line x1="59" y1="144" x2="59" y2="144" stroke="#F00" /><line x1="59" y1="144" x2="59" y2="144" stroke="#0F0" />
<line x1="60" y1="144" x2="60" y2="144" stroke="#F00" /><line x1="60" y1="144" x2="60" y2="144" stroke="#0F0" />
<line x1="61" y1="144" x2="61" y2="144" stroke="#F00" /><line x1="61" y1="144" x2="61" y2="144" stroke="#0F0" />
<line x1="62" y1="144" x2="62" y2="144" stroke="#F00" /><line x1="62" y1="144" x2="62" y2="144" stroke="#0F0" />
<line x1="63" y1="144" x2="63" y2="144" stroke="#F00" /><line x1="63" y1="144" x2="63" y2="144" stroke="#0F0" />
<line x1="64" y1="144" x2="64" y2="144" stroke="#F00" /><line x1="64" y1="144" x2="64" y2="144" stroke="#0F0" />
<line x1="65" y1="144" x2="65" y2="144" stroke="#F00" /><line x1="65" y1="144" x2="65" y2="144" stroke="#0F0" />
<line x1="66" y1="144" x2="66" y2="144" stroke="#F00" /><line x1="66" y1="144" x2="66" y2="144" stroke="#0F0" />
<line x1="67" y1="144" x2="67" y2="144" stroke="#F00" /><line x1="67" y1="144" x2="67" y2="144" stroke="#0F0" />
<line x1="68" y1="144" x2="68" y2="144" stroke="#F00" /><line x1="68" y1="144" x2="68" y2="144" stroke="#0F0" />
<line x1="69" y1="144" x2="69" y2="144" stroke="#F00" /><line x1="69" y1="144" x2="69" y2="144" stroke="#0F0" />
<line x1="70" y1="144" x2="70" y2="144" stroke="#F00" /><line x1="70" y1="144" x2="70" y2="144" stroke="#0F0" />
<line x1="71" y1="144" x2="71" y2="144" stroke="#F00" /><line x1="71" y1="144" x2="71" y2="144" stroke="#0F0" />
<line x1="72" y1="144" x2="72" y2="144" stroke="#F00" /><line x1="72" y1="144" x2="72" y2="144" stroke="#0F0" />
<line x1="73" y1="144" x2="73" y2="144" stroke="#F00" /><line x1="73" y1="144" x2="73" y2="144" stroke="#0F0" />
<line x1="74" y1="144" x2="74" y2="144" stroke="#F00" /><line x1="74" y1="144" x2="74" y2="144" stroke="#0F0" />
<line x1="75" y1="144" x2="75" y2="144" stroke="#F00" /><line x1="75" y1="144" x2="75" y2="144" stroke="#0F0" />
<line x1="76" y1="144" x2="76" y2="144" stroke="#F00" /><line x1="76" y1="144" x2="76" y2="144" stroke="#0F0" />
<line x1="77" y1="144" x2="77" y2="144" stroke="#F00" /><line x1="77" y1="144" x2="77" y2="144" stroke="#0F0" />
<line x1="78" y1="144" x2="78" y2="144" stroke="#F00" /><line x1="78" y1="144" x2="78" y2="144" stroke="#0F0" />
<line x1="79" y1="144" x2="79" y2="144" stroke="#F00" /><line x1="79" y1="144" x2="79" y2="144" stroke="#0F0" />
<line x1="80" y1="144" x2="80" y2="144" stroke="#F00" /><line x1="80" y1="144" x2="80" y2="144" stroke="#0F0" />
<line x1="81" y1="144" x2="81" y2="144" stroke="#F00" /><line x1="81" y1="144" x2="81" y2="144" stroke="#0F0" />
<line x1="82" y1="144" x2="82" y2="144" stroke="#F00" /><line x1="82" y1="144" x2="82" y2="144" stroke="#0F0" />
<line x1="83" y1="144" x2="83" y2="144" stroke="#F00" /><line x1="83" y1="144" x2="83" y2="144" stroke="#0F0" />
<line x1="84" y1="144" x2="84" y2="144" stroke="#F00" /><line x1="84" y1="144" x2="84" y2="144" stroke="#0F0" />
<line x1="85" y1="144" x2="85" y2="144" stroke="#F00" /><line x1="85" y1="144" x2="85" y2="144" stroke="#0F0" />
<line x1="86" y1="144" x2="86" y2="144" stroke="#F00" /><line x1="86" y1="144" x2="86" y2="144" stroke="#0F0" />
<line x1="87" y1="144" x2="87" y2="144" stroke="#F00" /><line x1="87" y1="144" x2="87" y2="144" stroke="#0F0" />
<line x1="88" y1="144" x2="88" y2="144" stroke="#F00" /><line x1="88" y1="144" x2="88" y2="144" stroke="#0F0" />
<line x1="89" y1="144" x2="89" y2="144" stroke="#F00" /><line x1="89" y1="144" x2="89" y2="144" stroke="#0F0" />
<line x1="90" y1="144" x2="90" y2="144" stroke="#F00" /><line x1="90" y1="144" x2="90" y2="144" stroke="#0F0" />
<line x1="91" y1="144" x2="91" y2="144" stroke="#F00" /><line x1="91" y1="144" x2="91" y2="144" stroke="#0F0" />
<line x1="92" y1="144" x2="92" y2="144" stroke="#F00" /><line x1="92" y1="144" x2="92" y2="144" stroke="#0F0" />
<line x1="93" y1="144" x2="93" y2="144" stroke="#F00" /><line x1="93" y1="144" x2="93" y2="144" stroke="#0F0" />
<line x1="94" y1="144" x2="94" y2="144" stroke="#F00" /><line x1="94" y1="144" x2="94" y2="144" stroke="#0F0" />
<line x1="95" y1="144" x2="95" y2="144" stroke="#F00" /><line x1="95" y1="144" x2="95" y2="144" stroke="#0F0" />
<line x1="96" y1="144" x2="96" y2="144" stroke="#F00" /><line x1="96" y1="144" x2="96" y2="144" stroke="#0F0" />
<line x1="97" y1="144" x2="97" y2="144" stroke="#F00" /><line x1="97" y1="144" x2="97" y2="144" stroke="#0F0" />
<line x1="98" y1="144" x2="98" y2="144" stroke="#F00" /><line x1="98" y1="144" x2="98" y2="144" stroke="#0F0" />
<line x1="99" y1="144" x2="99" y2="144" stroke="#F00" /><line x1="99" y1="144" x2="99" y2="144" stroke="#0F0" />
<line x1="100" y1="144" x2="100" y2="144" stroke="#F00" /><line x1="100" y1="144" x2="100" y2="144" stroke="#0F0" />
<line x1="101" y1="144" x2="101" y2="144" stroke="#F00" /><line x1="101" y1="144" x2="101" y2="144" stroke="#0F0" />
<line x1="102" y1="144" x2="102" y2="144" stroke="#F00" /><line x1="102" y1="144" x2="102" y2="144" stroke="#0F0" />
<line x1="103" y1="144" x2="103" y2="144" stroke="#F00" /><line x1="103" y1="144" x2="103" y2="144" stroke="#0F0" />
<line x1="104" y1="144" x2="104" y2="144" stroke="#F00" /><line x1="104" y1="144" x2="104" y2="144" stroke="#0F0" />
<line x1="105" y1="144" x2="105" y2="144" stroke="#F00" /><line x1="105" y1="144" x2="105" y2="144" stroke="#0F0" />
<line x1="106" y1="144" x2="106" y2="144" stroke="#F00" /><line x1="106" y1="144" x2="106" y2="144" stroke="#0F0" />
<line x1="107" y1="144" x2="107" y2="144" stroke="#F00" /><line x1="107" y1="144" x2="107" y2="144" stroke="#0F0" />
<line x1="108" y1="144" x2="108" y2="144" stroke="#F00" /><line x1="108" y1="144" x2="108" y2="144" stroke="#0F0" />
<line x1="109" y1="144" x2="109" y2="144" stroke="#F00" /><line x1="109" y1="144" x2="109" y2="144" stroke="#0F0" />
<line x1="110" y1="144" x2="110" y2="144" stroke="#F00" /><line x1="110" y1="144" x2="110" y2="144" stroke="#0F0" />
<line x1="111" y1="144" x2="111" y2="144" stroke="#F00" /><line x1="111" y1="144" x2="111" y2="144" stroke="#0F0" />
<line x1="112" y1="144" x2="112" y2="144" stroke="#F00" /><line x1="112" y1="144" x2="112" y2="144" stroke="#0F0" />
<line x1="113" y1="144" x2="113" y2="144" stroke="#F00" /><line x1="113" y1="144" x2="113" y2="144" stroke="#0F0" />
<line x1="114" y1="144" x2="114" y2="144" stroke="#F00" /><line x1="114" y1="144" x2="114" y2="144" stroke="#0F0" />
<line x1="115" y1="144" x2="115" y2="144" stroke="#F00" /><line x1="115" y1="144" x2="115" y2="144" stroke="#0F0" />
<line x1="116" y1="144" x2="116" y2="144" stroke="#F00" /><line x1="116" y1="144" x2="116" y2="144" stroke="#0F0" />
<line x1="117" y1="144" x2="117" y2="140" stroke="#F00" /><line x1="117" y1="140" x2="117" y2="135" stroke="#0F0" />
<line x1="118" y1="144" x2="118" y2="136" stroke="#F00" /><line x1="118" y1="136" x2="118" y2="131" stroke="#0F0" />
<line x1="119" y1="144" x2="119" y2="142" stroke="#F00" /><line x1="119" y1="142" x2="119" y2="139" stroke="#0F0" />
<line x1="120" y1="144" x2="120" y2="133" stroke="#F00" /><line x1="120" y1="133" x2="120" y2="124" stroke="#0F0" />
<line x1="121" y1="144" x2="121" y2="133" stroke="#F00" /><line x1="121" y1="133" x2="121" y2="115" stroke="#0F0" />
<line x1="122" y1="144" x2="122" y2="137" stroke="#F00" /><line x1="122" y1="137" x2="122" y2="111" stroke="#0F0" />
<line x1="123" y1="144" x2="123" y2="137" stroke="#F00" /><line x1="123" y1="137" x2="123" y2="108" stroke="#0F0" />
<line x1="124" y1="144" x2="124" y2="141" stroke="#F00" /><line x1="124" y1="141" x2="124" y2="116" stroke="#0F0" />
<line x1="125" y1="144" x2="125" y2="141" stroke="#F00" /><line x1="125" y1="141" x2="125" y2="119" stroke="#0F0" />
<line x1="126" y1="144" x2="126" y2="139" stroke="#F00" /><line x1="126" y1="139" x2="126" y2="114" stroke="#0F0" />
<line x1="127" y1="144" x2="127" y2="140" stroke="#F00" /><line x1="127" y1="140" x2="127" y2="117" stroke="#0F0" />
<line x1="128" y1="144" x2="128" y2="137" stroke="#F00" /><line x1="128" y1="137" x2="128" y2="120" stroke="#0F0" />
<line x1="129" y1="144" x2="129" y2="137" stroke="#F00" /><line x1="129" y1="137" x2="129" y2="128" stroke="#0F0" />
<line x1="130" y1="144" x2="130" y2="139" stroke="#F00" /><line x1="130" y1="139" x2="130" y2="133" stroke="#0F0" />
<line x1="131" y1="144" x2="131" y2="137" stroke="#F00" /><line x1="131" y1="137" x2="131" y2="129" stroke="#0F0" />
<line x1="132" y1="144" x2="132" y2="134" stroke="#F00" /><line x1="132" y1="134" x2="132" y2="69" stroke="#0F0" />
<line x1="133" y1="144" x2="133" y2="138" stroke="#F00" /><line x1="133" y1="138" x2="133" y2="60" stroke="#0F0" />
<line x1="134" y1="144" x2="134" y2="140" stroke="#F00" /><line x1="134" y1="140" x2="134" y2="59" stroke="#0F0" />
<line x1="135" y1="144" x2="135" y2="140" stroke="#F00" /><line x1="135" y1="140" x2="135" y2="62" stroke="#0F0" />
<line x1="136" y1="144" x2="136" y2="141" stroke="#F00" /><line x1="136" y1="141" x2="136" y2="60" stroke="#0F0" />
<line x1="137" y1="144" x2="137" y2="142" stroke="#F00" /><line x1="137" y1="142" x2="137" y2="63" stroke="#0F0" />
<line x1="138" y1="144" x2="138" y2="141" stroke="#F00" /><line x1="138" y1="141" x2="138" y2="64" stroke="#0F0" />
<line x1="139" y1="144" x2="139" y2="141" stroke="#F00" /><line x1="139" y1="141" x2="139" y2="58" stroke="#0F0" />
<line x1="140" y1="144" x2="140" y2="137" stroke="#F00" /><line x1="140" y1="137" x2="140" y2="55" stroke="#0F0" />
<line x1="141" y1="144" x2="141" y2="137" stroke="#F00" /><line x1="141" y1="137" x2="141" y2="94" stroke="#0F0" />
<line x1="142" y1="144" x2="142" y2="135" stroke="#F00" /><line x1="142" y1="135" x2="142" y2="122" stroke="#0F0" />
<line x1="143" y1="144" x2="143" y2="134" stroke="#F00" /><line x1="143" y1="134" x2="143" y2="131" stroke="#0F0" />
</svg>`
