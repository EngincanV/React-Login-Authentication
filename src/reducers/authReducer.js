import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../actions/authAction";

const initState = {
    user: '',
    isAuthenticated: false,
    error: false,
    errorMessage: '',
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                isAuthenticated: true,
                error: false,
                errorMessage: ''
            };
        case LOGIN_ERROR:
            return {
                ...state,
                user: '',
                error: true,
                isAuthenticated: false,
                errorMessage: action.error
            };
        case LOGOUT:
            return {
                user: ''
            };
        default:
            return state;
    }
}

export default authReducer;