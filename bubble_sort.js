'use strict'

function bubbleSort(items) {
  var temp;
  //kapan berhentinya? sampai dengan array sudah habis
  for(var i = 0; i<items.length; i++){
    //melakukan pencarian angka terbesar, dibandingkan dengan sebelahnya
    // dan di geser sampai shift ke akhir
    for(var j = 0; j<items.length-1; j++){
      if(items[j]>items[j+1]){
        //swap
        console.log(j)
        temp = items[j];
        items[j] = items[j+1];
        items[j+1] = temp;
        temp ="";
      }
    }
  }
  return items;

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

    let items = data.toString()
      .split("\r\n")

    console.log(filename)
    console.log("--------")
    console.log(bubbleSort(items))

  })
}

main()
