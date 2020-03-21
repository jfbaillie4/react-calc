export function runCalc (currentArray, key) {
    const lastvalue = currentArray[currentArray.length-1];
    const twopast = currentArray[currentArray.length-2];
    const floats = ["1","2","3","4","5","6","7","8","9","0","."];
    const opsandbracks = ["+","-","*","/","(",")"]
    const valids = ["Backspace", "=", "Enter", "c","(",")","+","-","*","/"]

    console.log(key)
    if (isNaN(parseFloat(lastvalue)) === false && floats.includes(key)) {
        //ensures floats continue to grow as single element in the array.
        const combinedvalue = lastvalue + key;
        currentArray.splice(currentArray.length-1, 1, combinedvalue);
        return currentArray
    } else if (lastvalue === "-" && opsandbracks.includes(twopast) && floats.includes(key)) {
        //builds negative floats if last value was "-" and was proceeded by another operator 
        const combinedvalue = lastvalue + key;
        currentArray.splice(currentArray.length-1, 1, combinedvalue);
        return currentArray;
    } else if (key === "=") {
        //begins to calculate, using a function that can deal with brackets. 
        return operateBrackets(currentArray)
    /*} else if (key === "Backspace") {
        //deletes the last keyed value, accounting for combined values. 
        lastvalstring = lastvalue.toString()
        lastvalstring.length > 1 ? currentArray[currentArray.length-1] = lastvalstring.slice(0, -1) : currentArray.pop();
        return currentArray
    } else if (key==="c") { 
        //resets if "c" is keyed. 
        let result = [];
        return result*/
    } else if (valids.includes(key) || floats.includes(key)) {
        //adds non special values, as long as they are a valid value. 
        currentArray.push(key)
        return currentArray;
    } else {
        //just returns the current array if a non-valid value was keyed. 
        return currentArray;
    }
};

function operateBrackets(inputArray) {
    if (inputArray.indexOf("(") == -1) {
        //uses non-bracket calculation function if no brackets. 
        return operateSimple(inputArray);  
    } else {
        //loop over the array
        for (var i=0; i<inputArray.length; i++) {
            // looking for a closing bracket
            if (inputArray[i] === ")") {
                const endpoint = i;
                // loop backward from that starting point 
                for (var a=endpoint; a>=0 ; a--) {
                    // looking for the opening bracket of the phrase
                    if (inputArray[a] === "(") {
                        const startpoint = a;
                        const length = endpoint-startpoint+1
                        //then slice out the phrase within the brackets. 
                        const subArray = inputArray.slice(startpoint+1, endpoint);
                        //then run calculation on that phrase/subarrary.
                        const arrayl1 = operateSimple(subArray);
                        //splice back into the main array
                        inputArray.splice(startpoint, length, arrayl1[0]);
                        //reset outer loop to restart from previous position. 
                        i=startpoint;
                        //break out of inner loop. 
                        break
                    }
                }
            }
        }
    //finish by running one final operation incase there are some last operations asfter the last bracket.    
    return operateSimple(inputArray);
    }   
};

function operateSimple (inputArray) {
    const operators = ["+","-","*","/"]

    if (inputArray[0] === "-") {
        const negative = inputArray.shift();
        inputArray[0] = negative + inputArray[0];
    } else if (operators.includes(inputArray[0])) {
        inputArray.shift();
    }
    
    for (let i=1; i<inputArray.length; i++) {
        if (inputArray[i]==="/") {
            const division = divide(inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1,3,division);
            i--;
        } else if (inputArray[i]==="*") {
            const multiple = multiply(inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1,3,multiple);
            i--;
        };
    };
    for (let i=1; i<inputArray.length; i++) {
        if (inputArray[i]==="+") {
            const sum = add(inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1, 3, sum);
            i--;
        } else if (inputArray[i]==="-") {
            const sub = subtract(inputArray[i-1], inputArray[i+1]);
            inputArray.splice(i-1, 3, sub);
            i--;
        };
    };

    return inputArray;
};

function round(value, decimals) {
    const floor = Math.floor(value);
    const smallfloat = value - floor;
    const smallrounded = Number(Math.round(smallfloat+'e'+decimals)+'e-'+decimals);
    return floor + smallrounded;
};

function add (x, y) {
    const float = parseFloat(x) + parseFloat(y);
    return round(float, 5);
};

function subtract (x, y) {
    const float = parseFloat(x) - parseFloat(y);
    return round(float, 5);  
};

function divide (x, y) {
    const float = parseFloat(x) / parseFloat(y);
    return round(float, 5)
};

function multiply (x, y) {
    const float = parseFloat(x) * parseFloat(y);
    return round(float, 5)
};