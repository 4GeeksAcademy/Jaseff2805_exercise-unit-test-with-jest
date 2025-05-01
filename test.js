// Import the function sum from the app.js file
const {sum} = require('./app.js');
const {fromDollarToYen} = require('./app.js');
const {fromEuroToDollar} = require('./app.js');
const {fromYenToPound} = require('./app.js');

// Start the first test
test('First test adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14,9);
    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
}
);

// Test Function:fromDollarToYen
test('25 dollars should be converted to yens correctly', () => {
    expect(fromDollarToYen(25)).toBe(3656.54);
});

// Test Function:fromEuroToDollar
test('25 euros should be converted to 26.75 dollars', () => {
    expect(fromEuroToDollar(25)).toBe(26.75);
});

// Test Function:fromYenToPound
test('8000 yens should be converted to pounds correctly', () => {
    expect(fromYenToPound(8000)).toBe(44.47);
});




