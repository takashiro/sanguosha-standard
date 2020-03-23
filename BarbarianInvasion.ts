import { CardSuit as Suit } from '@karuta/sanguosha-core';

import AreaEffectTrickCard from './AreaEffectTrickCard';
import CardAction from '../../core/CardAction';
import CardPattern from '../../core/CardPattern';

import Card from '../../driver/Card';
import CardEffectStruct from '../../driver/CardEffectStruct';
import CardExpense from '../../driver/CardExpense';
import DamageStruct from '../../driver/DamageStruct';
import GameDriver from '../../driver/GameDriver';

class BarbarianInvasion extends AreaEffectTrickCard {
	constructor(suit: Suit, number: number) {
		super('barbarian-invasion', suit, number);
	}

	async effect(driver: GameDriver, effect: CardEffectStruct): Promise<void> {
		const { to } = effect;
		if (!to) {
			return;
		}

		const cards = await to.askForCards(to.getHandArea(), {
			action: CardAction.Expend,
			minNum: 0,
			maxNum: 1,
			pattern: new CardPattern({ namePostfix: 'strike' }),
		});

		if (cards.length <= 0) {
			const damage = new DamageStruct(effect.from, to, 1);
			damage.card = this;
			await driver.damage(damage);
		} else {
			const card = cards[0] as Card;
			const expense = new CardExpense(to, card);
			expense.origin = effect;
			await driver.expendCard(expense);
		}
	}
}

export default BarbarianInvasion;
