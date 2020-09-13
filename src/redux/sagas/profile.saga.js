import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getProfile(action) {
  try {
    console.log(action.payload); // :id = action.payload.id ${}
    yield axios.get(
      `/api/profile/about/${action.payload.id}`
      //  Data structure needed for payload on backend on req.body: { id }
    );
  } catch (error) {
    console.log('Profile failed to update. Please try again.', error);
  }
}

function* updateProfile(action) {
  try {
    console.log(action.payload); // :id = action.payload.id ${}
    yield axios.put(
      `/api/profile/about/${action.payload.id}`
      //  Data structure needed for payload on backend req.body: {id, displayName, communityRole, organizationName, jobTitle, bio,
      //  mentor, mentee, twitter, facebook, linkedin, instagram}
    );
  } catch (error) {
    console.log('Profile failed to update. Please try again.', error);
  }
}

function* profileSaga() {
  yield takeLatest('GET_PROFILE', getProfile);
  yield takeLatest('UPDATE_PROFILE', updateProfile);
}

export default profileSaga;
