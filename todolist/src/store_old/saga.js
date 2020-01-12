import {takeEvery, put} from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionType'
import {initListAction} from './actionCreators'
import axios from 'axios'


function* getInitList(){
    const res = yield axios.get('/list.json');
    const action = initListAction(res.data);
    yield put(action);
}

function* todoSagas(){
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default todoSagas;