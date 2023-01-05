import React from "react";
import axios from "axios";

export class Import extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
        this.onChangeMovieCover = this.onChangeMovieCover.bind(this);
        this.onChangeMovieDirector = this.onChangeMovieDirector.bind(this);
        
        this.state = {
            title:'',
            cover:'',
            director:''
        }
    }
    // Gets envoked when you press add book
    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.title},
        ${this.state.cover},
        ${this.state.director}`);

        const movie={
            title:this.state.title,
            cover:this.state.cover,
            director:this.state.director
        }

        axios.post('http://localhost:5000/api/movies',movie)
        .then()
        .catch();

        this.setState({
            title:'',
            cover:'',
            director:''
        })
    }

    onChangeMovieTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeMovieCover(e){
        this.setState({
            cover:e.target.value
        })
    }
    onChangeMovieDirector(e){
        this.setState({
            director:e.target.value
        })
    }

    render(){
        return(
            <div>
                <h3><b>Welcome</b></h3>
                <h4>Enter the details below to add a new movie</h4>
                <hr></hr>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeMovieTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Movie Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeMovieCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Movie Director: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.director}
                            onChange={this.onChangeMovieDirector}
                        />
                    </div>
                    <br></br>
                    <input type="submit" value="Add Movie" />

                </form>
            </div>
        )
    }
}