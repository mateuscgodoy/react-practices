import { Faction, WoWClass } from '../lib/wow-data';

type FactionFormProps = {
  faction: Faction;
};

export function FactionForm({ faction }: FactionFormProps) {
  const races = faction.members.map((member) => {
    return (
      <section key={member.race}>
        <input type='radio' name='race' id={member.race} />
        <label htmlFor={member.race}>{member.race}</label>
      </section>
    );
  });

  // Uniquely extract each available class
  const classData: WoWClass[] = faction.members.reduce(
    (acc: WoWClass[], cur) => {
      cur.classes.forEach((wowClass) => {
        if (!acc.some((wClass) => wClass.name === wowClass.name)) {
          acc.push(wowClass);
        }
      });
      return acc;
    },
    []
  );

  const classes = classData.map((data) => {
    return (
      <section key={data.name}>
        <input type='radio' name='class' id={`${faction.name}-${data.name}`} />
        <label htmlFor={data.name}>{data.name}</label>
      </section>
    );
  });

  return (
    <>
      <fieldset>
        <legend>{faction.name} Races: </legend>
        {races}
      </fieldset>

      <fieldset>
        <legend>{faction.name} Classes: </legend>
        {classes}
      </fieldset>
    </>
  );
}
