import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './app.css'

class App extends Component {
    constructor () {
        super ();
        this.state = {
            robots: [],
            searchField: ''
        };
    };

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(roboUsers => this.setState({ robots: roboUsers }));
    }

    render () {
        if (this.state.robots.length === 0) {
            return (
                <div className='tc load'>
                    <h1>Loading</h1>
                </div>
            )
        } else {
            const filteredRobots = this.state.robots.filter(robot => {
                return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            })
            return (
                <div className='tc'>
                    <h1>ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    };
};

export default App;
