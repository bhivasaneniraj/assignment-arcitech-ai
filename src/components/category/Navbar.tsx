import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import data from '../../ai-data.json';
import { addData, addLabels } from '../../redux/CategoryDistribution';
import { addDayData, addDayLabels, addWeekData, addWeekLabels } from '../../redux/ResponseTimesSlice';
import { addUserData, addUserLabels } from '../../redux/UserSatisfactionSlice';
import { addCountryData, addCountryLabels, addPlatformData, addPlatformLabels } from '../../redux/UsageStatisticsSlice';
import marketImg from '../../images/market-research.png'
import "../../styles/Navbar.css"

const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Store category_distribution data into redux 
        dispatch(addLabels(Object.keys(data.category_distribution))); // Assuming keys are strings (labels)
        dispatch(addData(Object.values(data.category_distribution))); // Assuming values are numbers (data)

        // Store response times data into redux 
        dispatch(addDayLabels(data.response_times.day_wise.map(val => val.date)));
        dispatch(addDayData(data.response_times.day_wise.map(val => val.average_time)));
        dispatch(addWeekLabels(data.response_times.week_wise.map(val => val.week)));
        dispatch(addWeekData(data.response_times.week_wise.map(val => val.average_time)));

        // Store user satisfaction data into redux 
        dispatch(addUserLabels(data.user_satisfaction.ratings.map(val => String(val.rating)))); // Convert to string
        dispatch(addUserData(data.user_satisfaction.ratings.map(val => val.count)));


        // Store usage statistics data into redux
        dispatch(addPlatformLabels(Object.keys(data.usage_statistics.by_platform)));
        dispatch(addPlatformData(Object.values(data.usage_statistics.by_platform)));
        dispatch(addCountryLabels(Object.keys(data.usage_statistics.by_country)));
        dispatch(addCountryData(Object.values(data.usage_statistics.by_country)));

    }, [dispatch]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
    };

    return (
        <nav className='NavbarSection'>
            <div className='NavbarLogo'>
                <img src={marketImg} alt="Logo" className='LogoImage' />
                <h1 className='LogoName'>Recharts</h1>
            </div>
            <div className='hamburger' onClick={toggleMenu}>
                <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
                <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
            </div>
            <ul className={`NavbarMenu ${isMenuOpen ? 'show' : ''}`}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                        Category Distribution
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/response_times" className={({ isActive }) => (isActive ? "active" : "")}>
                        Response Times
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user_satisfaction" className={({ isActive }) => (isActive ? "active" : "")}>
                        User Satisfaction
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/usage_statistics" className={({ isActive }) => (isActive ? "active" : "")}>
                        Usage Statistics
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
