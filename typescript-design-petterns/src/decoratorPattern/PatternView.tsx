import { useState } from "react";
import { Helmet, MyCharacter, WizardsRing, type Character, type Stats } from "./RealWorldExample";

function DecoratorPatternView() {
  const baseStats: Stats = {
    strength: 10,
    dexterity: 10,
    intelligence: 10,
  };

  const [useHelmet, setUseHelmet] = useState(false);
  const [useRing, setUseRing] = useState(false);

  // Build the decorated character based on toggled equipment
  const getDecoratedCharacter = (): Character => {
    let character: Character = new MyCharacter(baseStats);

    if (useHelmet) character = new Helmet(character);
    if (useRing) character = new WizardsRing(character);

    return character;
  };

  const character = getDecoratedCharacter();
  const stats = character.showStatistics();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Decorator Pattern: Character Equipment</h1>

      <div className="mb-4">
        <label className="mr-4">
          <input
            type="checkbox"
            checked={useHelmet}
            onChange={() => setUseHelmet(!useHelmet)}
          />{" "}
          Equip Helmet (+3 Strength)
        </label>
        <label>
          <input
            type="checkbox"
            checked={useRing}
            onChange={() => setUseRing(!useRing)}
          />{" "}
          Equip Wizard’s Ring (+7 Intelligence)
        </label>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Character Stats:</h2>
        <ul className="list-disc pl-5 mt-2">
          <li>Strength: {stats.strength}</li>
          <li>Dexterity: {stats.dexterity}</li>
          <li>Intelligence: {stats.intelligence}</li>
        </ul>
      </div>
    </div>
  );
}

export { DecoratorPatternView };