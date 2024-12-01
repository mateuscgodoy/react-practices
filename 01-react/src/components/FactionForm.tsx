import { Faction } from '../lib/wow-data';

type FactionFormProps = {
  faction: Faction;
  active: boolean;
};

export function FactionForm({ faction, active }: FactionFormProps) {
  const races = faction.members.map((member) => {
    return (
      <section key={member.race}>
        <input type='radio' name='race' id={member.race} disabled={!active} />
        <label htmlFor={member.race}>{member.race}</label>
      </section>
    );
  });

  return (
    <>
      <fieldset>
        <legend>{faction.name} Races: </legend>
        {races}
      </fieldset>
    </>
  );
}
