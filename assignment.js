// https://github.com/Rafy-Chowdhury/assignment3


// First function

function kilometerToMeter(kilo){

    let kilometer = kilo * 1000;

    return kilometer;

}

/* let sum = kilometerTometer(20);
console.log(sum); */



// second function

function budgetCalculator(watch, phone, laptop){

    let clock = watch * 50;

    let mobile = phone * 100;

    let computer = laptop * 500;

    const total = clock + mobile + computer;

    return total;


}
/*let sum = budgetCalculator(10, 5, 1);
console.log(sum); */



// third function

function hotelCost(days){
    let cost = 0;

    if(days<=10){
        cost = days * 100;
    }

    else if(days<=20){
        let costOne = 10 * 100;
        let extraCost = days - 10;
        let costTwo = extraCost * 80;
        cost = costOne + costTwo;
    }

    else{
        let costOne = 10 * 100;
        let costTwo = 10 * 80;
        let extraCost = days - 20;
        let costThree = extraCost * 50;
        cost = costOne + costTwo + costThree;
    }

    return cost;
}
  /*let sum = hotelCost(22);
  console.log(sum); */

//fourth function

function megaFriend(name){
    let word = "";
    for (let i = 0; i< name.length; i++){
        if(word.length < name[i].length){
            word = name[i]
        }
    }

    return word;
}
/* let nam = megaFriend(['rafy', 'blaam', 'salmanin']);
console.log(nam); */