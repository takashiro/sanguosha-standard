import {
	CardSuit as Suit,
	PlayerPhase as Phase,
} from '@karuta/sanguosha-core';

import BasicCard from '../BasicCard';
import GameDriver from '../../driver/GameDriver';
import ServerPlayer from '../../driver/ServerPlayer';
import CardEffectStruct from '../../driver/CardEffectStruct';
import RecoverStruct from '../../driver/RecoverStruct';
import CardUseStruct from '../../driver/CardUseStruct';

class Peach extends BasicCard {
	constructor(suit: Suit, number: number) {
		super('peach', suit, number);
	}

	async isAvailable(driver: GameDriver, source: ServerPlayer): Promise<boolean> {
		return driver && source && source.getPhase() === Phase.Play && source.isWounded();
	}

	async targetFilter(): Promise<boolean> {
		return false;
	}

	async targetFeasible(): Promise<boolean> {
		return true;
	}

	async onUse(driver: GameDriver, use: CardUseStruct): Promise<void> {
		const { from } = use;
		use.to.push(from);
	}

	async effect(driver: GameDriver, effect: CardEffectStruct): Promise<void> {
		const recover = new RecoverStruct(effect.from, effect.to, 1);
		driver.recover(recover);
	}
}

export default Peach;
