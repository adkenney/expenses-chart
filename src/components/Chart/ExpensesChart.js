import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const ExpensesChart = props => {
  const options = {
    responsive: true,
    elements: {
      bar: {
        borderRadius: 5,
        borderSkipped: false,
        hoverBackgroundColor: 'hsl(186, 34%, 60%)',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      tooltip: {
        yAlign: 'bottom',
        displayColors: false,

        callbacks: {
          title: () => {
            return '';
          },
          label: context => {
            let label = context.dataset.label || '';

            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
  };

  const data = {
    labels: props.data.map(expense => expense.day),
    datasets: [
      {
        data: props.data.map(expense => expense.amount),
        backgroundColor: 'hsl(10, 79%, 65%)',
      },
    ],
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ExpensesChart;
