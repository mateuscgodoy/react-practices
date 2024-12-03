export enum CharFormActions {
  CHANGE_FACTION = 'change-faction',
  CHANGE_RACE = 'change-race',
  CHANGE_CLASS = 'change-class',
  CHANGE_NAME = 'change-name',
  CHANGE_BTYPE = 'change-bodyType',
}

export type CharFormState = {
  faction: string;
  race: string;
  wowClass: string;
  name: string;
  bodyType: string;
};

export type CharFormAction = {
  type: CharFormActions;
  data: string;
};

export function charFormReducer(
  state: CharFormState,
  action: CharFormAction
): CharFormState {
  switch (action.type) {
    case CharFormActions.CHANGE_FACTION:
      return {
        ...state,
        faction: action.data,
        race: '',
        wowClass: '',
      };
    case CharFormActions.CHANGE_RACE:
      return { ...state, race: action.data };
    case CharFormActions.CHANGE_CLASS:
      return { ...state, wowClass: action.data };
    case CharFormActions.CHANGE_NAME:
      return { ...state, name: action.data };
    case CharFormActions.CHANGE_BTYPE:
      return { ...state, bodyType: action.data };
  }
}
