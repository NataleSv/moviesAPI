import Movie from './Movie';
import './MovieList.css';

function MovieList(props){
    let { movies =[] } = props
    return (
        <div className="movies">
            {
                movies.length ? movies.map(movie => {
                    return <Movie key={movie.imdbID} {...movie} />
                }):<h4> Nothing found </h4>
            }

        </div>
    )
}
export default MovieList;