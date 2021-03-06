import { CardSuit as Suit } from '@karuta/sanguosha-core';

import {
	MonadicTrickCard,
	CardAction,
	GameDriver,
	CardEffect,
	Player,
} from '@karuta/sanguosha-pack';

class Dismantle extends MonadicTrickCard {
	constructor(suit: Suit, number: number) {
		super('dismantle', suit, number);
	}

	async isAvailable(driver: GameDriver, source: Player): Promise<boolean> {
		if (!await super.isAvailable(driver, source)) {
			return false;
		}

		const others = driver.getAlivePlayersExcept(source);
		for (const other of others) {
			if (!other.isEmpty()) {
				return true;
			}
		}

		return false;
	}

	async filterPlayer(driver: GameDriver, selected: Player[], target: Player, source: Player): Promise<boolean> {
		if (!super.filterPlayer(driver, selected, target, source)) {
			return false;
		}

		return target !== source && !target.isEmpty();
	}

	async effect(driver: GameDriver, effect: CardEffect): Promise<void> {
		const { from, to } = effect;
		if (!from || !to || from.isDead() || to.isDead()) {
			return;
		}

		if (to.isEmpty()) {
			return;
		}

		const cards = await from.askForCards(to.getCardAreas(), {
			action: CardAction.Discard,
			minNum: 1,
			maxNum: 1,
		});

		if (!cards || cards.length <= 0) {
			return;
		}

		await driver.moveCards(cards, driver.getDiscardPile(), { open: true });
	}
}

export default Dismantle;
