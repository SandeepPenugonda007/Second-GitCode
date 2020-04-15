//////Arrow function ////////

/* const func = function(y) {
// };

const func = y => {
return y * y;
};

const func = y => y * y;
console.log(func(3));
*/

/*const event = {
  name: "pubG",
  printGame: function() {
    console.log("I wanna play " + event.name);
  }
};
event.printGame();
*/

/*const event = {
  name: "pubG",
  guestList: ["sandeep", "john", "brew"],
  source: "on mobile",
  printGame() {
    const that = this;
    console.log("I wanna play " + this.name + " " + this.source);
    that.guestList.forEach(guest => {
      console.log(guest + " is attending to play " + that.name);
    });
  }
};
event.printGame();*/

const event = {
  name: "Birthday party",
  guestList: ["sandeep", "john", "brew"],
  //source: "on mobile",
  printGuestList() {
    const that = this;
    console.log("Guestlist for " + this.name);
    that.guestList.forEach(guest => {
      console.log(guest + " are attending to play " + that.name);
    });
  }
};
event.printGuestList();
