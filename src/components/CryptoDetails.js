import React, { useContext, useLayoutEffect } from 'react'
import ReactDOM  from 'react-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { CryptoContext } from '../contexts/CryptoContext';
const CryptoDetails = () => {
    let {coinId} = useParams();
    let navigate = useNavigate();
    let {coinData:data,getCoinData,currency} = useContext(CryptoContext);
    useLayoutEffect(() => {
        getCoinData(coinId);
    }, [coinId])
    const close = ()=>{
        navigate('..');
    }
  return ReactDOM.createPortal(
    <div className='fixed top-0 w-full h-full bg-gray-200 bg-opacity-30 first-letter:
    backdrop-blur-sm flex items-center justify-center font-nunito' onClick={close}>
        <div onClick={(e)=>e.stopPropagation()} className='w-[65%] h-[75%] bg-gray-300 bg-opacity-75 rounded-lg text-white relative'>
        {
            data ? 
            <div className='flex items-center justify-between h-full w-full p-4'>
                <div className='flex flex-col w-[45%] h-full pr-2'>
                    <div className='flex w-full items-center'>
                        <img className='w-[3rem] h-[3rem] mx-1.5' src={data.image.large} alt={data.id} />
                        <h1 className='text-xl capitalize font-medium'>{data.name}</h1>
                        <span className='text-sm py-0.5 mx-2.5 ml-2 bg-cyan text-cyan bg-opacity-25 rounded uppercase'>{data.symbol}</span>
                    </div>
                    <div className='flex w-full mt-6'>
                        <div className='flex flex-col w-full'>
                            <div className='flex justify-between'>
                                <span className='text-sm capitalize text-gray-100'>Price</span>
                            </div>
                            <div className={`text-sm px-1 ml-2 font-medium flex items-center rounded uppercase bg-opacity-25
                            ${data.market_data.price_change_percentage_24h>0 ? 'bg-green text-green' : 'bg-red text-red'} `
                        }>
                                <span>{Number(data.market_data.price_change_percentage_24h).toFixed(2)}%</span>
                            </div>
                        </div>
                        <h2>{new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                        maximumFractionDigits:5
                      }).format(data.market_data.current_price[currency])}</h2>
                    </div>
                   
                </div>
                <div className='flex flex-col w-[55%] h-full pl-3 bg-green'>
                    Right
                </div>
            </div>
            :null
        }
        </div>
    </div>,
    document.getElementById("model")
  )
}

export default CryptoDetails
