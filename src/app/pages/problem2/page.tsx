'use client';
import AOC2 from './components/aoc2';
import { useState } from 'react';

export default function Problem2Page() {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = () => {
    setValue(inputValue);
  }

  return (
    <div className="page-container">
        <h1>Problem 2, Day 1 Advent of Code</h1>
      <div className="problem-container">
      </div>

      <div className="solution-container">
        <textarea 
          className="problem-input" 
          placeholder="Enter Problem Input"
          value={inputValue}
          onChange={handleInputChange}
          style={{ color: 'black' }}
        />
        <button className="problem-submit" onClick={handleSubmit}>Submit</button>
        <AOC2 value={value}/>
      </div>

      <div className="anwser-container">
        <h2>Answer:</h2>
      </div>
    </div>
  );
}