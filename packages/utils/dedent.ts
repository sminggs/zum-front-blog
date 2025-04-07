/**
 * 파이썬 dedent API 템플릿 함수 이식
 * @see {@link https://docs.python.org/ko/3.7/library/textwrap.html#textwrap.dedent}
 */
export const dedent = (strings: TemplateStringsArray, ...values: any[]) => {
  let raw = strings.raw;
  let result = '';

  for (let i = 0; i < raw.length; i++) {
    result += raw[i].replace(/\\`/g, '`').replace(/\n[ \t]*/g, '\n');
    if (i < values.length) {
      result += values[i];
    }
  }

  return result;
};
