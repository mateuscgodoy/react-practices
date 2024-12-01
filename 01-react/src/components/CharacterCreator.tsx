import { useState } from 'react';
import { WOW_DATA } from '../lib/wow-data';
import { FactionForm } from './FactionForm';

export function CharacterCreator() {
  const randomStartFaction = Math.floor(Math.random() * WOW_DATA.length);
  const [faction, setFaction] = useState(WOW_DATA[randomStartFaction].name);

  const factionForms = WOW_DATA.map((fact) => (
    <FactionForm
      key={fact.name}
      faction={fact}
      active={faction === fact.name}
    />
  ));

  const factionInputs = WOW_DATA.map((data) => {
    return (
      <section key={data.name}>
        <input
          type='radio'
          name='faction'
          id={data.name}
          onChange={() => setFaction(data.name)}
          checked={faction === data.name}
        />
        <label htmlFor={data.name}>{data.name}!!</label>
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

        <fieldset>
          <legend>Enter your Name and Body Type:</legend>
        </fieldset>
      </form>
    </>
  );
}
