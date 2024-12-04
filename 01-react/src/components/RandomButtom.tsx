import { CharFormState } from '../lib/charFormReducer';
import { ALLIANCE, HORDE } from '../lib/wow-data';

export function RandomButton({
  handleClick,
}: {
  handleClick: (state: CharFormState) => void;
}) {
  return (
    <button
      type='button'
      onClick={() => {
        const randomFaction =
          Math.floor(Math.random() * 2) === 0 ? ALLIANCE : HORDE;
        const randomRaceIndex = Math.floor(
          Math.random() * randomFaction.members.length
        );
        const randomRace = randomFaction.members[randomRaceIndex];
        const randomClassIndex = Math.floor(
          Math.random() * randomRace.classes.length
        );
        const randomClass = randomRace.classes[randomClassIndex];
        const randomBodyType =
          Math.floor(Math.random() * 2) === 0 ? 'Body Type 1' : 'Body Type 2';
        handleClick({
          faction: randomFaction.name,
          race: randomRace.race,
          wowClass: randomClass.name,
          name: '',
          bodyType: randomBodyType,
        });
      }}
    >
      Random Character
    </button>
  );
}
