import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, PieChart, LineChart, Line, XAxis, YAxis, Pie, Cell, ResponsiveContainer, Tooltip, Legend, LabelList } from 'recharts';
import { RootState } from '../../redux/store';
import '../../styles/User_satisfaction.css'; // Import the CSS file for styles

const User_satisfaction: React.FC = () => {
  const GetLabels = useSelector((store: RootState) => store.UserSatisfaction.labels);
  const GetData = useSelector((store: RootState) => store.UserSatisfaction.data);
  const [selectedOption, setSelectedOption] = useState('Pie');

  if (GetData === null || GetLabels === null) {
    return <h1 className='loading'>Loading...</h1>;
  }

  const chartData = GetLabels.map((label: string, index: number) => ({
    name: label,
    value: GetData[index],
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <section className='UserSatisfactionSection'>
      <div className='UserSatisfactionChart'>
        <h2>User Satisfaction</h2>
        <select
          className='chart-select'
          onChange={(e) => setSelectedOption(e.target.value)}
          value={selectedOption}
        >
          <option value="Pie">Pie</option>
          <option value="Line">Line</option>
          <option value="Bar">Bar</option>
        </select>

        <ResponsiveContainer width="100%" height={300}>
          {selectedOption === 'Pie' ? (
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          ) : selectedOption === 'Line' ? (
            <LineChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
              <LabelList dataKey="value" position="top" />
            </LineChart>
          ) : (
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" radius={[10, 10, 0, 0]}>
                <LabelList dataKey="value" position="top" />
              </Bar>
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default User_satisfaction;
