import appActions from "./appACtions";

export const initalState = {
    userIsLoggedIn: false,
    counter: 0,
    users: [],
    error: "",
    userIsLoading: false,
};

export const appReducer = (state, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case appActions.USERLOGIN:
            return { ...state, userIsLoggedIn: true };
        case appActions.INCREMENT:
            return { ...state, counter: state.counter + payload };

        case appActions.DECREMENT:
            return { ...state, counter: state.counter - payload };
        case appActions.USER:
            return { ...state, users: payload, userIsLoading: false };
        case appActions.ISERROR:
            return { ...state, error: payload, userIsLoading: false };
        case appActions.USERISLOADING:
            return { ...state, userIsLoading: payload };

        default:
            return state;
    }
};
