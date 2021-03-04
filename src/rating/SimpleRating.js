import React, {useState, useEffect } from 'react';
import { Rating } from '@material-ui/lab';

export default function SimpleRating(props) {

  const useStateWithLocalStorage =  (local) => {
    const [value, newValue] = useState(
      localStorage.getItem(local) || null);
   
    useEffect(() => {
      localStorage.setItem(local, value||null);
    }, [value,local]);
   
    return [value, newValue];
  };
const [value, setValue] = useStateWithLocalStorage(props.id);

// handleRateMovie = (movieId) => {
//   console.log('rated', movieId)
  // const index = this.state.movies.findIndex(movie => movie.id === movieId)
  
  // this.setState(
  //   {
  //     movies: this.state.movies.filter(item => item.id !== movieId),
  //   },
  //   () => {
  //     window.localStorage.setItem(
  //       'saved-movies',
  //       JSON.stringify(this.state.movies),
  //     )
  //   },
  // )
// }

  return (
    <div>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          
        />

    </div>
  );
}