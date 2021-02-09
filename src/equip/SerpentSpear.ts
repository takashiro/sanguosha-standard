import { CardSuit as Suit } from '@karuta/sanguosha-core';

import { WeaponCard } from '@karuta/sanguosha-pack';

class SerpentSpear extends WeaponCard {
	constructor(suit: Suit, number: number) {
		super('serpent-spear', suit, number);
	}
}

export default SerpentSpear;
