function combine(input1: number | string, input2: number | string): number | string {
  const result = input1 + input2;
  return result;
}

const combinedAges = combine(19, 23)
console.log(combinedAges)

const combinedNames = combine("Pete ", "Griffith")
console.log(combinedNames)