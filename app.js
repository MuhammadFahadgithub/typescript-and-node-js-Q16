// task16
// creating a guest list arry
var guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
// making variable for those guest who cant come
var dontcom = guestList[0];
// print the name of guest who cant come
console.log(dontcom, "Did not come");
// add or remove values from guest list Arry
guestList.splice(0, 1, "Usman");
// massage print for bigger table
console.log("Good News! We have found a bigger table for a dinner");
// adding a value at starting index of Arry
guestList.unshift("Zohaib");
// adding a new value at ending index of Arry
guestList.push("Zafar");
//  adding a new value at middle index of Arry
var middleIndex = Math.floor(guestList.length / 2);
//  adding a new guest at middle index of Arry
guestList.splice(middleIndex, 0, "Zulfiqar");
// print massage of updated list
console.log("updated list of our Guests");
// sending an invitition massage to our guests one by onewith thier names 
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me")); });
