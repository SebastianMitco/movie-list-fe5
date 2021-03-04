import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import TrashIcon from '@material-ui/icons/Delete'
import styles from './SavedMovies.module.css'
import SimpleRating from '../rating/SimpleRating.js'
const MovieItem = (props) => {
  // const handleMouseOver = (item) => {
    //console.log(item)
    // const index = ratings.findIndex((el) => el.id === item.id)
    // const items = [...ratings] // scoate o copie a arrayului
    // items[index].active = true  //scoatem elemntul activ si il setam la true 
    // setRatings(items)  // doar facem active si nu functioneaza cum trebuie 
  //   const items = ratings.map((el, index) => {
  //     console.log(index, item.id)
  //     if (index <= item.id) { //daca indexu e mai mic sau egal ca si id-ul facem active daca nu false
  //       return Object.assign({}, { ...el }, { active: true })
  //     }
  //     return Object.assign({}, { ...el }, { active: false })
  //   }) //
  //   setRatings(items)
  //   console.log('items: ', items)
  // }

  //Movie Const declaration
  const movie = props.movie
  // const [ratings, setRatings] = useState([
  //   { id: 0, active: false },
  //   { id: 1, active: false },
  //   { id: 2, active: false },
  //   { id: 3, active: false },
  //   { id: 4, active: false },
  // ])
  //Saved Movie Item
  return (
    <div className={styles.movieItem}>
      <span className="movie_poster">
        <img src={movie.poster_path ? ('https://image.tmdb.org/t/p/w1280'+ movie.poster_path) :'https://image.freepik.com/free-vector/coming-soon-message-illuminated-with-light-projector_1284-3622.jpg' } alt={movie.title} />
      </span>

      <div className={styles.cardText}>
      <h3>{movie.title}</h3>
      <div className={styles.movieInfo}>
          <p> {movie.release_date}</p>
          <p> Average Vote: {movie.vote_average}</p>
      </div>
      <span>
        <Button onClick={() => props.onMovieDelete(movie.id)}>
          <TrashIcon />
        </Button>
      </span>
      <span>
      <SimpleRating
      id={movie} />
        {/* {ratings.map((item, index) => {
          return (
            <StarIcon
              className={[styles.star, // la hover se face steluta portocalie onMouseOver(doar pe hover)
                 item.active && styles.active].join(' ')} //linia asta face si celalalte stelute cu indexul mai mic ca si steluta pe care noi facem hover sa fie portocali
                                                        //join trebuie folosit cand vrem sa folosim doua tipuri de clase 
              onMouseOver={() => handleMouseOver(item)}
            />
          )
        })} */}
      </span>
      </div>
    </div>
  )
}

const SavedMovies = (props) => {
  return (
    <div >
      {props.savedMovies && props.savedMovies.length > 0 ? (
        <div className={styles.list}>
          {props.savedMovies.map((movie) => (
            <MovieItem
              movie={movie}
              onMovieDelete={props.onMovieDelete}
              key={movie.id}
              
            />
          ))}
          <span>
          
          </span>
        </div>
      ) : (
        <p className={styles.footer}>'No saved movies'</p>
      )}
    </div>
  )
}

export default SavedMovies
