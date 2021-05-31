import React from 'react';
import { Pie } from 'react-chartjs-2';

export default function Languages({ data }) {
  const { edges } = data;

  const labelsNames = edges.map(({ node }) => node.name);
  const dataSize = edges.map(({ size }) => size);

  const color = edges.map(({ node }) => node.color);
  const pieData = {
    labels: labelsNames,
    datasets: [
      {
        label: '# of Votes',
        data: dataSize,
        backgroundColor: color
      }
    ]
  };
  // npm install --save chart.js
  return <Pie data={pieData} width={500} height={500} options={{ maintainAspectRatio: false }} />;
}
