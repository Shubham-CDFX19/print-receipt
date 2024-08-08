import React from 'react';
import './App.css';

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="App">
      <div className="receipt">
        <h2>Store Name</h2>
        <p>Address Line 1</p>
        <p>Address Line 2</p>
        <hr />
        <div className="items">
          <p>Item 1<span>₹1,000</span></p>
          <p>Item 2<span>₹10,100</span></p>
          <p>Item 3<span>₹500</span></p>
        </div>
        <hr />
        <p>Total: <span>₹10,600</span></p>
        <hr />
        <p>Thank you for shopping with us!</p>
      </div>
      <button onClick={handlePrint} className="print-button">Print</button>
    </div>
  );
}

export default App;