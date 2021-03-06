import { CardSuit as Suit } from '@karuta/sanguosha-core';

import { WeaponCard } from '@karuta/sanguosha-pack';

class Halberd extends WeaponCard {
	constructor(suit: Suit, number: number) {
		super('halberd', suit, number);
	}
}

export default Halberd;
