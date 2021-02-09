import { CardSuit as Suit } from '@karuta/sanguosha-core';

import {
	MonadicTrickCard,
	GameDriver,
	CardEffect,
	Player,
	CardPattern,
	CardAction,
	Damage,
	CardExpense,
	Card,
} from '@karuta/sanguosha-pack';

class Duel extends MonadicTrickCard {
	constructor(suit: Suit, number: number) {
		super('duel', suit, number);
	}

	async filterPlayer(driver: GameDriver, selected: Player[], target: Player, source: Player): Promise<boolean> {
		return super.filterPlayer(driver, selected, target, source) && target !== source;
	}

	async onEffect(driver: GameDriver, effect: CardEffect): Promise<void> {
		const { from, to } = effect;
		if (!from || !to || from === to) {
			return;
		}

		const players = [to, from];
		let i = 0;
		for (;;) {
			const current = players[i];
			const cards = await current.askForCards([current.getHandArea()], {
				action: CardAction.Expend,
				minNum: 0,
				maxNum: 1,
				pattern: new CardPattern({ namePostfix: 'strike' }),
			});
			if (!cards || cards.length <= 0) {
				break;
			}

			const expense = new CardExpense(current, cards[0] as Card);
			expense.origin = effect;
			await driver.expendCard(expense);

			i = (i + 1) % players.length;
		}

		const loser = players[i];
		const winner = players[(i + 1) % players.length];
		const damage = new Damage(winner, loser, 1);
		damage.card = this;
		await driver.damage(damage);
	}
}

export default Duel;
