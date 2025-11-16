import React from "react"

const Movie = ({ Title, Year, imdbID, Type, Poster }) => {
  return (
    <div className="card movie" id={imdbID}>
      <div className="card-image waves-effect waves-block waves-light">
        {Poster === "N/A" ? (
          <img
            className="activator"
            src={`https://placehold.co/300x400?text=${Title}`}
            alt="poster-no-image"
          />
        ) : (
          <img className="activator" src={Poster} alt="poster-image" />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {Title}
        </span>
        <p>
          {Year}
          <span className="right">{Type}</span>
        </p>
      </div>
    </div>
  )
}

export default Movie
