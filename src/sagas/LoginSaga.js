import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

export function* LoginRespons(arg) {

  //   let resalt = '';

  //   try {
  //     yield axios({
  //         method: 'get',
  //         url: '/user/12345http://localhost:5000/api/auth/signup',
  //         data: { ...arg },
  //         'Content-Type': 'application/json',
  //     });
  //     yield put({ type: "LOGIN_SUCCESS", resalt: true })
  // } catch (err) {
  //     console.log('ERROR !!!', err)
  //     yield put({ type: "LOGIN_ERROR", resalt: false })
  // }

  let resalt = '';

  try {
    yield axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        console.log('XXXXXXXXXXXX', response);
        resalt = response.data;
        return resalt
      });
    console.log('jsonnx>>>>>>>>>>>>>>>>xx', resalt)
    yield put({ type: "LOGIN_SUCCESS", json: resalt,  });
  } catch (err) {
    console.log('ERROR !!!', err)
    yield put({ type: "LOGIN_ERROR", resalt: false })
  }


}


function* actionWatcher() {
  yield takeLatest('GET_LOGIN', LoginRespons);
}
export default actionWatcher;