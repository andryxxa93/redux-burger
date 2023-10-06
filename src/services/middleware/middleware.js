import {ADD_INGREDIENT} from "../ingredients/actions";

export const customMiddleware =
    () =>
        (store) =>
            (next) =>
                (action) => {
                    console.log("state after dispatch", store);
                    console.log("will dispatch", action);
                    // Call the next dispatch method in the middleware chain.
                    // const returnValue = next(action);

                    console.log("dispatch ", next);


                    if (action.type === ADD_INGREDIENT) {
                      console.log(action);
                      next(action);
                    } else {
                    return next(action);
                    }
                };
