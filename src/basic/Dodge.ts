import { CardSuit as Suit } from '@karuta/sanguosha-core';
import {
	BasicCard,
	CardEffect,
	GameDriver,
} from '@karuta/sanguosha-pack';

class Dodge extends BasicCard {
	constructor(suit: Suit, number: number) {
		super('dodge', suit, number);
	}

	async effect(driver: GameDriver, effect: CardEffect): Promise<void> {
		const { origin } = effect;
		if (!origin) {
			return;
		}

		const { card } = origin;
		if (!card || !card.getName().endsWith('strike')) {
			return;
		}

		origin.weight--;
	}
}

export default Dodge;
