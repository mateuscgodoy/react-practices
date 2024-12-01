import { useState } from 'react';
import { WOW_DATA, WoWClass } from '../lib/wow-data';
import { FactionForm } from './FactionForm';

export function CharacterCreator() {
  const randomStartFaction = Math.floor(Math.random() * WOW_DATA.length);
  const [faction, setFaction] = useState(WOW_DATA[randomStartFaction].name);
  const [race, setRace] = useState('');
  const [validClasses, setValidClasses] = useState<WoWClass[]>([]);

  let classData: WoWClass[] = [];

  const handleRaceChange = (race: string) => {
    setRace(race);
    const nextClasses = WOW_DATA.find(
      (el) => el.name === faction
    )!.members.filter((el) => el.race === race)[0].classes;
    setValidClasses(nextClasses);
  };

  const factionForms = WOW_DATA.map((fact) => {
    // Uniquely extract each available class
    classData = fact.members.reduce((acc: WoWClass[], cur) => {
      cur.classes.forEach((wowClass) => {
        if (!acc.some((wClass) => wClass.name === wowClass.name)) {
          acc.push(wowClass);
        }
      });
      return acc;
    }, []);

    return (
      <FactionForm
        key={fact.name}
        faction={fact}
        active={faction === fact.name}
        onRaceChange={handleRaceChange}
      />
    );
  });

  const factionInputs = WOW_DATA.map((data) => {
    return (
      <section key={data.name}>
        <input
          type='radio'
          name='faction'
          id={data.name}
          onChange={() => {
            setFaction(data.name);
            setValidClasses([]);
            setRace('');
          }}
          checked={faction === data.name}
        />
        <label htmlFor={data.name}>{data.name}!!</label>
      </section>
    );
  });

  const classes = classData.map((data) => {
    return (
      <section key={data.name}>
        <input
          type='radio'
          name='class'
          id={data.name}
          disabled={!validClasses.some((el) => el.name === data.name)}
        />
        <label htmlFor={data.name}>{data.name}</label>
      </section>
    );
  });

  return (
    <>
      <h3>Create your new Character</h3>
      <p>Customize with your own choices or generate a random one!</p>
      <form action='' method='get'>
        <fieldset>
          <legend>For the...</legend>
          {factionInputs}
        </fieldset>

        {factionForms}
        <p>{race.length ? `You've chosen: ${race}` : ''}</p>

        <fieldset>
          <legend>Choose your class: </legend>
          {classes}
        </fieldset>

        <fieldset>
          <legend>Enter your Name and Body Type:</legend>
        </fieldset>
      </form>
    </>
  );
}
