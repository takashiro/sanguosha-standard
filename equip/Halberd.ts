import { CardSuit as Suit } from '@karuta/sanguosha-core';

import WeaponCard from '../../../base/WeaponCard';

class Halberd extends WeaponCard {
	constructor(suit: Suit, number: number) {
		super('halberd', suit, number);
	}
}

export default Halberd;
