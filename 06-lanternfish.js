const newIntervalStart = 8;
const resetIntervalStart = 6;

const input = `
5,1,1,5,4,2,1,2,1,2,2,1,1,1,4,2,2,4,1,1,1,1,1,4,1,1,1,1,1,5,3,1,4,1,1,1,1,1,4,1,5,1,1,1,4,1,2,2,3,1,5,1,1,5,1,1,5,4,1,1,1,4,3,1,1,1,3,1,5,5,1,1,1,1,5,3,2,1,2,3,1,5,1,1,4,1,1,2,1,5,1,1,1,1,5,4,5,1,3,1,3,3,5,5,1,3,1,5,3,1,1,4,2,3,3,1,2,4,1,1,1,1,1,1,1,2,1,1,4,1,3,2,5,2,1,1,1,4,2,1,1,1,4,2,4,1,1,1,1,4,1,3,5,5,1,2,1,3,1,1,4,1,1,1,1,2,1,1,4,2,3,1,1,1,1,1,1,1,4,5,1,1,3,1,1,2,1,1,1,5,1,1,1,1,1,3,2,1,2,4,5,1,5,4,1,1,3,1,1,5,5,1,3,1,1,1,1,4,4,2,1,2,1,1,5,1,1,4,5,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,4,2,1,1,1,2,5,1,4,1,1,1,4,1,1,5,4,4,3,1,1,4,5,1,1,3,5,3,1,2,5,3,4,1,3,5,4,1,3,1,5,1,4,1,1,4,2,1,1,1,3,2,1,1,4
`;


const intervalTimers = input
    .trim()
    .split(',')
    .map(n => parseInt(n));

const getDescendantCount = (() => {
    let cache = {};
    return (value, remainingDays) => {
        if (value > remainingDays) {
            return 0; // base case
        }

        const remainingDaysAfterInitialExpiry = remainingDays - value;
        if (!(remainingDaysAfterInitialExpiry in cache)) {
            let numDescendants = 0;
            // An initial value of 1 resets on days 2, 9, 16..., an initial of 8 resets on days 9, 16, 23...
            const numResets = 1 + Math.floor((remainingDays - value - 1) / 7);
            for (let i = 0; i < numResets; i++) {
                // Every time it resets, it spawns 1 new descendant with a value of 8
                const remainingDaysAfterReset = remainingDays - value - (i * 7) - 1;
                numDescendants += 1 + getDescendantCount(8, remainingDaysAfterReset);
            }

            // A starting interval of x with y days remaining would spawn as many descendants as a starting value of (x+1) with (y+1) days remaining.
            // As a result, we can use this difference as our cache key.
            cache[remainingDaysAfterInitialExpiry] = numDescendants;
        }

        return cache[remainingDaysAfterInitialExpiry];
    };
})();

const solve = (intervalTimers, numDays) => {
    return intervalTimers.length + 
        intervalTimers.map(v => getDescendantCount(v, numDays)).reduce((a,b) => a + b, 0);
};

console.log(solve(intervalTimers, 80));
console.log(solve(intervalTimers, 256));