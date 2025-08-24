function bake (degrees) {
    if (degrees > 500) {
        message = "I'm not a nuclear reactor!";
        
    } else if (degrees < 100 ) {
        message = "I'm not a nuclear refrigerator!";
    } else {
        message = "That's a very comfortable temperature for me.";
    }
    return message;
}

var status1 = bake(350);
console.log(status1)