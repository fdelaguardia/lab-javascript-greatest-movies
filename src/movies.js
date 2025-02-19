// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const newArray = moviesArray.map(direc => direc.director);
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const numOfMovies = moviesArray.filter(
      (eachMovie) =>
        eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama")
    )
    return numOfMovies.length;
  }
  

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scores = moviesArray.map(sco => sco.score);
  const newScores = scores.filter(item => (typeof item === "number"));
  if(newScores.length === 0){return 0}
  const total = newScores.reduce((accumulator, current) => accumulator + current) / moviesArray.length;
  const newTotal = total.toFixed(2);
  return Number(newTotal);
      
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(drama => drama.genre.includes("Drama"));
  return scoresAverage(dramaMovies);
}





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = [...moviesArray];
  newArray.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
      return 0;
    }
  });
                                   return newArray;
}
/*
function orderByYear(moviesArray) {
  const yearlySorted = moviesArray.sort((a, b) => a.year - b.year);
  
  return yearlySorted;
}
console.log(orderByYear(movies).reverse())
*/



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return [...moviesArray].sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }
          else if (a.title < b.title) {
            return -1
          }
        else {
          return 0
        }
      })
      .map((moviesArray) => moviesArray.title).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
