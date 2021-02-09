import {
	SkillOwner,
	CardAreaType,
} from '@karuta/sanguosha-core';

import {
	Card,
	Damage,
	EventType,
	MonadicSkill,
} from '@karuta/sanguosha-pack';

export default class JianXiong extends MonadicSkill<Damage> {
	constructor(owner: SkillOwner) {
		super(owner, 'jianxiong', EventType.AfterDamaged);
	}

	isTriggerable(damage: Damage): boolean {
		return Boolean(damage.card) && damage.to === this.getOwner();
	}

	async process(damage: Damage): Promise<boolean> {
		if (!damage.card) {
			return false;
		}

		const card = damage.card as Card;
		const location = card.getLocation();
		if (!location || location.getType() !== CardAreaType.Process) {
			return false;
		}

		const driver = this.getDriver();
		await driver?.moveCards([card], damage.to.getHandArea(), { open: true });

		return false;
	}
}
