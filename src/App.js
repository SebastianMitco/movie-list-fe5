import React from 'react'
import './App.css'

import Header from './shared/Header'
import SearchBox from './search/SearchBox'
import SavedMovies from './savedmovies/SavedMovies'

class App extends React.Component {
  // state = {
  //   movies: [],
  // } incepe aplicatia la zero fara nici un film 

  constructor(props) {
    super(props)
    const movies = JSON.parse(window.localStorage.getItem('saved-movies'))
    if (movies && Array.isArray(movies)) {
      this.state = {
        movies,  // setam movies la movies => movies: movies, dar daca key-ul se numeste la fel cu parametrul atunci putem folosi sintaxa noua
      }
      //setam statul lui movies la lista cu movies daca exista "movie" si && daca Array este un Array.
    } else {
      this.state = {
        movies: [], //daca nu, il setam la un Array gol. 
      }
    }
  }

  handleAddMovie = (movie) => {
    const movies = this.state.movies
    this.setState(
      {
        movies: [...movies, movie]
      },
      () => {
        window.localStorage.setItem(
          'saved-movies',
          JSON.stringify(this.state.movies),
        )
      },
    )
  }

  handleDeleteMovie = (movieId) => {
    console.log('deleting ', movieId)
    const index = this.state.movies.findIndex(movie => movie.id === movieId)
    
    this.setState(
      {
        movies: this.state.movies.filter(item => item.id !== movieId),
      },
      () => {
        window.localStorage.setItem(
          'saved-movies',
          JSON.stringify(this.state.movies),
        )
      },
    )
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox onMovieAdd={this.handleAddMovie}/>
        <div className="favorit-name">
          <h1>Your Movies</h1>
        <SavedMovies
          savedMovies={this.state.movies}
          onMovieDelete={this.handleDeleteMovie}
        />
        </div>
      </div>
    )
  }
}

export default App
