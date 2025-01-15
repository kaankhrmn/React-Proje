import React, { useState } from 'react'
import '../css/Currency.css'
import { FaCaretRight } from "react-icons/fa";
import axios from 'axios'


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_Lp6PLhlxBX4atPuExF4gyXHFyfq4ElKCH4ajSkgu";

function Currency() {

    const [amount, setamount] = useState(1)
    const [fromCurrency, setfromCurrency] = useState('USD')
    const [toCurrency, settoCurrency] = useState('TRY')
    const [result, setresult] = useState(0)

    const exchange = async () => {
        // console.log(amount)
        // console.log(fromCurrency)
        // console.log(toCurrency)
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        const result = (response.data.data[toCurrency] * amount).toFixed(3)
        setresult(result)
    }

    return (
        <>
            <div>
                <div className='currency-div'>
                    <div className='header'>
                        <h3>Döviz Kuru Uygulaması</h3>
                    </div>

                    <div style={{ marginTop: '30px' }}>
                        <input type='number' className='amount' value={amount} onChange={(e) => setamount(e.target.value)} />
                        <select className='from-currency-option' onChange={(e) => setfromCurrency(e.target.value)}>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>TRY</option>
                        </select>
                        <FaCaretRight style={{ fontSize: '25px', marginRight: '10px' }} />
                        <select className='to-currency-option' onChange={(e) => settoCurrency(e.target.value)}>
                            <option>TRY</option>
                            <option>USD</option>
                            <option>EUR</option>
                        </select>
                        <input type='number' className='result' value={result} onChange={(e) => setresult(e.target.value)} />
                    </div>
                    <div>
                        <button type='button' className='exchage-button' onClick={exchange}>Çevir</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Currency
