import { useState,useEffect } from 'react';


const Dropdown = () => {
    
        const [inputValue, setInputValue] = useState('');
      
        const handleInputChange = (event) => {
          setInputValue(event.target.value);
        };

        
            const [selectedOption, setSelectedOption] = useState('');
          
            const handleSelectChange = (event) => {
              setSelectedOption(event.target.value);
            };


  return (
    <div>
        <form>
        <label htmlFor="textbox">Enter transaction id:</label>
      <input
        type="text"
        id="textbox"
        value={inputValue}
        onChange={handleInputChange}
      /><br/>
      <label htmlFor="dropdown">Select type :</label>
      <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value="">-- Select --</option>
        <option value="option1">2 wheeler</option>
        <option value="option2">3 wheeler</option>
        <option value="option3">4 wheeler</option>
        <option value="option3">heavy</option>
      </select><br/>
      <p>Input value: {inputValue}</p><br/>
      <p>Selected option: {selectedOption}</p>
        </form>
    </div>
    
  );
}


export default Dropdown;

