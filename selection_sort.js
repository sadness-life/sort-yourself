'use strict'

function selectionSort(arrays) {
  let arr = [];
  let index;
  while (arrays.length > 0) {
    let min = arrays[0]
    for (let i = 1; i < arrays.length; i++) {
      if (arrays[i] < min) {
        min = arrays[i]
      }
    }
    index = arrays.indexOf(min);
    arr.push(min)
    arrays.splice(index, 1)
  }
  return arr;
}


// Driver code
function main() {

  sort_from_file('random_wordlist.txt')
  sort_from_file('reversed_wordlist.txt')
  sort_from_file('sorted_wordlist.txt')

}

function sort_from_file(filename) {
  let fs = require('fs')

  fs.readFile(filename, (err, data) => {

    if (err)
      return console.log(err)

    let items = data.toString().split("\r\n")

    console.log(filename)
    console.log("--------")
    console.log(selectionSort(items))

  })
}

main()
