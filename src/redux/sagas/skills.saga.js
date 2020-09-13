import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* getSkills(action) {
  try {
    console.log(action.payload);
    const response = axios.get('/someroute');
  } catch (error) {
    console.log('Form failed to submit. Please try again.', error);
  }
}

function* skillsSaga() {
  yield takeLatest('FINAL_SUBMIT', getSkills);
}

export default skillsSaga;
