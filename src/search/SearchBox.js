import React, { useState } from 'react'
import { 
  Button, 
  TextField,
 } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { searchMovies } from '../shared/API'

import styles from './SearchBox.module.css'

const MovieList = (props) => {
  return (
    
      <div className={styles.list}>
        {props.movies.map((movie) => (
          <div className={styles.listItem} key={movie.id}>
                <img 
                src={movie.poster_path ? ('https://image.tmdb.org/t/p/w1280'+ movie.poster_path) :'https://image.freepik.com/free-vector/coming-soon-message-illuminated-with-light-projector_1284-3622.jpg' } 
                alt={movie.title}
                />
                <div className={styles.cardText}>
                <h3 className={styles.movieTitle}>{movie.title}</h3>
                  <div className={styles.movieDetails}>
          <p> {movie.release_date}</p>
          <p> Average Vote: {movie.vote_average}</p>
      </div>
              
            <Button
              className={styles.addMovie}
              color="secondary"
              onClick={(e) => {
                e.preventDefault()
                props.onMovieAdd(movie)
              }}>
              <AddIcon />Add to Favorites
            </Button>
            </div>
          </div>
        ))}
      </div>
  )
}

const SearchBox = (props) => {
  const [term, setTerm] = useState('')
  const [movies, setMovies] = useState([])

  const localMovieAdd = (movie) => {
    setMovies([])
    props.onMovieAdd(movie)
  }
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <TextField
          label="Search for a movie"
          id="filled-basic"
          variant="filled"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value)
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            searchMovies(term).then((res) => setMovies(res.data.results))
          }>
          Search
        </Button>
      </div>
      <MovieList movies={movies} onMovieAdd={localMovieAdd} />
    </div>
  )
}

export default SearchBox
