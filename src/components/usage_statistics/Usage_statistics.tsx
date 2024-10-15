// src/components/usage_statistics/Usage_statistics.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { RootState } from '../../redux/store';
import '../../styles/Usage_statistics.css'; // Import CSS for styles

const Usage_statistics: React.FC = () => {
  const GetPlatformLabels = useSelector((store: RootState) => store.UsageStatistics.platform.labels);
  const GetPlatformData = useSelector((store: RootState) => store.UsageStatistics.platform.data);
  const GetCountryData = useSelector((store: RootState) => store.UsageStatistics.country.data);
  const GetCountryLabels = useSelector((store: RootState) => store.UsageStatistics.country.labels);
  const [selectedOption, setSelectedOption] = useState('Platform');

  if (
    (selectedOption === 'Platform' && (GetPlatformLabels === null || GetPlatformData === null)) ||
    (selectedOption === 'Country' && (GetCountryLabels === null || GetCountryData === null))
  ) {
    return <h1 className='loading'>Loading...</h1>;
  }

  const chartData = selectedOption === 'Platform'
    ? (GetPlatformLabels?.map((label: string, index: number) => ({
        name: label,
        value: GetPlatformData ? GetPlatformData[index] : 0,
      })) || [])
    : (GetCountryLabels?.map((label: string, index: number) => ({
        name: label,
        value: GetCountryData ? GetCountryData[index] : 0,
      })) || []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF679B', '#8A2BE2'];

  return (
    <section className='UsageStatisticsSection'>
      <div className='UsageStatisticsChart'>
        <h2>Usage Statistics</h2>
        <select
          className='chart-select'
          onChange={(e) => setSelectedOption(e.target.value)}
          value={selectedOption}
        >
          <option value="Platform">Platform</option>
          <option value="Country">Country</option>
        </select>
        
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              innerRadius={40}
              fill="#8884d8"
              label={(entry) => entry.name}
              labelLine={false}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Usage_statistics;
