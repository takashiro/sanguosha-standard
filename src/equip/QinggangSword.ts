import { CardSuit as Suit } from '@karuta/sanguosha-core';

import { WeaponCard } from '@karuta/sanguosha-pack';

class QinggangSword extends WeaponCard {
	constructor(suit: Suit, number: number) {
		super('qinggang-sword', suit, number);
	}
}

export default QinggangSword;
