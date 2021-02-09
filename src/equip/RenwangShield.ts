import { CardSuit as Suit } from '@karuta/sanguosha-core';

import { ArmorCard } from '@karuta/sanguosha-pack';

class RenwangShield extends ArmorCard {
	constructor(suit: Suit, number: number) {
		super('renwang-shield', suit, number);
	}
}

export default RenwangShield;
