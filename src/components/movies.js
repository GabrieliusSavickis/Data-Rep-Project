import React from "react";
import {MovieItem} from './movieItem';

export class Movies extends React.Component{
    render(){
        return this.props.movies.map(
            (movie)=>{
                return <MovieItem movie={movie} key={movie._id} Reload={this.props.Reload}></MovieItem>
            }
        );
    }

}