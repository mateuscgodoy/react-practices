import { Faction } from '../lib/wow-data';

type FactionFormProps = {
  faction: Faction;
  active: boolean;
  onRaceChange: (race: string) => void;
};

export function FactionForm({
  faction,
  active,
  onRaceChange,
}: FactionFormProps) {
  const races = faction.members.map((member) => {
    return (
      <section key={member.race}>
        <input
          type='radio'
          name='race'
          id={member.race}
          disabled={!active}
          onChange={() => {
            onRaceChange(member.race);
          }}
        />
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
