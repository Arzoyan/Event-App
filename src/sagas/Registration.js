import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';



function* fatchRegistration({ arg }) {
    try {
        yield axios({
            method: 'post',
            url: '/user/12345http://localhost:5000/api/auth/signup',
            data: { ...arg },
            'Content-Type': 'application/json',
        });
        yield put({ type: "REGISTR_SUCCESS", resalt: true })
    } catch (err) {
        console.log('ERROR !!!', err)
    }

}
    function* actionWatcher() {
        yield takeLatest('REGISTRATION_RESULT', fatchRegistration);
    }
    export default actionWatcher;


//   function* rootSaga() {
//     yield all([
//       actionWatcher(),
//     ]);
//   }
 //   try {
    //     const json = yield fetch(`https://jsonplaceholder.typicode.com/users/${arg}/posts`)
    //       .then(response => response.json());
    //     console.log('js65479', json)
    //     yield put({ type: "GET_USER_POSTS", json: json, arg: arg });
    //   } catch (err) {
    //     console.log('ERROR !!!', err)
    //   }
    // }
    // export function* fetchNews({ arg }) {

    //     let resalt = '';
    
    //     try {
    //         yield axios.get(`https://jsonplaceholder.typicode.com/users`)
    //             .then(response => {
    //                 console.log('XXXXXXXXXXXX', response);
    //                 resalt = response.data;
    //                 return resalt
    //             });
    //         console.log('jsonnx>>>>>>>>>>>>>>>>xx', resalt)
    //         yield put({ type: "USERS_LIST", json: resalt, });
    //     } catch (err) {
    //         console.log('ERROR !!!', err)
    //     }
    // }