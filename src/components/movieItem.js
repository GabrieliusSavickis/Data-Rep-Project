import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class MovieItem extends React.Component {
    constructor() {
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }
    DeleteMovie(e) {
        e.preventDefault();

        axios.delete('http://localhost:5000/api/movie/' + this.props.movie._id)
            .then((res) => { this.props.Reload(); })
            .catch();
    }
    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.cover}></img>
                            <footer>
                                {this.props.movie.director}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/edit/' + this.props.movie._id} className="btn btn-primary">Edit</Link>
                    <Button variant="Delete" onClick={this.DeleteMovie}>Delete</Button>
                </Card>
            </div>
        );
















        
    }
}