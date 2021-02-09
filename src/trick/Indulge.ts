import {
	CardSuit as Suit,
	PlayerPhase as Phase,
} from '@karuta/sanguosha-core';

import {
	DelayedTrickCard,
	GameDriver,
	CardEffect,
	Judgement,
	CardPattern,
} from '@karuta/sanguosha-pack';

const effectivePattern = new CardPattern({
	suits: [
		Suit.Spade,
		Suit.Club,
		Suit.Diamond,
	],
});

class Indulge extends DelayedTrickCard {
	constructor(suit: Suit, number: number) {
		super('indulge', suit, number);
	}

	async effect(driver: GameDriver, effect: CardEffect): Promise<void> {
		const { to } = effect;
		if (!to) {
			return;
		}

		const judgement = new Judgement(to, this, effectivePattern);
		await driver.judge(judgement);

		if (judgement.isEffective()) {
			to.skipPhase(Phase.Play);
		}
	}
}

export default Indulge;
