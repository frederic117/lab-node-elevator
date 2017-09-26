class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "";
    this.interval = 0;
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    this.interval = setInterval(() => {
      this.update();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }
  update() {
    this.log();
  }
  _passengersEnter() {
    if (this.waitingList.length > 0) {
      for (let i = 0; i < this.waitingList.length; i++) {
        if (this.waitingList[i].person.originFloor == this.floor) {
          this.passengers.push(person);
          this.waitingList.splice(i, 1);
        }
      }
    }
  }

  _passengersLeave() {
    if (this.passengers.length > 0) {
      for (let i = 0; i < this.passengers.length; i++) {
        if (this.passengers[i].person.originFloor == this.floor) {
          this.passengers.splice(i, 1);
        }
      }
    }
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.direction = "up";
      return this.floor++;
    } else {
      this.floor = 10;
      return this.floor;
    }
    return this.floor++;
  }
  floorDown() {
    if (this.floor > 0) {
      this.direction = "down";
      return this.floor--;
    } else {
      this.floor = 0;
      return this.floor;
    }
  }
  call(person) {
    this.requests.push(person.destinationFloor);
    this.waitingList.push(person);
  }

  log() {
    console.log(`Direction : ${this.direction}| Floor : ${this.floor}`);
  }

module.exports = Elevator;
