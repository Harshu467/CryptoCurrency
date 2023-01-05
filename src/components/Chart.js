import React, { useContext, useLayoutEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CryptoContext } from "../contexts/CryptoContext";
function CustomTooltip({ payload, label, active, currency = "usd" }) {
  if (active && payload && payload.length > 0) {
    return (
      <div className="custom-tooltip">
        <p className="label text-sm text-cyan">{`${label} : ${new Intl.NumberFormat(
          "en-IN",
          {
            style: "currency",
            currency: currency,
            minimumFractionDigits: 5,
          }
        ).format(payload[0].value)}`}</p>
      </div>
    );
  }

  return null;
}

const Graph = ({ data, currency, type }) => {
  return (
    <ResponsiveContainer height={"90%"}>
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#14ffec"
          strokeWidth={"1px"}
        />
        <CartesianGrid stroke="#323232" />
        <XAxis dataKey="date" hide />
        <YAxis dataKey={type} hide domain={["auto", "auto"]} />
        <Tooltip
          content={<CustomTooltip />}
          currency={currency}
          cursor={false}
          wrapperStyle={{ outline: "none" }}
        />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};
const Chart = ({ id }) => {
  const [chartData, setchartData] = useState();
  let { currency } = useContext(CryptoContext);
  const [type, settype] = useState("prices");
  const [days, setdays] = useState(7);
  useLayoutEffect(() => {
    const getChartData = async (id) => {
      try {
        const data = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
        )
          .then((res) => res.json())
          .then((json) => json);
        console.log(data);
        let convertedData = data[type].map((item) => {
          return {
            date: new Date(item[0]).toLocaleDateString(),
            [type]: item[1],
          };
        });
        console.log(convertedData);
        setchartData(convertedData);
      } catch (error) {
        console.log(error);
      }
    };
    getChartData(id);
  }, [id, type, days]);
  return (
    <div className="w-full  h-[60%]">
      <Graph data={chartData} currency={currency} type={type} />
      <div className="flex flex-wrap md:flex-nowrap">
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            type === "prices"
              ? "bg-cyan text-cyan"
              : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => settype("prices")}
        >
          Price
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            type === "market_caps"
              ? "bg-cyan text-cyan"
              : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => settype("market_caps")}
        >
          Market Cap
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            type === "total_volumes"
              ? "bg-cyan text-cyan"
              : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => settype("total_volumes")}
        >
          Total Volume
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 7 ? "bg-cyan text-cyan" : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => setdays(7)}
        >
          7D
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 14 ? "bg-cyan text-cyan" : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => setdays(14)}
        >
          14D
        </button>
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 30 ? "bg-cyan text-cyan" : "bg-gray-200 text-gray-100"
          }`}
          onClick={() => setdays(30)}
        >
          30D
        </button>
      </div>
    </div>
  );
};

export default Chart;
