import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "./api";
import ReactApexChart from "react-apexcharts"; // 올바른 임포트

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface IChart {
  coinId: string;
}

function Chart({ coinId }: IChart) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  const chartData = data
    ?.map((price) => price.close)
    .filter((value) => typeof value === "number") || [];

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ReactApexChart 
          options={{
            theme: { mode: "dark" },
            chart: {
              height: 300,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            grid: { show: false },
            stroke: { curve: "smooth", width: 4 },
            yaxis: { show: false },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
            }}}
          series={[{ name: "Price", data: chartData }]} 
          type="line" 
        />
      )}
    </div>
  );
}

export default Chart;