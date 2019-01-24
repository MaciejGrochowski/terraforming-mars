
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";

export class LightningHarvest implements IProjectCard {
    public cost: number = 8;
    public tags: Array<Tags> = [Tags.ENERGY];
    public name: string = "Lightning Harvest";
    public cardType: CardType = CardType.AUTOMATED;
    public text: string = "Requires 3 science tags. Increase your energy production and your mega credit production 1 step each. Gain 1 victory point.";
    public description: string = "Floating supercapacitors connecting clouds with a superconducting wire. The triggered and collected discharges are beamed down to a receptor. Gain 1 victory point.";
    public play(player: Player, game: Game): Promise<void> {
        if (player.getTagCount(Tags.SCIENCE)) {
            return Promise.reject("Requires 3 science tags");
        }
        player.energyProduction++;
        player.megaCreditProduction++;
        player.victoryPoints++;
        return Promise.resolve();
    }
}