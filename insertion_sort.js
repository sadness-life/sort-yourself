'use strict'

function insertionSort(arrays){
  for (var i = 1; i < arrays.length; i++) {
    for (var j = 0; j < i; j++) {
      if(arrays[i] < arrays[j]){
        let temp = arrays[i]
        arrays[i] = arrays[j]
        arrays[j] = temp
      }
    }
  }
  return arrays
}
// Driver code
function main() {
  sort_from_file('test_sortwordlist.txt')
  // sort_from_file('random_wordlist.txt')
  // sort_from_file('reversed_wordlist.txt')
  // sort_from_file('sorted_wordlist.txt')

}

function sort_from_file(filename) {
  let fs = require('fs')

  fs.readFile(filename, (err, data) => {

    if (err)
      return console.log(err)

    let items = data.toString().split('\n')

    console.log(filename)
    console.log("--------")
    console.log(insertionSort(items))

  })
}

main()
