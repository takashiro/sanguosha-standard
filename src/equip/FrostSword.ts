import { CardSuit as Suit } from '@karuta/sanguosha-core';

import { WeaponCard } from '@karuta/sanguosha-pack';

class FrostSword extends WeaponCard {
	constructor(suit: Suit, number: number) {
		super('frost-sword', suit, number);
	}
}

export default FrostSword;
