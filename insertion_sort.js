'use strict'

function insertionSort(arrays) {
    let temp;
    for (let i = 1; i < arrays.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arrays[i] < arrays[j]) {
                temp = arrays[i];
                arrays[i] = arrays[j]
                arrays[j] = temp;
            }
        }
    }
    return arrays;

}

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
        console.log(insertionSort(items))

    })
}

main()
