function add(num1, num2 = 35){
    // option 1
    // if(num2 == undefined){
    //     num2 = 0;
    // }

    // option 2
    // num2 = num2 || 0;
    const sum = num1 + num2;
    return sum;
}
const result = add(15, 100);
console.log(result);

function fullName(first, last = 'CB'){
    const name = first + ' ' + last ;
    return name;
}
const result2 = fullName('Proloy');
console.log(result2);