import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* postForm(action) {
  try {
    console.log(action.payload); // :id = action.payload.id ${}
    yield axios.post(
      `/api/form/register/about/${action.payload.id}`,
      action.payload.form.about
    ); // { form: props.store.form, id: props.store.user.id }
    yield axios.post(
      `/api/form/register/demographic/${action.payload.id}`,
      action.payload.form.demographic
    ); // { form: props.store.form, id: props.store.user.id }
    // yield axios.post(
    //   `/api/form/register/social/${action.payload.id}`,
    //   action.payload.form.about
    // ); // { form: props.store.form, id: props.store.user.id }
  } catch (error) {
    console.log('Form failed to submit. Please try again.', error);
  }
}

function* formSaga() {
  yield takeLatest('FINAL_SUBMIT', postForm);
}

export default formSaga;
