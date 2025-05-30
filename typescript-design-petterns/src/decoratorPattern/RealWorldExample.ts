// This file explains how we add equipment to an in game character.
// Characters have 5 slots for equipment: head, chest, legs, arms, hands
// Each piece of equipment can augment a characters base stats
// Some armor can also affect the characters abilities

export interface Character {
    showStatistics(): Stats;
}

export interface Stats {
    strength: number;
    dexterity: number;
    intelligence: number;
}

class MyCharacter implements Character {
    private baseStats: Stats;

    constructor(stats: Stats) {
        this.baseStats = stats;
    }

    public showStatistics(): Stats {
        return { ...this.baseStats }; // Return a copy to prevent mutation
    }
}

class EquipmentDecorator implements Character {
    protected character: Character;

    constructor(character: Character) {
        this.character = character;
    }

    public showStatistics(): Stats {
        return this.character.showStatistics(); // base behavior
    }
}

class Helmet extends EquipmentDecorator {
    public showStatistics(): Stats {
        const stats = this.character.showStatistics();
        return { ...stats, strength: stats.strength + 3 };
    }
}

class WizardsRing extends EquipmentDecorator {
    public showStatistics(): Stats {
        const stats = this.character.showStatistics();
        return { ...stats, intelligence: stats.intelligence + 7 };
    }
}

export { WizardsRing, Helmet, MyCharacter}