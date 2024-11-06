let age = 65    ; 
let ticketPrice;

if (age < 0 || age > 120) {
    console.log("არასწორი ასაკი");
} else if (age <= 12) {
    ticketPrice = 5;
    console.log(`ბილეთის ფასი არის $${ticketPrice}`);
} else if (age <= 17) {
    ticketPrice = 10;
    console.log(`ბილეთის ფასი არის $${ticketPrice}`);
} else if (age <= 64) {
    ticketPrice = 15;
    console.log(`ბილეთის ფასი არის $${ticketPrice}`);
} else {
    ticketPrice = 8;
    console.log(`ბილეთის ფასი არის $${ticketPrice}`);
}