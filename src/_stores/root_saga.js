import { all, fork } from 'redux-saga/effects';
import signup from '../_sagas/saga_signup'; 
export default function* rootSaga(){
    yield all([
        fork(signup),
    ])
}