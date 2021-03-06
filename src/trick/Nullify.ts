import {
	CardSuit as Suit,
	CardType,
} from '@karuta/sanguosha-core';

import {
	GameDriver,
	CardEffect,
	FixedTargetTrickCard,
} from '@karuta/sanguosha-pack';

class Nullify extends FixedTargetTrickCard {
	constructor(suit: Suit, number: number) {
		super('nullify', suit, number);
	}

	async isAvailable(): Promise<boolean> {
		return false;
	}

	async effect(driver: GameDriver, effect: CardEffect): Promise<void> {
		const { origin } = effect;
		if (!origin) {
			return;
		}

		const { card } = origin;
		if (!card || card.getType() !== CardType.Trick) {
			return;
		}

		origin.weight--;
	}
}

export default Nullify;
