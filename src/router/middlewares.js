import routeNames from './routeNames';
import moment from 'moment'

export async function initCurrentUserStateMiddleware(to, from, next) {

    console.log("vao day");
    if (to.name !== routeNames.LOGIN && localStorage.getItem("TOKEN") === null) {
        return next({ name: routeNames.LOGIN });
    }

    if (to.name === routeNames.LOGIN && localStorage.getItem("TOKEN") !== null) {
        return next({ name: routeNames.HOME });
    }

    //check token timeout.
    const expDate = localStorage.getItem("TOKEN_EXP");
    if (expDate !== null) {
        const currentDate = moment().format();
        const checkTimeOut = moment(currentDate).diff(moment(expDate), 'seconds');
        if (checkTimeOut >= 0) {
            localStorage.clear();
            return next({ name: routeNames.LOGIN });
        }
    }

    next();
}