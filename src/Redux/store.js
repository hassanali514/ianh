import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    userReducer,
    allUsersReducer,
    userDetailsReducer,
    userFileDownloadReducer,
    userFileViewReducer
} from './reducers/userReducer'

import {
    newCandidateReducer,
    allCandidatesReducer,
    candidateDetailsReducer
} from './reducers/candidateReducer'

const reducer = combineReducers({
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    newCandidate: newCandidateReducer,
    allCandidates: allCandidatesReducer,
    fileDownload: userFileDownloadReducer,
    candidateDetail:candidateDetailsReducer,
    viewFilw:userFileViewReducer
})

let initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store