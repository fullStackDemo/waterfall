
import * as assert from 'assert';
import maskUSPhone from '../src/index';

const testSamples = [
  {
    input: 'abc',
    expectedResult: 'abc',
    description: 'should return pristine value when receiving "abc"'
  },
  {
    input: 'abc123456',
    expectedResult: 'abc123456',
    description: 'should return pristine value when receiving "abc123456"'
  },
  {
    input: 'abcdefghi',
    expectedResult: 'abcdefghi',
    description: 'should return pristine value when receiving "abcdefghi"'
  },
  {
    input: '1234567890',
    expectedResult: '(123) 456-7890',
    description: 'should return pristine value when receiving "(123) 456-7890"'
  },
];

describe('Array', () => {
  testSamples.forEach(sample => {
    it(sample.description, () => {
      assert.equal(maskUSPhone(sample.input), sample.expectedResult);
    });
  });
});





