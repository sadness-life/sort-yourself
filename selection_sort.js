'use strict'

function selectionSort(arrays){
    // Your sorting code
    //selection sort, ambil yang terkecil, tampung di tempat yang baru
    var pointer = 0;
    var kecil = 0;
    var besar = 0;
    var sorted = [];
    var loops = arrays.length;
    while(loops>1){
      //cari yang kecil
      if(arrays.length>2){
        kecil = arrays[0];
        for(var i = 0; i<arrays.length; i++){
          if(kecil>arrays[i]){
            kecil = arrays[i];
            pointer = i;
          }
        }

      //push ke tempat baru
      console.log(kecil);
      sorted.push(kecil);

      } else {
        if(arrays[0]>arrays[1]){
          kecil = arrays[1];
          besar = arrays[0];
        } else {
          kecil = arrays[0];
          besar = arrays[1];
        }
        sorted.push(kecil);
        sorted.push(besar);
        break;
      }

      //hapus yang terkecil dari array
      arrays.splice(pointer,1);
      pointer = 0;

      loops -= 1;

    }

    return sorted;

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
