import {
	PlayerPhase as Phase,
	CardSuit as Suit,
} from '@karuta/sanguosha-core';

import {
	BasicCard,
	GameDriver,
	Player,
	Damage,
	CardEffect,
} from '@karuta/sanguosha-pack';

class Strike extends BasicCard {
	constructor(suit: Suit, number: number) {
		super('strike', suit, number);
	}

	async isAvailable(driver: GameDriver, source: Player): Promise<boolean> {
		return driver && source && source.getPhase() === Phase.Play;
	}

	async filterPlayer(driver: GameDriver, selected: Player[], target: Player, source: Player): Promise<boolean> {
		if (selected.length > 0 || !target) {
			return false;
		}

		if (!source) {
			return true;
		}

		const inRange = await driver.isInAttackRange(source, target);
		return inRange;
	}

	async isFeasible(driver: GameDriver, selected: Player[]): Promise<boolean> {
		return driver && selected.length === 1;
	}

	async effect(driver: GameDriver, effect: CardEffect): Promise<void> {
		if (!effect.to || effect.to.isDead()) {
			return;
		}

		const damage = new Damage(effect.from, effect.to, 1);
		damage.card = this;
		driver.damage(damage);
	}
}

export default Strike;
