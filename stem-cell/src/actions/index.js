import {databaseRef} from '../firebase'

export const addData = newData => async dispatch => {
  databaseRef.push().set(newData);
};

