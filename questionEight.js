let originalNumbers = [2, 5, 8, 10, 3];

const newArray = originalNumbers.filter((num, i , arr) =>{
    return num%2==0;
})

console.log(newArray);