function add(n1: number, n2: number, printResult: boolean, phrase: string): number {
  const result = n1 + n2;
  if (printResult) {
    console.log(phrase + result);
    
  }
  return result
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is ';

const result = add(number1, number2, printResult, resultPhrase);

console.log('🚀 ~ file: app.ts ~ line 9 ~ result', result)
