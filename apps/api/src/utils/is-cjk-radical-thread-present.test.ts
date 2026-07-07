import assert from 'node:assert/strict';
import test from 'node:test';
import { isCjkRadicalThreadPresent } from './is-cjk-radical-thread-present.js';

test('isCjkRadicalThreadPresent returns true if string contains \u2E93', () => {
  assert.equal(isCjkRadicalThreadPresent('hello \u2E93 world'), true);
  assert.equal(isCjkRadicalThreadPresent('\u2E93'), true);
});

test('isCjkRadicalThreadPresent returns false if string does not contain \u2E93', () => {
  assert.equal(isCjkRadicalThreadPresent('hello world'), false);
  assert.equal(isCjkRadicalThreadPresent(''), false);
});

test('isCjkRadicalThreadPresent returns false for non-string input', () => {
  assert.equal(isCjkRadicalThreadPresent(null), false);
  assert.equal(isCjkRadicalThreadPresent(undefined), false);
});
