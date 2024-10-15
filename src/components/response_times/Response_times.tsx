import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RootState } from '../../redux/store'; // Import RootState type
import '../../styles/Response_times.css'

const Response_times: React.FC = () => {
  const GetDayDate = useSelector((store: RootState) => store.ResponseTimes.day.date);
  const GetDayLabels = useSelector((store: RootState) => store.ResponseTimes.day.labels);
  const GetWeekLabels = useSelector((store: RootState) => store.ResponseTimes.week.labels);
  const GetWeekDate = useSelector((store: RootState) => store.ResponseTimes.week.date);

  const [selectedOption, setSelectedOption] = useState('Day');

  // Prepare data for the chart based on the selected option
  const categoryData = selectedOption === 'Day'
    ? GetDayLabels.map((label: string, index: number) => ({
        category: label,
        count: GetDayDate[index], // Ensure this is a number
      }))
    : GetWeekLabels.map((label: string, index: number) => ({
        category: label,
        count: GetWeekDate[index], // Ensure this is a number
      }));

  // Check for loading state
  if (
    (selectedOption === 'Day' && (GetDayDate === null || GetDayLabels === null)) ||
    (selectedOption === 'Week' && (GetWeekLabels === null || GetWeekDate === null))
  ) {
    return <h1 className='loading'>Loading...</h1>;
  }

  return (
    <section className='ResponseTimesSection'>
      <div className='ResponseTimesChart'>
        <h2>Response Times</h2>
        <select 
          className='response-select'
          onChange={(e) => setSelectedOption(e.target.value)} 
          value={selectedOption}
        >
          <option value="Day">Day</option>
          <option value="Week">Week</option>
        </select>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={categoryData} className='line-chart'>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Response_times;
