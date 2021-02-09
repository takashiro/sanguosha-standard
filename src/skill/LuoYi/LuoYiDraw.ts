import { PlayerPhase as Phase } from '@karuta/sanguosha-core';

import {
	CardDraw,
	EventType,
	Player,
	SkillEffect,
} from '@karuta/sanguosha-pack';

import LuoYi from '.';

export default class LuoYiDraw extends SkillEffect<CardDraw> {
	constructor(skill: LuoYi) {
		super(skill, EventType.DrawingNCards);
	}

	isTriggerable(draw: CardDraw): boolean {
		return draw.player === this.getOwner() && draw.num > 0 && draw.player.getPhase() === Phase.Draw;
	}

	getInvoker(draw: CardDraw): Player {
		return draw.player;
	}

	async process(draw: CardDraw): Promise<boolean> {
		draw.num--;
		const skill = this.skill as LuoYi;
		skill.setEffectiveRound(draw.player.getRound());
		return false;
	}
}
