import test from 'node:test';
import assert from 'node:assert/strict'
import { sum, rest, greaterThan } from './Calculator.js';

test("Test comparison", () => {
    const result = greaterThan(2,1);
    const expected = true;
    assert.equal(result, expected);
})