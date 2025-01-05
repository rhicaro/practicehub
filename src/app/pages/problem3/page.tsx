'use client';
import AOC3 from './components/aoc3';
import { useState } from 'react';

export default function Problem3Page() {
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
        <h1>Problem 3, Day 2 Advent of Code</h1>
      <div className="problem-container">
      </div>

      <div className="solution-container">
        <textarea 
          className="problem-input" 
          placeholder="Enter Problem Input"
          value={inputValue}
          onChange={handleInputChange}
          style={{ 
            color: 'black',
            width: '30%',
           }}
        />
        <button className="problem-submit" onClick={handleSubmit}>Submit</button>
        <AOC3 value={value}/>
      </div>

      <div className="anwser-container">
        <h2>Answer:</h2>
      </div>
    </div>
  );
}