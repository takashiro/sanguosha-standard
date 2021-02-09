import {
	SkillTag as Tag,
	SkillOwner,
} from '@karuta/sanguosha-core';

import {
	CardUse,
	EventType,
	MonadicSkill,
} from '@karuta/sanguosha-pack';

export default class QianXun extends MonadicSkill<CardUse> {
	constructor(owner: SkillOwner) {
		super(owner, 'qianxun', EventType.BeingCardTargets, [Tag.Compulsory]);
	}

	isTriggerable(use: CardUse): boolean {
		const { card } = use;
		const cardName = card.getName();
		if (cardName !== 'indulge' && cardName !== 'snatch') {
			return false;
		}
		const owner = this.getOwner();
		for (const to of use.to) {
			if (to === owner) {
				return true;
			}
		}
		return false;
	}

	async process(use: CardUse): Promise<boolean> {
		const owner = this.getOwner();
		for (let i = 0; i < use.to.length; i++) {
			if (use.to[i] === owner) {
				use.to.splice(i, 1);
				break;
			}
		}
		return false;
	}
}
