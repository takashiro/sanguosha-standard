import {
	SkillOwner,
	PlayerPhase as Phase,
} from '@karuta/sanguosha-core';

import {
	CardDraw,
	EventType,
	MonadicSkill,
} from '@karuta/sanguosha-pack';

export default class YingZi extends MonadicSkill<CardDraw> {
	constructor(owner: SkillOwner) {
		super(owner, 'yingzi', EventType.DrawingNCards);
	}

	isTriggerable(draw: CardDraw): boolean {
		const { player } = draw;
		return player === this.getOwner() && player.getPhase() === Phase.Draw;
	}

	async process(draw: CardDraw): Promise<boolean> {
		draw.num++;
		return false;
	}
}
