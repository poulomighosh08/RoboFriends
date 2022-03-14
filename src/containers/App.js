import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

const App = () => {
    
    const [robots, setRobots] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    
    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchInput.toLowerCase());
    })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((users)=> setRobots(users));
    }, [])

    const OnChangeSearch = (event) => {
        setSearchInput(event.target.value);
    }

    return !robots.length ?
     <h1>Loading</h1> :
     (  
        <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox onSearch={OnChangeSearch}/>
        <Scroll>
       <ErrorBoundary>
        <CardList robots={filteredRobots}/>
        </ErrorBoundary>
        </Scroll>
        </div>
    );
}

export default App;