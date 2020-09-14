import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* postSkills(action) {
  try {
    console.log(action.payload);
    const response = yield axios.get(`/api/skills${action.payload.user_skill}`);
    yield put({
      type: SET_SKILLS,
      payload: response.data,
    });
  } catch (error) {
    console.log('Form failed. Please try again.', error);
  }
}

function* skillsSaga() {
  yield takeLatest('FINAL_SUBMIT', postSkills);
}

export default skillsSaga;
