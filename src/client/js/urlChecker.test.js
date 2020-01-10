import {
    checkUrl
} from './urlChecker.js'

// test for invalid url

test('Invalid url', () => {
    expect(checkUrl('gegeg.cfef.de')).toBeFalsy()
});

// test for valid url

test('valid url', () => {
    expect(checkUrl('https://getbootstrap.com/')).toBeTruthy()
});