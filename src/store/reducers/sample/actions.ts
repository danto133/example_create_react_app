import { DECREASE, INCREASE, SampleActionTypes } from "./types";

export const increase = (): SampleActionTypes => ({
  type: INCREASE,
});

export const decrease = (): SampleActionTypes => ({
  type: DECREASE,
});
