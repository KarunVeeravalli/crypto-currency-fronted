import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  import "./BigChartBox.css";
  
  const data = [
    {
      name: "Sun",
      crypto: 4000,
      stocks: 2400,
      electronic: 2400,
    },
    {
      name: "Mon",
      crypto: 3000,
      stocks: 1398,
      electronic: 2210,
    },
    {
      name: "Tue",
      crypto: 2000,
      stocks: 9800,
      electronic: 2290,
    },
    {
      name: "Wed",
      crypto: 2780,
      stocks: 3908,
      electronic: 2000,
    },
    {
      name: "Thu",
      crypto: 1890,
      stocks: 4800,
      electronic: 2181,
    },
    {
      name: "Fri",
      crypto: 2390,
      stocks: 3800,
      electronic: 2500,
    },
    {
      name: "Sat",
      crypto: 3490,
      stocks: 4300,
      electronic: 2100,
    },
  ];
  
  const BigChartBox = () => {
    return (
      <div className="bigChartBox">
        <h1>Revenue Analytics</h1>
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="electronic"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="stocks"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="crypto"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default BigChartBox;
  