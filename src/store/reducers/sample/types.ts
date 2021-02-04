export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

export interface IIncreaseRequest {
  type: typeof INCREASE;
}

export interface IDecreaseRequest {
  type: typeof DECREASE;
}

export type SampleActionTypes = IIncreaseRequest | IDecreaseRequest;
