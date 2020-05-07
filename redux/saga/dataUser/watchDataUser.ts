import { takeEvery} from "redux-saga/effects";
import * as workers from "./workerDataUser";

export default function* watchDataUser() {
    yield takeEvery("HELLO", workers.sayHello);
}