// creating a Guest List Array
let guestList = ["Saba" ,"Sana" ,"Laila" ,"Ayesha"];

// making varibale for those guest who cant come
let dontCome = guestList [0];

// print the name of the guest who cant come
console.log(dontCome , "Nahhi Aaa sakti han");

// Add and Remove values of Guest List Array
guestList.splice(0, 1, "Raghisa");

// Message Print for Bigger Table
console.log("Good News ! we have found a bigger table for Dinner");

// Adding a new value of starting index of Array
guestList.unshift("Turfa");

// Adding a new value of ending index of Array
guestList.push("samreen")

// Get a middle index of our guestList of Array
let middleIndex : number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of Array
guestList.splice(middleIndex , 0,"Ambreen");

// print message of updated list
console.log("Updated list of our Guest");

// sending a invitation message to our guest one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to dinner with me`));