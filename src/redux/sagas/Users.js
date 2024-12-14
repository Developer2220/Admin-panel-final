import { all, takeEvery, put, call } from "redux-saga/effects";
import { FETCH_USERS } from "../constants/Users";

import {
  showUsersLoading,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "../actions/Users";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export function* fetchUsers() {
  yield takeEvery(FETCH_USERS, function* () {
    try {
      yield put(showUsersLoading());
      const response = yield call(axios.get, API_URL);
      yield put(fetchUsersSuccess(response.data));
    } catch (error) {
      yield put(fetchUsersFailure(error.message));
    }
  });
}

export default function* rootSaga() {
  yield all([fetchUsers()]);
}
