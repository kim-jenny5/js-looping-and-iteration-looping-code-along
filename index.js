// Code your solutions in this file
function writeCards(array, event) {
    let thanking = []
    for (let i = 0; i < array.length; i++) {
        thanking.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return thanking
}

function countDown(int) {
    while (int >= 0) {
        console.log(int--)
    }
}