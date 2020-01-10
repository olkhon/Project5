import {
    handleSubmit
} from './formHandler.js'

function checkUrl(formText) {

    var validUrl = require('valid-url');

    if (validUrl.isUri(formText)) {
        console.log('Looks like an URI');
        return true;
    } else {
        console.log('Not a URI');
        return false;
    }
}


export { checkUrl }