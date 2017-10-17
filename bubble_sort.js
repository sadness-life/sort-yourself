'use strict'

function bubbleSort2(arr) {
  let temp = 0
  let swap = true

  while(swap){

    temp = arr[0]
    swap = false

    for(let i=0; i<arr.length-1; i++){
      if(temp>arr[i+1]){
        arr[i]=arr[i+1]
        arr[i+1]=temp
        swap=true
        //console.log(arr);
      }else{
        temp=arr[i+1]
      }
    }
  }

  return arr
}


// Driver code
function main() {

  //sort_from_file('random_wordlist.txt')
  //sort_from_file('reversed_wordlist.txt')
  sort_from_file('sorted_wordlist.txt')

}

function sort_from_file(filename) {
  let fs = require('fs')

  fs.readFile(filename, (err, data) => {

    if (err)
      return console.log(err)

    let items = data.toString()
      .split("\r\n")

    console.log(filename)
    console.log("--------")
    console.log(bubbleSort2(items))

  })
}

main()
