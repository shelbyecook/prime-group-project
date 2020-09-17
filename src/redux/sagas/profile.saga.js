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

function* getAllProfiles(action) {
  try {
    const response = yield axios.get(
      `/api/profile/members`
      //  Data structure needed for payload on backend on req.body: { id }
    );
    const responseSkills = yield axios.get(`/api/profile/memberskills`);
    console.log(responseSkills);
    const profiles = response.data.map((profile) => {
      return {
        ...profile,
        skills: responseSkills.data.filter((skill) => {
          return skill.user_id === profile.user_id;
        }),
      };
    });
    console.log(profiles);
    yield put({ type: 'SET_MEMBER_LISTINGS', payload: profiles });
  } catch (error) {
    console.log('getAllProfiles failed. Please try again.', error);
  }
}

function* updateImageUrl(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const data = {
      imageUrl: action.payload.avatarPath,
    };
    console.log('Posting image url', action.payload);
    const response = yield axios.post(
      `/api/imageurl/headshot/${action.payload.avatarId}`,
      data,
      config
    );
    console.log('response.data', response.data);
    //   yield put({
    //     type: 'GET_PROFILE',
    //     payload: response.data,
    //   });
  } catch (error) {
    console.log('Image Url post failed: ', error);
  }
}

function* profileSaga() {
  yield takeLatest('GET_PROFILE', getProfile);
  yield takeLatest('UPDATE_PROFILE', updateProfile);
  yield takeLatest('FETCH_ALL_PROFILES', getAllProfiles);
  //   yield takeLatest('UPDATE_USER_HEADSHOT', updateImageUrl);
}

export default profileSaga;
