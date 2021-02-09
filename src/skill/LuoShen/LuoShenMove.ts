import {
	Skill,
	SkillEffect,
	EventType,
	Judgement,
	Player,
} from '@karuta/sanguosha-pack';

export default class LuoShenMove extends SkillEffect<Judgement> {
	constructor(skill: Skill) {
		super(skill, EventType.AfterIssuingJudgement);
		this.compulsory = true;
	}

	getInvoker(judgement: Judgement): Player {
		return judgement.player;
	}

	isTriggerable(judgement: Judgement): boolean {
		return judgement.origin === this.skill.getName() && judgement.isEffective();
	}

	async process(): Promise<boolean> {
		return true;
	}
}
