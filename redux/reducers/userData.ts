// import * as actions from "../actionTypes/lyricsActionTypes";

export type UserDataType = {
  name: string,
};

export type InitialStateType = {
  userData: UserDataType | {};
};

const initialState: InitialStateType = {
  userData: {
    name: '',
  },
};

export default function userDataReducer(
    state: InitialStateType = initialState,
    action: any,
): InitialStateType {
  switch (action.type) {
    case 'Hello': return { userData: { name: 'Andrey' } };
    default:
      return state;
  }
}
