import React, { useEffect } from "react";

/**
 * Advent of Code - Day 3 Problem
 * Translated from C++ logic into JavaScript.
 *
 * Computes the total number of safe rows based on given criteria.
 *
 * @param {Object} props
 * @param {string} props.value - Input string with rows of numbers.
 * @returns {JSX.Element}
 */
const Aoc3 = ({ value }) => {
    const getRowSafetyStats = (input) => {
        let totalSafe = 0;
        const rows = input.split("\n").map((row) => row.trim().split(" ").map(Number));

        rows.forEach((row) => {
            let isSafe = true;
            let onlyIncreasing = true;
            let onlyDecreasing = true;

            for (let i = 0; i < row.length - 1; i++) {
                const diff = row[i + 1] - row[i];

                if (diff > 0) onlyDecreasing = false;
                if (diff < 0) onlyIncreasing = false;

                if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
                    isSafe = false;
                    break;
                }
            }

            if (isSafe && (onlyIncreasing || onlyDecreasing)) {
                totalSafe++;
            }
        });

        console.log("Total Safe Rows:", totalSafe);
    };

    useEffect(() => {
        if (value) {
            getRowSafetyStats(value);
        }
    }, [value]);

    return <div />;
};

export default Aoc3;
