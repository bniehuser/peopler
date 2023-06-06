import { Component } from "./Component";

type CombatStatistics = {
    attackDamage: number;
    defense: number;
    evasion: number;
}
export class CombatStatisticsComponent extends Component<CombatStatistics> {
    _defaultData = {
        attackDamage: 1,
        defense: 1,
        evasion: 1,
    }
}
