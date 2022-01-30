import { ActionReducerMap } from '@ngrx/store';
import { Rating } from 'src/app/modules/rating/rating.model';
import { RatingReducer } from './rating.reducer';

export const rootReducer = {};

export interface AppState {
  rating: Rating[];
}

export const reducers: ActionReducerMap<AppState, any> = {
  rating: RatingReducer,
};
