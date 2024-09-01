import { useState } from "react";
import { movies } from "./data";

const DisplayMovies = () => {
  const [movielist, setMovielist] = useState(movies);
  

  const filterByCategory = (category) => {
    if (category === "All") {
      setMovielist(movies);
    } else {
      setMovielist(movies.filter((movie) => movie.category === category));
    }
  };
  return (
    <>
      <div className="bg-dark">
        <div className="bg-dark">
          <div className="d-flex justify-content-center gap-4 py-4">
            <button
              type="button"
              onClick={() => filterByCategory("All")}
              className="btn btn-outline-primary"
            >
              All
            </button>
            <button
              type="button"
              onClick={() => filterByCategory("Animation")}
              className="btn btn-outline-secondary"
            >
              Animation
            </button>
            <button
              type="button"
              onClick={() => filterByCategory("Drama")}
              className="btn btn-outline-success"
            >
              Drama
            </button>
            <button
              type="button"
              onClick={() => filterByCategory("Horror")}
              className="btn btn-outline-danger"
            >
              Horror
            </button>
            <button
              type="button"
              onClick={() => filterByCategory("Action")}
              className="btn btn-outline-warning"
            >
              Action
            </button>
            <button
              type="button"
              onClick={() => filterByCategory("Thriller")}
              className="btn btn-outline-info"
            >
              Thriller
            </button>
            <button
              type="button"
              onClick={() => filterByCategory("Sci-Fi")}
              className="btn btn-outline-light"
            >
              Sci-Fi
            </button>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row">
            {
              movielist.map((data) => (
                <div className="col-md-3  mb-4" key={data.id}>
                  <div
                    className="card border border-2 bg-dark"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={data.poster_path}
                      className="card-img-top"
                      alt="poster_path"
                      style={{ width: "100%" }}
                    />
                    <div className="card-body text-white">
                      <h5 className="card-title">
                        Title: <span className="text-warning">{data.title}</span>
                      </h5>
                      <h6 className="card-subtitle mb-2 ">
                        Release Date:{" "}
                        <span className="text-warning">{data.release_date}</span>
                      </h6>
                      <p className="card-text">
                        Category:{" "}
                        <span className="text-warning">{data.category}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayMovies;