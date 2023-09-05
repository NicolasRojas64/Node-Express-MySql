import test from 'node:test';
import assert from 'node:assert/strict'
import { sum, rest, greaterThan } from './Calculator.js';

test("Test rest", () => {
    const result = rest(2,2);
    const expected = 0;
    assert.equal(result, expected);
})