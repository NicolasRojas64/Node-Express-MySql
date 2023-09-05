import test from 'node:test';
import assert from 'node:assert/strict'
import { sum, rest, greaterThan } from './Calculator.js';

test("Test sum", () => {
    const result = sum(2,2);
    const expected = 4;
    assert.equal(result, expected);
})