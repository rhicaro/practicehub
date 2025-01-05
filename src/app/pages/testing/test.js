import React, { useEffect } from 'react';

/**
 * Advent of Code - Day 3 Problem
 * This is a different version to my previous solution
 * 
 * Computes total safe and unsafe rows based on given criteria.
 * 
 * @param {Object} props 
 * @param {string} props.value - Input string with rows of numbers.
 * @returns {JSX.Element}
 */
const Aoc3 = ({ value }) => {
    const getRowSafetyStats = (input) => {
        let totalSafe = 0;

        // Split input into rows and parse numbers
        const rows = input.split('\n').map(row => row.split(' ').map(Number));

        rows.forEach((row) => {
            let isRowSafe = true;
            // let previousDifference = null;
            let onlyIncreasing = true;
            let onlyDecreasing = true;

            for (let i = 0; i < row.length - 1; i++) {
                // const difference = row[i] - row[i + 1];
                const diff = row[i + 1] - row[i];

                if (diff > 0) onlyDecreasing = false;
                if (diff < 0) onlyIncreasing = false;

                // Check if differences change sign (unsafe)
                // if (previousDifference !== null && (previousDifference > 0 && difference < 0 || previousDifference < 0 && difference > 0)) {
                //     isRowSafe = false;
                //     break;
                // }

                // Check if difference is outside the acceptable range
                if (Math.abs(difference) > 3) {
                    isRowSafe = false;
                    break;
                }
                // previousDifference = difference;
                if (isSafe && (onlyIncreasing || onlyDecreasing)) {
                    totalSafe++;
                }
            }

            isRowSafe ? totalSafe++ : totalUnsafe++;
        });

        console.log('Total Safe Rows:', totalSafe);
        console.log('Total Unsafe Rows:', totalUnsafe);
    };

    useEffect(() => {
        if (value) {
            getRowSafetyStats(value);
        }
    }, [value]);

    return <div />;
};

export default Aoc3;