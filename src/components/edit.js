import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Edit() {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array object's push() method
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [director, setDirector] = useState('');

    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //make a HTTP Request with GET method and pass as part of the url
        axios.get('http://localhost:5000/api/movie/' + id)
            .then((response) => {
                // Assign Response data to the arrays using useState.
                setTitle(response.data.title);
                setCover(response.data.cover);
                setDirector(response.data.director);
            })
            .catch()
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const editMovie = {
            title: title,
            cover: cover,
            director: director
        }

        axios.put('http://localhost:5000/api/movie/' + id, editMovie)
            .then()
            .catch();
    }

    return (
        <div>
            <h3>Edit Movie</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Movie Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Movie Director: </label>
                    <input type="text"
                        className="form-control"
                        value={director}
                        onChange={(e) => { setDirector(e.target.value) }}
                    />
                </div>
                <input type="submit" value="Edit Movie"></input>
            </form>
        </div>
    );
}