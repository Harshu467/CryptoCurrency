import React, { useContext, useLayoutEffect } from 'react'
import ReactDOM  from 'react-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { CryptoContext } from '../contexts/CryptoContext';
const CryptoDetails = () => {
    let {coinId} = useParams();
    let navigate = useNavigate();
    let {coinData:data,getCoinData} = useContext(CryptoContext);
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
                    <div>

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
