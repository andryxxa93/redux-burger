export const customMiddleware =
    (config) =>
        (store) =>
            (next) =>
                (action) => {
                    console.log('store after dispatch', store);
                    console.log('will dispatch', action);
                    console.log('dispatch', next);

                    if (typeof action === 'function') {
                        return action(store.dispatch, store.getState)
                    }

                    return next(action);
}
