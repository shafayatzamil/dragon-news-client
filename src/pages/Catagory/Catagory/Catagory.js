import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Catagory = () => {
    const catagoryNews= useLoaderData();
    return (
        <div>
            <h2>This is catagory component news loaded:{catagoryNews.length}</h2>
            {
                catagoryNews.map(news=><NewsSummaryCard
                key={news._id}
                news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Catagory;