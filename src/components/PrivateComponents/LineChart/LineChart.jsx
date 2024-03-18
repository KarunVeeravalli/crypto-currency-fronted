import React from 'react'
import { Line } from 'react-chartjs-2';

const LineChart = ({historicData}) => {

    const days =1;
    const currency ="RS";


  return (
    <div>
        <Line style={{height:'500px', width:'800px'}}
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                    // borderColor: "white",

                  },
                ],
              }}
              options={{
                
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
    </div>
  )
}

export default LineChart