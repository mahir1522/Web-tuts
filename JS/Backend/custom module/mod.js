console.log('This is module');

function average(arr){
    let sum = 0
    arr.forEach(element => {
        sum+=element        
    });
    return sum/arr.length
}


// function maltiply(arr){
//     let sum = 0
//     arr.forEach(element => {
//         sum+=element
//     })
//     return sum*arr
// }

function maltiply(a,b){
    let c = a*b
    return c
}

module.exports = {
    avg : average,
    mal : maltiply,
    repo : 'github',
}