import { createContext, useLayoutEffect, useState }  from "react";
import React from "react";

export const CryptoContext = createContext({});

export const CryptoProvider = ({children})=>{
    const [CryptoData, setCryptoData] = useState();
    const [SearchData, setSearchData] = useState();
    const getCryptoData = async ()=>{
        try {
            const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d').then(res=>res.json()).then(json=>json)
            setCryptoData(data)
        } catch (error) {
            console.log(error)
        }
    }
    const getSearchData = async (query)=>{
        try {
            const data = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`).then(res=>res.json()).then(json=>json)
            setSearchData(data)
            console.log(data.coins)
            
        } catch (error) {
            console.log(error)
        }
    }
    useLayoutEffect(() => {
        getCryptoData();
    }, [])
    return(
        <CryptoContext.Provider value={{CryptoData,SearchData,getSearchData}}>
            {children}
        </CryptoContext.Provider>

    )

}