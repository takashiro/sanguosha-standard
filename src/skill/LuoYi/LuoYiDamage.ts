import { PlayerPhase as Phase } from '@karuta/sanguosha-core';

import {
	SkillEffect,
	Damage,
	EventType,
	Player,
} from '@karuta/sanguosha-pack';

import LuoYi from '.';

export default class LuoYiDamage extends SkillEffect<Damage> {
	constructor(skill: LuoYi) {
		super(skill, EventType.Damaging);
		this.compulsory = true;
	}

	isTriggerable(damage: Damage): boolean {
		const { from } = damage;
		if (!from || from !== this.getOwner()) {
			return false;
		}

		const { card } = damage;
		if (!card) {
			return false;
		}

		const cardName = card.getName();
		if (cardName !== 'duel' && !cardName.endsWith('strike')) {
			return false;
		}

		const skill = this.skill as LuoYi;
		if (from.getPhase() === Phase.Inactive || skill.getEffectiveRound() !== from.getRound()) {
			return false;
		}

		return true;
	}

	getInvoker(damage: Damage): Player {
		return damage.from as Player;
	}

	async process(damage: Damage): Promise<boolean> {
		damage.num++;
		return false;
	}
}
