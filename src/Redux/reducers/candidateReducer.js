import {
    NEW_CANDIDATE_REQUEST,
    NEW_CANDIDATE_SUCCESS,
    NEW_CANDIDATE_FAIL,
    NEW_CANDIDATE_RESET,
    ALL_CANDIDATES_REQUEST,
    ALL_CANDIDATES_SUCCESS,
    ALL_CANDIDATES_FAIL,
    CANDIDATE_DETAILS_REQUEST,
    CANDIDATE_DETAILS_SUCCESS,
    CANDIDATE_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/candidateConstant";

export const newCandidateReducer = (state = { candidate: {} }, action) => {
    switch (action.type) {
        case NEW_CANDIDATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case NEW_CANDIDATE_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                candidate: action.payload.candidate,
            };
        case NEW_CANDIDATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case NEW_CANDIDATE_RESET:
            return {
                ...state,
                success: false,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export const allCandidatesReducer = (state = { candidates: [] }, action) => {
    switch (action.type) {
      case ALL_CANDIDATES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ALL_CANDIDATES_SUCCESS:
        return {
          ...state,
          loading: false,
          candidates: action.payload,
        };
  
      case ALL_CANDIDATES_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };

  export const candidateDetailsReducer = (state = { candidate: {} }, action) => {
    switch (action.type) {
      case CANDIDATE_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case CANDIDATE_DETAILS_SUCCESS:
        return {
          loading: false,
          candidate: action.payload,
        };
      case CANDIDATE_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };