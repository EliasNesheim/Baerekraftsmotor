import React from 'react'
import { Bar } from 'react-chartjs-2'

export default function Graph( {Label, Values} ) {

    console.log("graf: " + JSON.stringify(Label))
    console.log("graf: " + Label)
    console.log("graf: " + Values)
    return <div>
        <Bar
            data={{
                labels: Label,
                datasets: [
                    {
                        label: 'Sum of Rows',
                        data: Values,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ]
                    }
                ]

            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 40
                        }
                    }]
                }
                
            }
        }
        />
    </div>
}