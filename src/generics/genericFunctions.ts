/* const names: Array<string> = [] // string[]
// names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("this is fun!")
    }, 2000)
});

promise.then(data => {
    data.split(' ');
}) */

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'pete' }, { age: 37 })
console.log(mergedObj.age)

interface lengthy {
    length: number
}

function countAndDescribe<T extends lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element'
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements'
    }
    return [element, descriptionText];
}

const result1 = countAndDescribe([2,1])
console.log(result1)

function extractAndConvert<T extends object, U extends keyof T>(obj:T, key:U) {
    return 'Value: ' + obj[key]
}

let result2 = extractAndConvert({name: 'pete'}, 'name')
console.log(result2)