function capital(word){
    //store the first word in a given word and capitalize the word
    const firstWord = word.charAt(0).toUpperCase();
    //store the rest of other words like if the word is Yeabsera, otherWords will store the words after the first word which is eabsera
    const otherWords= word.slice(1);
    // return the full word 
    return firstWord + otherWords;
}
module.exports=capital;