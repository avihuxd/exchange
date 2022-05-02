import React, { useState } from 'react'
import Input from './input'
import Date from './date';
import Score from './score';
export default function ExchangeApp(props) {

  const [res, setRes] = useState(0);
  const [currencies, setcurrencies] = useState({});



  return (
    <div className='container '>
      <div className=' mx-auto text-center'>
        <h1 className='title mt-2'>Exchange app</h1>
        <Input hishuv={setRes} scurrency={setcurrencies} />
        <Score result={res} currency={currencies}/>
        <Date />
      </div>
    </div>
  )
}
