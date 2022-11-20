import React from 'react'

const TrendingCoin = ({data,key}) => {
  return (
    <div className='w-[40%] bg-gray-200 mb-12 last:mb-0 rounded-lg p-4 relative cursor-pointer hover:bg-gray-100 hover:bg-opacity-40' >
      { data?
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
        className='w-[35%] h-auto rounded-full absolute top-2/4 -right-12 -translate-y-2/4' />
        </>
        :
        null
      }
    </div>
  )
}

export default TrendingCoin
