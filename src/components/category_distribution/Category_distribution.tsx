// src/components/category_distribution/Category_distribution.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store'; // Import RootState type
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../../styles/Category_distribution.css'

const Category_distribution: React.FC = () => {
    // Use RootState to specify the type of store
    const GetLabels = useSelector((store: RootState) => store.CategoryDistribution.labels); // Type is string[] | null
    const GetData = useSelector((store: RootState) => store.CategoryDistribution.data); // Type is number[] | null

    if (GetLabels === null || GetData === null) {
        return <h1 className='loading'>Loading...</h1>;
    }

    // Prepare data for the chart
    const categoryData = GetLabels.map((label: string, index: number) => ({
        category: label,
        count: GetData[index] ?? 0, // Default to 0 if GetData[index] is undefined
    }));

    return (
        <section className='CategoryDistributionSection'>
            <div className='CategoryDistributionChart'>
                <h2>Category Distribution</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={categoryData} className='chart'>
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#8884d8" radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
};

export default Category_distribution;
