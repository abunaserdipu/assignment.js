// Calculation kilometerToMeter

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}

//Calculation budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    var total = watch * 50 + phone * 100 + laptop * 500;
    return total;
}
// Calculation hotelCost

function hotelCost(day) {
    var total = 0;
    if (day <= 10) {
        total = day * 100;
    }
    else if (day <= 20) {
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        total = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        total = firstPart + secondPart + thirdPart;
    }
    return total;
}
// Calculation megaFriend

function megaFriend([friendLargeName]) {
    var friendLargeName = ["Ikramul", "Zayed", "Iffat"];
    var max = friendLargeName[0];
    for (var i = 0; i < friendLargeName.length; i++) {
        var element = friendLargeName[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}
