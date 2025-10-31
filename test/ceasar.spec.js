const caesarCipher = require('../functions/ceasar.js');
test('shifts lowercase letters ', function() {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});
test('shifts uppercase letters', function (){
    expect(caesarCipher('EMK', 2)).toBe('GOM');
});
test('preserves case while shifting', function() {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});
test('preserves punctuation and spaces', function() {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
test('check for full rotation of the alphabet', function() {
    expect(caesarCipher('abc', 26)).toBe('abc');
});
