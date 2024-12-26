import React, { use, useEffect } from 'react';

/**
 * Anwser: 23046913
 * 
 * TODO: How can I improve this code
 * @param {*} param0 
 * @returns 
 */

const Aoc2 = ({ value }) => {
    const getCol1 = (value) => {
        var total = 0;
        var col1 = value.split("\n");
        var leftCol = {};
        var rightCol = {};
        for (let i = 0; i < col1.length; i++) {
            var currentPair = col1[i].split("   ");
            leftCol[i] = currentPair[0];
            rightCol[i] = currentPair[1];
        }

        leftCol = Object.values(leftCol).sort((a, b) => a - b);
        rightCol = Object.values(rightCol).sort((a, b) => a - b);
        
        const numbers = {};
        // Multiplication update
        for (let i = 0; i < leftCol.length; i++) {
            var target = leftCol[i];
            var count = rightCol.filter(num => num === target).length;
            // numbers[target] = count;
            total = total + (leftCol[i] * count);
        }

        console.log("This is the total cost after the function", total);
    }
    
    useEffect(() => {
        getCol1(value);
    });

    return (
        <div/>
    );
};

export default Aoc2;