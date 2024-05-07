// Function to generate a random number between min and max
function getRandomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

// Function to generate a random date within the last 30 days
function getRandomDate(): string {
  const currentDate = new Date();
  const randomDays = getRandomNumber(1, 30);
  const randomMs = randomDays * 24 * 60 * 60 * 1000;
  return new Date(currentDate.getTime() - randomMs).toISOString();
}

// Generate 100 dummy items
const dummyItems: {
  "Trade ID": number;
  "Trade Type": string;
  "Trade Size": number;
  "Entry Price": string;
  "Profit/Loss": string;
  Status: string;
  "Open Time": string;
  "Close Time": string | null;
  Duration: number;
}[] = Array.from({ length: 100 }, (_, index) => ({
  "Trade ID": index + 1,
  "Trade Type": Math.random() < 0.5 ? "Buy" : "Sell",
  "Trade Size": Math.ceil(getRandomNumber(1, 100)),
  "Entry Price": getRandomNumber(1, 100).toFixed(2),
  "Profit/Loss": (Math.random() * 100 - 50).toFixed(2),
  Status: Math.random() < 0.8 ? "Open" : "Closed",
  "Open Time": getRandomDate(),
  "Close Time": Math.random() < 0.8 ? null : getRandomDate(),
  Duration: Math.ceil(getRandomNumber(1, 30)),
}));

// Print the dummy items
console.log(JSON.stringify(dummyItems, null, 2));
