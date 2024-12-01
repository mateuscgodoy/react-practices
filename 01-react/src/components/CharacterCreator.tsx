import { WOW_DATA } from '../lib/wow-data';
import { FactionForm } from './FactionForm';

export function CharacterCreator() {
  const factionForms = WOW_DATA.map((fact) => (
    <FactionForm key={fact.name} faction={fact} />
  ));

  return (
    <>
      <h3>Create your new Character</h3>
      <p>Customize with your own choices or generate a random one!</p>
      <form action='' method='get'>
        <fieldset>
          <legend>For the...</legend>

          <section>
            <input type='radio' name='faction' id='alliance' />
            <label htmlFor='alliance'>Alliance!!</label>
          </section>
          <section>
            <input type='radio' name='faction' id='horde' />
            <label htmlFor='horde'>Horde!!</label>
          </section>
        </fieldset>

        {factionForms}

        <fieldset>
          <legend>Enter your Name and Body Type:</legend>
        </fieldset>
      </form>
    </>
  );
}
