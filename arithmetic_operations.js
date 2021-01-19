const add = (nums) => nums.reduce((a,b) => a + b);
const substract = (nums) => nums.reduce((a,b) => a - b);
const multiply = (nums) => nums.reduce((a,b) => a * b);
const divide = (nums) => nums.reduce((a,b) => a / b);

module.exports = 
{
    add : add,
    substract : substract,
    multiply : multiply,
    divide : divide,
}
