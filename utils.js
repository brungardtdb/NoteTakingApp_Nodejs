// console.log('utils.js')

// const name = 'David Brungardt'

// const add = function (m, n) {
//     return m + n
// }

// // define things to share with other files
// module.exports = add

const TowersOfHanoi = function (numDiscs, start, aux, finish) {

    if (numDiscs == 1) {
        console.log(start + '=>' + finish)
    } else {
        TowersOfHanoi(numDiscs - 1, start, finish, aux)
        console.log(start + '=>' + finish)
        TowersOfHanoi(numDiscs - 1, aux, start, finish)
    }

}

module.exports = TowersOfHanoi