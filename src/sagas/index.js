import { all } from 'redux-saga/effects';
// import axios from 'axios';
// import example from './example';
import LoginSaga from './LoginSaga';
import Registration from './Registration';


export default function* rootSaga() {
  yield all([
    LoginSaga(),
    Registration(),
    // actionWatcher(),
    // example(),
  ]);
}


 //  Z44DOMHV3K56I4H3JBJ4 evant yunik key
    // method: "*GET",  
  // headers: {

  //     "Authorization": "Bearer Z44DOMHV3K56I4H3JBJ4",
  // }
  // )
   // const json = yield fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response =>{
  //     console.log('XXXXXXXXXXXX',response);
  //     return response.json()});
  // console.log('jsonnxxx', json)
  // yield put({ type: "NEWS_RECEIVED", json: json, });
  // function* fetchNews() {

//   let resalt = '';

//   try{
//   yield axios.get(`https://jsonplaceholder.typicode.com/users`)
//     .then(response => {
//       console.log('XXXXXXXXXXXX', response);
//       resalt = response.data;
//       return resalt
//     }); 
//   console.log('jsonnx>>>>>>>>>>>>>>>>xx', resalt)
//   yield put({ type: "USERS_LIST", json: resalt, });
//   } catch(err){
//     console.log('ERROR !!!',err)
//   }
// }

// function* fatchPost({ arg }) {
//   try {
//     const json = yield fetch(`https://jsonplaceholder.typicode.com/users/${arg}/posts`)
//       .then(response => response.json());
//     console.log('js65479', json)
//     yield put({ type: "GET_USER_POSTS", json: json, arg: arg });
//   } catch (err) {
//     console.log('ERROR !!!', err)
//   }
// }


// function* actionWatcher() {
//   yield takeLatest('GET_NEWS', fetchNews);
//   yield takeLatest('GET_Post', fatchPost);
// }
