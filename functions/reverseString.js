function reverseString(string){ 
    // Javascript doesnt have builtin function string.reverse()
    // like other languages so we use array methods.

    // split('')=> turns our string to ['s','t','r','i','n','g']
    // reverse()=> turns our array into ['g','n','i','r','t','s']
    // join('')=> turns our array into 'gnirts'. 
    let reversed= string.split('').reverse().join('');
    return reversed;
}
module.exports=reverseString;