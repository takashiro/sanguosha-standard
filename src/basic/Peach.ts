import {
	CardSuit as Suit,
	PlayerPhase as Phase,
} from '@karuta/sanguosha-core';

import {
	BasicCard,
	GameDriver,
	Player,
	CardEffect,
	Recover,
	CardUse,
} from '@karuta/sanguosha-pack';

class Peach extends BasicCard {
	constructor(suit: Suit, number: number) {
		super('peach', suit, number);
	}

	async isAvailable(driver: GameDriver, source: Player): Promise<boolean> {
		return driver && source && source.getPhase() === Phase.Play && source.isWounded();
	}

	async filterPlayer(): Promise<boolean> {
		return false;
	}

	async isFeasible(): Promise<boolean> {
		return true;
	}

	async onUse(driver: GameDriver, use: CardUse): Promise<void> {
		const { from } = use;
		use.to.push(from);
	}

	async effect(driver: GameDriver, effect: CardEffect): Promise<void> {
		if (!effect.to) {
			return;
		}

		const recover = new Recover(effect.from, effect.to, 1);
		driver.recover(recover);
	}
}

export default Peach;
