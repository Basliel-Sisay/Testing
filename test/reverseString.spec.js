const str=require('../functions/reverseString.js');

test('reverses the name BaslieL',function (){
    expect(str('BaslieL')).toBe('LeilsaB');
});
test('reverses the name br2ther',function (){
    expect(str('br2ther')).toBe('reht2rb');
});
test('reverses the name I;m_five',function (){
    expect(str('I;m_five')).toBe('evif_m;I');
});