import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAirtable() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/airtable', config);
    console.log(response.data);
    yield put({ type: 'SET_AIRTABLE', payload: response.data });
  } catch (error) {
    console.log('Airtable get request failed', error);
  }
}

function* airtableSaga() {
  yield takeLatest('FETCH_AIRTABLE', fetchAirtable);
}

export default airtableSaga;
