const cap = require('../functions/capitalize.js');
test('changes the first letter of yeabsera into capital', function(){
    expect(cap('yeabsera')).toBe('Yeabsera');
});
test('ignore changes if the first letter of a word is already capital', function(){
    expect(cap('Basliel')).toBe('Basliel');
});
test('tests if it only focuses on capitalizing the first letter of a word', function(){
    expect(cap('eDlAwIt')).toBe('EDlAwIt');
});
test('test if there is no word', function(){
    expect(cap('')).toBe('');
});
test('test if there is only one letter', function(){
    expect(cap('a')).toBe('A');
});
test('test if the first character is not a letter', function(){
    expect(cap('4you')).toBe('4you');
});