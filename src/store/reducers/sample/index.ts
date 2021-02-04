import { DECREASE, INCREASE, SampleActionTypes } from "./types";

interface SampleState {
  value: number;
}

const initialState: SampleState = {
  value: 0,
};

const sampleReducer = (state = initialState, action: SampleActionTypes): SampleState => {
  switch (action.type) {
    case INCREASE:
      return { ...state, value: state.value + 1 };

    case DECREASE:
      return { ...state, value: state.value - 1 };

    default:
      return state;
  }
};

export default sampleReducer;
