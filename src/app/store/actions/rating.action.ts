import { Action } from '@ngrx/store';

export enum RatingActionTypes {
  EDIT_RATE = 'EDIT_RATE',
}

export class EditRate implements Action {
  readonly type = RatingActionTypes.EDIT_RATE;
  constructor(public id: number, public value: number) {}
}

export type RatingAction = EditRate;
