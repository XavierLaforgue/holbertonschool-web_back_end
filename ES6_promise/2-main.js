import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
handleResponseFromAPI(promise);

const promise2 = Promise.reject();
handleResponseFromAPI(promise2);
