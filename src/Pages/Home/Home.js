import React from 'react';
import Banner from './Banner';
import Client from './Client';
import Project from './Project';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <Project></Project>
            <Client></Client>
        </div>
    );
};

export default Home;