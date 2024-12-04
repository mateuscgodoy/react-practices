import { Faction, WOW_CLASSES } from '../lib/wow-data';

export function FactionTable(faction: Faction) {
  return (
    <div>
      <h3>{faction.name}</h3>
      {faction.members.map((el) => (
        <div>
          <div>{el.race}</div>
          {WOW_CLASSES.map((wowClass) => (
            <div>
              {el.classes.some((className) => className.name === wowClass.name)
                ? '✅'
                : '❌'}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
