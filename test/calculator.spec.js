const calc = require('../functions/calculator.js');
test('perform addition on 2 and 4', function (){
    expect(calc(2,4,'+')).toBe(6);
});
test('perform subtraction on 10 and 3', function(){
    expect(calc(10,3,'-')).toBe(7);
});
test('perform multiplication on 3 and 5', function(){
    expect(calc(3,5, '*')).toBe(15);
});
test('perform division on 5 and 2', function(){
    expect(calc(5,2,'/')).toBe(2.5);
});
test('throws error when dividing by zero', function() {
    expect(function() {
        calc(7, 0, '/');
    }).toThrow('Error you can not divide a number with zero');
});
test('perform addition on string "5" and string "4"', function(){
    expect(calc('5', '4', '+')).toBe(9);
});
test('perform subtraction from small number like 2 to big number like 30', function(){
    expect(calc(2,30,'-')).toBe(-28);
});
test('throws error when using an invalid operator', function() {
    expect(function() {
        calc(5, 5, '%');
    }).toThrow('you have entered invalid operator');
});
test('perform multiplication using "x" as operator', function(){
    expect(calc(4, 6, 'x')).toBe(24);
});
