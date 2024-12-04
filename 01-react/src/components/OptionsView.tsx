import { ALLIANCE, HORDE, WOW_CLASSES } from '../lib/wow-data';
import { FactionTable } from './FactionTable';

export function OptionsView() {
  return (
    <>
      <h2>Races and Classes Table</h2>
      <p>Complete reference of all possible races and class combinations.</p>
      <div>
        {WOW_CLASSES.map((el) => (
          <div>{el.name}</div>
        ))}
        <FactionTable name={ALLIANCE.name} members={ALLIANCE.members} />
        <FactionTable name={HORDE.name} members={HORDE.members} />
      </div>
    </>
  );
}
