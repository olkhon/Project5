import {
    sum,
    handleSubmit
} from './formHandler.js';



test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


test("Is function defined", async() => {
    expect(handleSubmit).toBeDefined();
});

test("Test if handleSubmit is a function", async() => {
    expect(typeof handleSubmit).toBe('function');
});