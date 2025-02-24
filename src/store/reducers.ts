interface State {
  tests: string[];
}

const initialState: State = {
  tests: [],
};

interface Action {
  type: 'ADD_TEST';
  payload: string;
}

export const rootReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'ADD_TEST':
      return { ...state, tests: [...state.tests, action.payload] };
    default:
      return state;
  }
};
