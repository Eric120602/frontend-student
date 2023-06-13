import { useState } from 'react';
import { buyThePack } from '../api/users';

const BuyPack = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    console.log(selectedOption);
  };

  const buyPack = async () => {
    try {
      console.log("enthelum", inputValue)
      await buyThePack({
        transactionId: inputValue,
        vehicleType: selectedOption,
      })
      window.location.replace('/home');
    }
    catch (exception) {
      console.log("failed", exception)
    }

  }

  return (
    <div className="my-div">
      <form onSubmit={handleSubmit}>
        <label htmlFor="modelname">Enter transaction id: </label>
        <input
          type="text"
          id="textbox"
          value={inputValue}
          onChange={handleInputChange}
        /><br /><br />

        <label htmlFor="dropdown">Select type :  </label>
        <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
          <option value="">-- Select --</option>
          <option value="2">2 wheeler</option>
          <option value="3">3 wheeler</option>
          <option value="4">4 wheeler</option>
          <option value="5">heavy</option>
        </select><br /><br />

        <button onClick={buyPack} className="Submit">Submit</button>
      </form>
    </div>

  );
}


export default BuyPack;

