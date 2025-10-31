function caesarCipher(string, move){ //the input string to be encrypted and the number of time it needs to be shifted to be encrypted like string ab and move is 4 it will be ef moving 4 characters from the alphabet
    let result = ''; //empty string to store the encrypted string which is ef in our case
    // a function that checks strings for us using their ASCII value
    function check(character){
        const ASCII = character.charCodeAt(0);
        return (ASCII> 64 && ASCII<91) || (ASCII >=97 && ASCII <=122);
    }
    //iterate through each character in the string
    for (let i = 0; i < string.length; i++) {
        //store the current character in char
        const char = string[i];
        //if the character is a letter not like signs or spaces or something else
        if(check(char)){
            const ascii = char.charCodeAt(0); // get the ASCII value of the character
            //check if the string character is capital letter
            const capital = ascii >=65 && ascii <=90;
            let small ;
            //if it is not in the range of capital it is a small letter
            if(capital){
                small = 65;
            }
            else{
                small = 97;
            }
            //say letter is B and we want to move it 3 letter and the ASCII is 66 and small is 65
            //so it'll be 66-65 + 3= 4%26 = 4 + 65 = 69 and 69 is the ASCII value of E which is 3 letter away from B
            const shifted = ((ascii - small + move) % 26) + small;
            //convert the shifted ASCII value back to a character and add it to the empty string we initialized first to store the encrypted input 
            result = result + String.fromCharCode(shifted);
        }
        else{
            //return the stored encrypted string and if the character is not a letter it is also added to result unchanged
            result = result+ char;
        }
    }
    return result;
}
module.exports= caesarCipher;