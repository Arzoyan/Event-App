import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

export function* fetchNews() {

  let resalt = '';
 
  try{
  yield axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(response => {
      console.log('XXXXXXXXXXXX', response);
      resalt = response.data;
      return resalt
    }); 
  console.log('jsonnx>>>>>>>>>>>>>>>>xx', resalt)
  yield put({ type: "USERS_LIST", json: resalt, });
  } catch(err){
    console.log('ERROR !!!',err)
  }
}


function* actionWatcher() {
    yield takeLatest('GET_NEWS', fetchNews);
  }
  export default actionWatcher;
//   function* rootSaga() {
//     yield all([
//       actionWatcher(),
//     ]);
//   }