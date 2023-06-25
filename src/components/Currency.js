import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Currency() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const currencies = [
    { name: 'USD', symbol: '$', conversionRate: 75, value: '' },
    { name: 'EUR', symbol: '€', conversionRate: 90, value: '' },
    { name: 'GBP', symbol: '£', conversionRate: 100, value: '' },
    { name: 'CAD', symbol: 'C$', conversionRate: 60, value: '' },
    { name: 'AUD', symbol: 'A$', conversionRate: 55, value: '' },
    { name: 'JPY', symbol: '¥', conversionRate: 7, value: '' },
    { name: 'CNY', symbol: '¥', conversionRate: 11, value: '' },
    { name: 'INR', symbol: '₹', conversionRate: 1, value: '' },
    { name: 'MXN', symbol: '$', conversionRate: 35, value: '' },
    { name: 'BRL', symbol: 'R$', conversionRate: 13, value: '' },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);


  const handleCurrencyChange = (event) => {
    const selectedCurrencyValue = event.target.value;
    const selectedCurrencyObj = currencies.find(
      (currency) => currency.name === selectedCurrencyValue
    );
    setSelectedCurrency(selectedCurrencyObj);
  };

  const convertToRupees = () => {
    return product.price * selectedCurrency.conversionRate;
  };

  

  return (
    <div className='currency'>
      <label>
        Currency:
        <select value={selectedCurrency.name} onChange={handleCurrencyChange}>
          {currencies.map((currency) => (
            <option key={currency.name} >
              {currency.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <p>
        Amount: {selectedCurrency.symbol} {convertToRupees()}
      </p>
    </div>
  );
}

export default Currency;


