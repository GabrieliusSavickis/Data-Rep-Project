import React from "react";
import { Movies } from "./movies";
import axios from "axios";

export class Content extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }
   
    componentDidMount() {
        axios.get('http://localhost:5000/api/movies')
            .then((response) => {
                this.setState({ movies: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        movies: []
    }

    render() {
        return (
            <div>
                <h1>Welcome to my movie<br></br><b>Watchlist</b></h1>
                <hr></hr>
                <Movies movies={this.state.movies} Reload={this.componentDidMount}></Movies>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}