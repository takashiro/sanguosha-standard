import { CardSuit as Suit } from '@karuta/sanguosha-core';

import {
	GlobalEffectTrickCard,
	GameDriver,
	CardEffect,
	Recover,
} from '@karuta/sanguosha-pack';

class PeachGarden extends GlobalEffectTrickCard {
	constructor(suit: Suit, number: number) {
		super('peach-garden', suit, number);
	}

	async effect(driver: GameDriver, effect: CardEffect): Promise<void> {
		const { to } = effect;
		if (!to || to.isDead()) {
			return;
		}

		const recover = new Recover(effect.from, to, 1);
		recover.card = this;
		await driver.recover(recover);
	}
}

export default PeachGarden;
