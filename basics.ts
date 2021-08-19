function add(n1: number, n2: number, showResult: boolean, phrase: string): number | string {
  if (showResult) {
    console.log(`${phrase} ${n1 + n2}`);
  } else {
    return `${phrase} ${n1 + n2}`;
  }
}

const number1: number = 3;
const number2: number = 4.3;
const printResult = true;
const resultPhrase = "Result is:"

add(number1, number2, printResult, resultPhrase);
