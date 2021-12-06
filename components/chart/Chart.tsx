import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import css from './chart.module.scss';
interface ChartProps {
    title: string;
    data: any[];
    dataKey: string;
    grid?: boolean;
}

function Chart({title, data, dataKey, grid }: ChartProps) {
  return (
    <div className={css.chart}>
      <h3 className={css.chartTitle}>{title}</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
            <XAxis dataKey='name' stroke="#5550BD"/>
            <Line type='monotone' dataKey={dataKey} stroke="#5550BD" />
            <Tooltip />
            {grid &&<CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
