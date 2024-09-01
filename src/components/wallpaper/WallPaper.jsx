import { useContext, useState } from "react";
import PixabayContext from "../../context/PixabayContext";

const WallPaper = () => {
  const { imageData, fetchDataByCategory, setQuery, loading } =
    useContext(PixabayContext);
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() === "") {
      setQuery("");
    } else {
      setQuery(searchInput);
    }
  };

  return (
    <>
      <div className="bg-dark justify-content-between">
        <div className="d-flex justify-content-center gap-4 py-4">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="bg-dark border border-2 text-white p-4"
              placeholder="search items"
              style={{ width: "300px", height: "33px" }}
            />
            <button type="submit" className="btn btn-success p-2 mb-1 mx-2">
              Search
            </button>
          </form>
          <button
            type="button"
            onClick={() => fetchDataByCategory("nature")}
            className="btn btn-outline-primary"
          >
            Nature
          </button>
          <button
            type="button"
            onClick={() => fetchDataByCategory("science")}
            className="btn btn-outline-secondary"
          >
            Science
          </button>
          <button
            type="button"
            onClick={() => fetchDataByCategory("sports")}
            className="btn btn-outline-success"
          >
            Sports
          </button>
          <button
            type="button"
            onClick={() => fetchDataByCategory("food")}
            className="btn btn-outline-danger"
          >
            Food
          </button>
          <button
            type="button"
            onClick={() => fetchDataByCategory("computer")}
            className="btn btn-outline-warning"
          >
            Computer
          </button>
          <button
            type="button"
            onClick={() => fetchDataByCategory("travel")}
            className="btn btn-outline-info"
          >
            Travel
          </button>
          <button
            type="button"
            onClick={() => fetchDataByCategory("religion")}
            className="btn btn-outline-light"
          >
            Religion
          </button>
          <button
            type="button"
            onClick={() => fetchDataByCategory("places")}
            className="btn btn-outline-primary"
          >
            Places
          </button>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {loading ? (
            <p>Loading...</p>
          ) : imageData && imageData.length > 0 ? (
            imageData.map((image) => (
              <div key={image.id} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <img
                    src={image.largeImageURL}
                    alt="pixabayimg"
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="card-text">Image ID: {image.id}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No images found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default WallPaper;

