import { SkillOwner } from '@karuta/sanguosha-core';

import {
	EventType,
	Judgement,
	MonadicSkill,
} from '@karuta/sanguosha-pack';

export default class TianDu extends MonadicSkill<Judgement> {
	constructor(owner: SkillOwner) {
		super(owner, 'tiandu', EventType.AfterIssuingJudgement);
	}

	isTriggerable(judgement: Judgement): boolean {
		const { player } = judgement;
		return player === this.getOwner();
	}

	async process(judgement: Judgement): Promise<boolean> {
		const driver = this.getDriver();
		if (!driver) {
			return false;
		}

		const card = judgement.getCard();
		if (card) {
			const { player } = judgement;
			await driver.moveCards([card], player.getHandArea(), { open: true });
			return true;
		}

		return false;
	}
}
