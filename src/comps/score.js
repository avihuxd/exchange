import React from 'react'
export default function Score(props) {

  const { result, currency } = props;
  let exchange1 = Number(currency.exchange1).toFixed(3);
  return (
    <div className='my-3'>
      {
        <h2 className='display-6'>  Convertion values: <br /> {exchange1} {currency.currency1} Equals to {result} {currency.currency2}  </h2>
      }
    </div>
  )
}
