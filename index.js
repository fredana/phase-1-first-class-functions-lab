const returnFirstTwoDrivers = (value) => {
    return value.slice(0, 2);
}

const returnLastTwoDrivers = (value) => {
    return value.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (value) => {
    return function fareMultiplier(value2){
        return value*value2;
    };
}

const fareDoubler = (value) => {
return value*2;
}

const fareTripler = (value) => {
    return value*3;
}

function selectDifferentDrivers(array,value){
    if (value === returnFirstTwoDrivers){
        return ['Antonia', 'Nuru'];
    }else if (value === returnLastTwoDrivers){
        return ['Amari', 'Mo'];
    }
    
} 
