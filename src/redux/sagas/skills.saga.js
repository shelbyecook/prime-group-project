import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* postSkills(action) {
  try {
    console.log(action.payload);
    yield axios.post(
      `/api/skills${action.payload.user_skill}`,
      action.payload.skills
    );
    yield axios.post(
      `/api/skills${action.payload.user_id}`,
      action.payload.user_skill
    );
  } catch (error) {
    console.log('Form failed. Please try again.', error);
  }
}

function* skillsSaga() {
  yield takeLatest('FINAL_SUBMIT', postSkills);
}

export default skillsSaga;
