import { createContext, useLayoutEffect, useState }  from "react";
import React from "react";

export const TrendingContext = createContext({});

export const TrendingProvider = ({children})=>{
    const [TrendData, setTrendData] = useState();
    const getTrendData = async () => {
        try {
            const data = await fetch(
              `https://api.coingecko.com/api/v3/search/trending`
            )
              .then((res) => res.json())
              .then((json) => json);
      
            // console.log(data);
            setTrendData(data.coins);
          } catch (error) {
            console.log(error);
          }   
      };

      const resetTrendingResult = () => {
        getTrendData();
      };
    
      useLayoutEffect(() => {
        getTrendData();
      }, []);
    
      return (
        <TrendingContext.Provider
        value={{
          TrendData,
          resetTrendingResult,
        }}
      >
        {children}
      </TrendingContext.Provider>
      );
    };