import { CardSuit as Suit } from '@karuta/sanguosha-core';

import WeaponCard from '../WeaponCard';

class FrostSword extends WeaponCard {
	constructor(suit: Suit, number: number) {
		super('frost-sword', suit, number);
	}
}

export default FrostSword;
