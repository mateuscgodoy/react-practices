import { useState } from 'react';
import { ALLIANCE, HORDE, WOW_CLASSES } from '../lib/wow-data';
import { CharFormState } from '../lib/charFormReducer';
import { SingleOptionFieldset } from './SingleOptionFieldset';
import { RadioSectionType } from './RadioSection';
import { RandomButton } from './RandomButtom';

export function CharacterCreatorForm() {
  const randomStartFaction = Math.floor(Math.random() * 2);
  const initialState: CharFormState = {
    faction: randomStartFaction === 0 ? ALLIANCE.name : HORDE.name,
    race: '',
    wowClass: '',
    name: '',
    bodyType: Math.random() > 0.5 ? 'Body Type 1' : 'Body Type 2',
  };

  const [charForm, setCharForm] = useState(initialState);

  const factionFormData: RadioSectionType[] = [ALLIANCE.name, HORDE.name].map(
    (el) => ({
      id: el,
      label: el,
      onChange: (val) => {
        setCharForm({ ...initialState, faction: val });
      },
      name: 'faction',
      current: charForm.faction,
    })
  );

  const allianceRaceData: RadioSectionType[] = ALLIANCE.members.map((el) => ({
    name: 'race',
    id: el.race,
    label: el.race,
    onChange: (val) => {
      setCharForm({ ...charForm, race: val, wowClass: '' });
      let nextRace = ALLIANCE.members.find((member) => member.race === val);
      if (!nextRace)
        nextRace = HORDE.members.find((member) => member.race === val);
    },
    current: charForm.race,
    disabled: charForm.faction !== ALLIANCE.name,
  }));

  const hordeRaceData: RadioSectionType[] = HORDE.members.map((el) => ({
    name: 'race',
    id: el.race,
    label: el.race,
    onChange: (val) => {
      setCharForm({ ...charForm, race: val, wowClass: '' });
      let nextRace = ALLIANCE.members.find((member) => member.race === val);
      if (!nextRace)
        nextRace = HORDE.members.find((member) => member.race === val);
    },
    current: charForm.race,
    disabled: charForm.faction !== HORDE.name,
  }));

  const uniqueClasses = WOW_CLASSES.map((el) => el.name);

  const shouldDisableClass = (className: string): boolean => {
    const currentFaction =
      charForm.faction === ALLIANCE.name ? ALLIANCE : HORDE;
    const currentRace = currentFaction.members.find(
      (member) => member.race === charForm.race
    );
    const result = currentRace?.classes.findIndex(
      (el) => el.name === className
    );
    return charForm.race === '' || result === -1;
  };
  const classData: RadioSectionType[] = uniqueClasses.map((el) => ({
    id: el,
    name: 'class',
    label: el,
    onChange: (val: string) => setCharForm({ ...charForm, wowClass: val }),
    current: charForm.wowClass,
    disabled: shouldDisableClass(el),
  }));

  const bodyTypeData: RadioSectionType[] = ['Body Type 1', 'Body Type 2'].map(
    (el) => ({
      id: el,
      label: el,
      name: el,
      current: charForm.bodyType,
      onChange: (val: string) => setCharForm({ ...charForm, bodyType: val }),
    })
  );
  return (
    <form action='' method='get'>
      <SingleOptionFieldset legend='For the...' data={factionFormData} />
      <SingleOptionFieldset
        legend={`${ALLIANCE.name} Races:`}
        data={allianceRaceData}
      />
      <SingleOptionFieldset
        legend={`${HORDE.name} Races:`}
        data={hordeRaceData}
      />
      <SingleOptionFieldset legend={`Classes:`} data={classData} />
      <SingleOptionFieldset legend='Character Details:' data={bodyTypeData}>
        <section>
          <label htmlFor='char-name'>Name:</label>
          <input
            type='text'
            id='char-name'
            required
            value={charForm.name}
            onInput={(e) => {
              setCharForm({
                ...charForm,
                name: (e.target as HTMLInputElement).value,
              });
            }}
          />
        </section>
      </SingleOptionFieldset>
      <section>
        <RandomButton handleClick={setCharForm} />
        <button type='submit'>Create</button>
      </section>
    </form>
  );
}
