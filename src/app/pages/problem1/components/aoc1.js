import React, { use, useEffect } from 'react';

/**
 * Originally I thought it was to compare the two numbers that
 * are in the same row. No you are comparing the differences of the two 
 * smallest numbers in the two columns so that means it is not 
 * in the same row. Explains why my value was off my around 1 million.
 * @param {*} param0 
 * @returns 
 */

const Aoc1 = ({ value }) => {

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

        console.log(`This is the left column: ${leftCol}`);
        console.log(`This is the right column: ${rightCol}`);

        for (let i = 0; i < leftCol.length; i++) {
            total += Math.abs(leftCol[i] - rightCol[i]);
        }

        console.log("This is the total cost after the function", total);
    }

    useEffect(() => {
        getCol1(value);
    });

    return (
        <div />
    );
};

export default Aoc1;