import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/category/Navbar';
import CategoryDistribution from './components/category_distribution/Category_distribution'
import './styles/App.scss';
import ResponseTimes from './components/response_times/Response_times';
import UsageStatistics from './components/usage_statistics/Usage_statistics';
import UserSatisfaction from './components/user_satisfaction/User_satisfaction';

const App: React.FC = () => {
  return (
    <section className="App">
      <div className='Navbar'>
        <Navbar />
      </div>
      <div className='Container'>
        <Routes>
          <Route path='/' element={<CategoryDistribution />} />
          <Route path='/response_times' element={<ResponseTimes />} />
          <Route path='/usage_statistics' element={<UsageStatistics />} />
          <Route path='/user_satisfaction' element={<UserSatisfaction />} />
        </Routes>
      </div>
    </section>
  );
};

export default App;
