import {
	SkillTag as Tag,
	SkillOwner as Owner,
} from '@karuta/sanguosha-core';

import {
	MonadicSkill,
	DistanceVector,
	EventType,
} from '@karuta/sanguosha-pack';

export default class MaShu extends MonadicSkill<DistanceVector> {
	constructor(owner: Owner) {
		super(owner, 'mashu', EventType.CalculatingDistance, [Tag.Compulsory]);
	}

	isTriggerable(vector: DistanceVector): boolean {
		return vector.from === this.getOwner() && vector.to !== this.getOwner();
	}

	async process(vector: DistanceVector): Promise<boolean> {
		vector.distance -= 1;
		return false;
	}
}
