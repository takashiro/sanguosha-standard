import {
	SkillOwner,
	PlayerPhase as Phase,
} from '@karuta/sanguosha-core';

import {
	MonadicSkill,
	EventType,
	PhaseChange,
} from '@karuta/sanguosha-pack';

export default class BiYue extends MonadicSkill<PhaseChange> {
	constructor(owner: SkillOwner) {
		super(owner, 'biyue', EventType.ProceedingPhase);
	}

	isTriggerable(change: PhaseChange): boolean {
		return change.to === Phase.End && change.player === this.getOwner();
	}

	async process(change: PhaseChange): Promise<boolean> {
		const { player } = change;
		const driver = this.getDriver();
		await driver?.drawCards(player, 1);
		return false;
	}
}
