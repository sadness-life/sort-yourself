'use strict'

function selectionSort(arr, start){

  let temp = 0
  let tempidx = 0
  let swap = true

  while(swap){
    swap = false
    temp = arr[start]

    for(let i=start; i<arr.length; i++){
      if(temp>arr[i]){
        temp=arr[i]
        tempidx = i
        swap=true
      }
    }

    if(swap){
      arr[tempidx] = arr[start]
      arr[start] = temp
      start++ 
    }
  }

  return arr
}

// Driver code
function main() {

  //sort_from_file('random_wordlist.txt')
  sort_from_file('reversed_wordlist.txt')
  //sort_from_file('sorted_wordlist.txt')

}

function sort_from_file(filename) {
  let fs = require('fs')

  fs.readFile(filename, (err, data) => {

    if (err)
      return console.log(err)

    let items = data.toString().split("\r\n")

    console.log(filename)
    console.log("--------")
    console.log(selectionSort(items, 0))

  })
}

main()
