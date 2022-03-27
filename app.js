const outputInner = document.querySelector('.iner');

// Function Declaration

function getAge(birthYou, yearNov) {
    const age = yearNov - birthYou;
    return age;
}
const outputAge = getAge(1985, 2022);
console.log(outputAge);

// Function Expression 

const ageOutGet = function (birthYou, yearNov) {
    return yearNov - birthYou;
}
const getAge2 = ageOutGet(1975, 2022);
console.log(getAge2);

// Arrow Function

const myAge3 = (yearNov, birthYou) => yearNov - birthYou;
console.log(myAge3(1958, 2022));


const canBueAlcogol = birthNow => {
    const nowData = new Date().getFullYear();
    const age = nowData - birthNow;
    const isPersonal = age >= 21 ? 'Buhai' : 'Oh my God Fack';
    return isPersonal;
}
console.log(canBueAlcogol(1985));
outputInner.innerHTML = canBueAlcogol(2022);

// function % bills

const inPrice = (item) => item < 20 ? item * 0.2 : item * 0.15;
const carrentArray = [11, 20, 47];
const tips = [inPrice(carrentArray[0]), inPrice(carrentArray[1]), inPrice(carrentArray[2])];

const globalArray = inPrice(carrentArray[0]) + inPrice(carrentArray[1]) + inPrice(carrentArray[2]);
const totalBills = [carrentArray[0]+tips[0], carrentArray[1]+tips[1], carrentArray[2]+tips[2]];

console.log(tips);

console.log(totalBills);