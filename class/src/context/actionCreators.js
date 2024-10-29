import appActions from "./appACtions";

export const IncrementAction = (payload) => {
    return { type: appActions.INCREMENT, payload };
};

export const DecrementAction = (payload) => {
    return { type: appActions.DECREMENT, payload };
};

export const userFetch = (payload) => {
    return { type: appActions.USER, payload };
};

export const userError = (payload) => {
    return { type: appActions.ISERROR, payload };
};

export const userIsLoading = (payload) => {
    return { type: appActions.USERISLOADING, payload };
};
