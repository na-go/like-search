import { preprocessor } from '.';
import { describe, it, expect } from 'vitest';

describe('SimplePreprocessor', () => {
  it('should preprocess text by converting to lowercase and removing non-alphabetic characters', () => {
    const text = 'もうちょっとこう、アイスブレイクとか要らないの？ ちょっとした小粋な雑談とかは？天気が良いですねとか、昨日は何を食べたのですか、とか。そういうのは挟まないの？ほら、ティーパーティーって、基本的には社交界なんだし？';
    const result = preprocessor.preprocess(text);
    const expected = 'もうちょっとこうアイスブレイクとか要らないのちょっとした小粋な雑談とかは天気が良いですねとか昨日は何を食べたのですかとかそういうのは挟まないのほらティーパーティーって基本的には社交界なんだし';
    expect(result).toEqual(expected);
  });
});
