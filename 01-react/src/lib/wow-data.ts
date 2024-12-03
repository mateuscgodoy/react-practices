export type Faction = {
  name: string;
  members: RacesAndClasses[];
};

export type RacesAndClasses = {
  race: string;
  classes: WoWClass[];
};

export type WoWClass = {
  name: string;
  icon: string;
  colorHex?: string;
};

function createWowClass(
  name: string,
  icon: string,
  colorHex?: string
): WoWClass {
  return { name, icon, colorHex };
}

const warrior = createWowClass('Warrior', '⚔️', '#C79C6E');
const paladin = createWowClass('Paladin', '💫', '#F58CBA');
const hunter = createWowClass('Hunter', '🏹', '#ADB473');
const shaman = createWowClass('Shaman', '🔥', '#0070DE');
const druid = createWowClass('Druid', '🍂', '#FF7D0A');
const rogue = createWowClass('Rogue', '🗡️', '#FFF569');
const mage = createWowClass('Mage', '🪄', '#69CCF0');
const warlock = createWowClass('Warlock', '😈', '#9482C9');
const priest = createWowClass('Priest', '🙏', '#FFFFFF');

export const WOW_CLASSES: WoWClass[] = [
  warlock,
  warrior,
  paladin,
  hunter,
  shaman,
  druid,
  mage,
  rogue,
  priest,
];

export const ALLIANCE: Faction = {
  name: 'Alliance',
  members: [
    {
      race: 'Human',
      classes: [warrior, mage, priest, warlock, rogue, paladin],
    },
    {
      race: 'Dwarf',
      classes: [warrior, priest, hunter, rogue, paladin],
    },
    {
      race: 'Gnome',
      classes: [warrior, mage, warlock, rogue],
    },
    {
      race: 'Night Elf',
      classes: [warrior, hunter, rogue, druid, priest],
    },
  ],
};

export const HORDE: Faction = {
  name: 'Horde',
  members: [
    {
      race: 'Orc',
      classes: [warrior, warlock, rogue, shaman, hunter],
    },
    {
      race: 'Troll',
      classes: [warrior, mage, rogue, shaman, hunter, priest],
    },
    {
      race: 'Tauren',
      classes: [warrior, shaman, hunter, druid],
    },
    {
      race: 'Undead',
      classes: [warrior, mage, rogue, priest, warlock],
    },
  ],
};
