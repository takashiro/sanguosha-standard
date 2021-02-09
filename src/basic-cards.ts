import { CardSuit as Suit } from '@karuta/sanguosha-core';
import { Card } from '@karuta/sanguosha-pack';

import * as std from './basic';

function createBasicCards(): Card[] {
	return [
		new std.Strike(Suit.Spade, 7),
		new std.Strike(Suit.Spade, 8),
		new std.Strike(Suit.Spade, 8),
		new std.Strike(Suit.Spade, 9),
		new std.Strike(Suit.Spade, 9),
		new std.Strike(Suit.Spade, 10),
		new std.Strike(Suit.Spade, 10),
		new std.Strike(Suit.Club, 2),
		new std.Strike(Suit.Club, 3),
		new std.Strike(Suit.Club, 4),
		new std.Strike(Suit.Club, 5),
		new std.Strike(Suit.Club, 6),
		new std.Strike(Suit.Club, 7),
		new std.Strike(Suit.Club, 8),
		new std.Strike(Suit.Club, 8),
		new std.Strike(Suit.Club, 9),
		new std.Strike(Suit.Club, 9),
		new std.Strike(Suit.Club, 10),
		new std.Strike(Suit.Club, 10),
		new std.Strike(Suit.Club, 11),
		new std.Strike(Suit.Club, 11),
		new std.Strike(Suit.Heart, 10),
		new std.Strike(Suit.Heart, 10),
		new std.Strike(Suit.Heart, 11),
		new std.Strike(Suit.Diamond, 6),
		new std.Strike(Suit.Diamond, 7),
		new std.Strike(Suit.Diamond, 8),
		new std.Strike(Suit.Diamond, 9),
		new std.Strike(Suit.Diamond, 10),
		new std.Strike(Suit.Diamond, 13),

		new std.Dodge(Suit.Heart, 2),
		new std.Dodge(Suit.Heart, 2),
		new std.Dodge(Suit.Heart, 13),
		new std.Dodge(Suit.Diamond, 2),
		new std.Dodge(Suit.Diamond, 2),
		new std.Dodge(Suit.Diamond, 3),
		new std.Dodge(Suit.Diamond, 4),
		new std.Dodge(Suit.Diamond, 5),
		new std.Dodge(Suit.Diamond, 6),
		new std.Dodge(Suit.Diamond, 7),
		new std.Dodge(Suit.Diamond, 8),
		new std.Dodge(Suit.Diamond, 9),
		new std.Dodge(Suit.Diamond, 10),
		new std.Dodge(Suit.Diamond, 11),
		new std.Dodge(Suit.Diamond, 11),

		new std.Peach(Suit.Heart, 3),
		new std.Peach(Suit.Heart, 4),
		new std.Peach(Suit.Heart, 6),
		new std.Peach(Suit.Heart, 7),
		new std.Peach(Suit.Heart, 8),
		new std.Peach(Suit.Heart, 9),
		new std.Peach(Suit.Heart, 12),
		new std.Peach(Suit.Diamond, 12),
	];
}

export default createBasicCards;
