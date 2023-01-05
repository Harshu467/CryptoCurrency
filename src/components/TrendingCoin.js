import React from 'react'
import { useNavigate } from 'react-router-dom'

const TrendingCoin = ({data}) => {
    let navigate = useNavigate();
    const getCoinsDetails = (id) =>{
        navigate(`${id}`);
    };
  return (
    <div className='lg:w-[40%] sm:w-[60%] w-[80%] bg-gray-200 mb-12 last:mb-0 rounded-lg p-4 relative cursor-pointer
    hover:bg-gray-100 hover:bg-opacity-40' 
    onClick={() => getCoinsDetails(data.id) }
    >
      { data ? (
      <>
        <h3 className='txt-base flex items-center my-0.5'>
            <span className='text-gray-100 capitalize' >Name :&nbsp; </span>
            <span className='text-cyan'>{data.name}</span>
        </h3>
        <h3 className='txt-base flex items-center my-0.5'>
            <span className='text-gray-100 capitalize' >Market Cap Rank :&nbsp; </span>
            <span className='text-cyan'>{data.market_cap_rank}</span>
        </h3>
        <h3 className='txt-base flex items-center my-0.5'>
            <span className='text-gray-100 capitalize' >Price [In BTC] :&nbsp; </span>
            <span className='text-cyan'>{new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "btc",
                maximumSignificantDigits: 5,
              }).format(data.price_btc)}</span>
        </h3>
        <h3 className='txt-base flex items-center my-0.5'>
            <span className='text-gray-100 capitalize' >Score :&nbsp; </span>
            <span className='text-cyan'>{data.score}</span>
        </h3>
        <img src={data.large} alt={data.name} 
        className='absolute lg:top-2/4 top-4 lg:-right-12 -right-6 -translate-y-2/4  lg:w-[35%] w-[5rem] h-auto rounded-full' />
        </>
      ):(
            <div className="w-full  h-full flex justify-center items-center">
              <div className="w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin"
                role="status"/>
              <span className="ml-2">Please Wait...</span>
            </div>
          )}
    </div>
  )
}

export default TrendingCoin
