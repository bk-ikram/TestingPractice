function capitalize(string){
    if(!string)
        return "";
    return string.at(0).toUpperCase().concat(string.slice(1));
}
function reverseString(string){
    if(!string)
        return "";
    let output = "";
    string.split("").forEach((letter) => output = letter.concat(output));
    return output;
}

class Calculator{
    add(a,b){
        this.checkInput(a,b);
        return a + b;
    }
    subtract(a,b){
        this.checkInput(a,b);
        return a - b;
    }

    multiply(a,b){
        this.checkInput(a,b);
        return a * b;
    }

    divide(a,b){
        this.checkInput(a,b);
        return a / b;
    }
    checkInput(a,b){
        if(!(Number.isFinite(a) && Number.isFinite(b)))
            throw new Error("Please supply real numbers for both inputs.");
    }
}

function cipherCharacter(char,key){
    //upper case codes start from 65 to 90
    //lower case codes start from 97 to 122
    const charCode = char.charCodeAt(0);
    const resultingCode = charCode + key;
    let outputCode = charCode;
    if(charCode >= 65 && charCode <= 90)
        outputCode = resultingCode > 90 ? resultingCode - 26 : resultingCode;
    else if(charCode >= 97 && charCode <= 122)
        outputCode = resultingCode > 122 ? resultingCode - 26 : resultingCode;
    console.log(`received character ${char}, returned ${String.fromCharCode(outputCode)}`);
    return String.fromCharCode(outputCode);

}


function caesarCipher(string,key){
    if(key < 1 || key > 26 || !(Number.isInteger(key)))
        throw new Error("Please use an integer between 1 and 26 for the key")
    else 
        return string.split("").reduce((accumulator, letter) => accumulator.concat(cipherCharacter(letter,key)) , "" );;
}

function analyzeArray(array){
    //check if all elements in the array are numbers
    if (array.some((ele) => !Number.isFinite(ele)))
        throw new Error("Array contains one or more non-numerical values.");
    const len = array.length;
    const average = array.reduce((accumulator,currentValue) => accumulator + (currentValue/len) , 0);
    const sortedArray = array.sort((a,b) => b-a);
    return { average    : average
            ,min        : sortedArray.at(-1)
            ,max        : sortedArray[0]
            ,length     : len
    };
}


export {capitalize,reverseString, Calculator, caesarCipher, analyzeArray};