const start = new Date();

const log = (message) => {
  const elapsed = new Date() - start;
  console.log(`${message} - ${elapsed}ms delay`);
};

// count(1, 10);

// -- Outputs --
// 1 - 0ms delay
// 2 - 100ms delay
// ...
// 10 - 900ms delay

const logAndIncrement = (counterInstance) => {
  if (counterInstance.startNumber <= counterInstance.endNumber) {
    log(counterInstance.startNumber);
    //increment startNumber every time log runs
    counterInstance.startNumber++;
  } else {
    // check if startNumber is greater than end
    clearInterval(counterInstance.intervalId);
  }
};

class Counter {
  constructor(startNumber, endNumber) {
    this.startNumber = startNumber;
    this.initialStartNumber = startNumber; // Store initial start number for reset
    this.endNumber = endNumber;
    this.intervalId = null;
  }

  start() {
    log(this.startNumber);
    this.startNumber++;
    this.intervalId = setInterval(() => logAndIncrement(this), 100);
  }

  end() {
    clearInterval(this.intervalId);
  }

  reset() {
    clearInterval(this.intervalId);
    this.startNumber = this.initialStartNumber;
    this.intervalId;
  }
}

const counter = new Counter(1, 10);

counter.start();
