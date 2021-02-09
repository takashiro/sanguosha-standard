import {
	Card,
	Skill,
	PlayerPhase as Phase,
	CardColor as Color,
} from '@karuta/sanguosha-core';

import {
	PhaseChange,
	EventType,
	Judgement,
	CardPattern,
	SkillEffect,
	Player as ServerPlayer,
} from '@karuta/sanguosha-pack';

export default class LuoShenJudge extends SkillEffect<PhaseChange> {
	constructor(skill: Skill) {
		super(skill, EventType.StartingPhase);
	}

	getInvoker(change: PhaseChange): ServerPlayer {
		return change.player;
	}

	isTriggerable(change: PhaseChange): boolean {
		return change.player === this.getOwner() && change.to === Phase.Start;
	}

	async process(change: PhaseChange): Promise<boolean> {
		const driver = this.getDriver();
		if (!driver) {
			return false;
		}

		const { player } = change;
		const cards: Card[] = [];
		const colors = [Color.Black];
		const pattern = new CardPattern({ colors });
		for (;;) {
			const judgement = new Judgement(player, this.getName(), pattern);
			await driver.judge(judgement);
			if (!judgement.isEffective()) {
				break;
			}
			const card = judgement.getCard();
			if (card) {
				cards.push(card);
			}

			if (await player.invokeSkill([this.skill.getName()]) !== 0) {
				break;
			}
		}

		if (cards.length > 0) {
			await driver.moveCards(cards, player.getHandArea(), { open: true });
		}

		return false;
	}
}
