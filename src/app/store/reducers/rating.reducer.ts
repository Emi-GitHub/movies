import { RatingActionTypes, RatingAction } from '../actions/rating.action';

export interface Rating {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

//I created 'initialState' because I do not have permissions to access the service, so I can not change 'vote_average' property.
const initialState: Rating[] = [
  {
    id: 1,
    title: 'Spider-Man: No Way Home',
    release_date: '2021-12-15',
    vote_average: 4.4,
    vote_count: 6,
  },
  {
    id: 2,
    title: 'Avengers: Endgame',
    release_date: '2019-04-24',
    vote_average: 4.3,
    vote_count: 2,
  },
  {
    id: 3,
    title: 'Avengers: Infinity War',
    release_date: '2018-04-25',
    vote_average: 4.3,
    vote_count: 23,
  },
  {
    id: 4,
    title: 'Shang-Chi and the Legend of the Ten Rings',
    release_date: '2014-07-30',
    vote_average: 3.9,
    vote_count: 23,
  },
  {
    id: 5,
    title: 'Guardians of the Galaxy',
    release_date: '2021-09-01',
    vote_average: 3.8,
    vote_count: 53,
  },
  {
    id: 6,
    title: 'Logan',
    release_date: '2021-12-15',
    vote_average: 3.7,
    vote_count: 16,
  },
  {
    id: 7,
    title: 'Captain America: The Winter Soldier',
    release_date: '2017-02-28',
    vote_average: 3.7,
    vote_count: 17,
  },
  {
    id: 8,
    title: 'The Avengers',
    release_date: '2014-03-02',
    vote_average: 3.6,
    vote_count: 156,
  },
  {
    id: 9,
    title: 'Thor: Ragnarok',
    release_date: '2021-04-25',
    vote_average: 3.6,
    vote_count: 64,
  },
  {
    id: 10,
    title: 'Guardians of the Galaxy Vol. 2',
    release_date: '2017-10-24',
    vote_average: 3.6,
    vote_count: 6,
  },
  {
    id: 11,
    title: '',
    release_date: '2017-04-19',
    vote_average: 3.6,
    vote_count: 62,
  },
  {
    id: 12,
    title: 'Deadpool',
    release_date: '2016-02-09',
    vote_average: 3.5,
    vote_count: 12,
  },
  {
    id: 13,
    title: 'Iron Man',
    release_date: '2017-04-19',
    vote_average: 3.5,
    vote_count: 62,
  },
  {
    id: 14,
    title: 'Black Widow',
    release_date: '2016-02-09',
    vote_average: 2.5,
    vote_count: 22,
  },
  {
    id: 15,
    title: 'Spider-Man: Far From Home',
    release_date: '2008-04-30',
    vote_average: 2.4,
    vote_count: 65,
  },
];

export function RatingReducer(
  state: Rating[] = initialState,
  action: RatingAction
): Rating[] {
  switch (action.type) {
    case RatingActionTypes.EDIT_RATE:
      return state.map((el, i) => {
        if (el.id === action.id) {
          const newVoteCount = initialState[i].vote_count + 1;
          const newAverage =
            (initialState[i].vote_average * initialState[i].vote_count +
              action.value) /
            (initialState[i].vote_count + 1);
          return Object.assign(
            {},
            el,
            { vote_average: newAverage },
            { vote_count: newVoteCount }
          );
        }
        return el;
      });
    default:
      return state;
  }
}
