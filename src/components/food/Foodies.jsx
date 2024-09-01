import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Foodies = () => {
  const { category } = useParams(); 
  const navigate = useNavigate();
  const [fooddata, setFooddata] = useState([]);
  const [searchdata, setSearchdata] = useState("");
  const [loading, setLoading] = useState(true);
  


  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        let apiUrl = '';

        if (category) {
          apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`;
        } else {
          // Fetching mixed categories if no specific category is selected
          const categories = ["Indian", "Canadian", "American"];
          const promises = categories.map(cat =>
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cat}`)
              .then(response => response.json())
              .then(data => data.meals)
          );

          const results = await Promise.all(promises);
          apiUrl = results.flat(); // Flattening the array of results
        }

        if (!category) {
          setFooddata(apiUrl);
        } else {
          const response = await fetch(apiUrl);
          const result = await response.json();
          setFooddata(result.meals);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchdata}`
      );
      const response = await api.json();
      console.log("Response: ", response.meals);
      setFooddata(response.meals);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-dark">
        <div className="d-flex justify-content-evenly bg-dark py-4">
          <div className="mt-4">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={(e) => setSearchdata(e.target.value)}
                className="bg-dark border border-2 text-white p-2"
                placeholder="search items"
                style={{ width: "300px", height: "33px" }}
              />
            </form>
          </div>
          <div className="d-flex justify-content-center gap-4 mt-4">
            <button
              type="button"
              onClick={() => navigate("/foodies/indian")} // Navigate to Indian category
              className="btn btn-outline-primary"
            >
              Indian
            </button>
            <button
              type="button"
              onClick={() => navigate("/foodies/canadian")} // Navigate to Canadian category
              className="btn btn-outline-secondary"
            >
              Canadian
            </button>
            <button
              type="button"
              onClick={() => navigate("/foodies/american")} // Navigate to American category
              className="btn btn-outline-success"
            >
              American
            </button>
            <button
              type="button"
              onClick={() => navigate("/foodies/thai")} // Navigate to Thai category
              className="btn btn-outline-danger"
            >
              Thai
            </button>
            <button
              type="button"
              onClick={() => navigate("/foodies/british")} // Navigate to British category
              className="btn btn-outline-warning"
            >
              British
            </button>
            <button
              type="button"
              onClick={() => navigate("/foodies/russian")} // Navigate to Russian category
              className="btn btn-outline-info"
            >
              Russian
            </button>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row">
            {loading ? (
              <p>Loading...</p>
            ) : (
              fooddata &&
              fooddata.map((data) => (
                <div className="col-md-3 mb-4" key={data.idMeal}>
                  <div
                    className="card border border-2 bg-dark"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={data.strMealThumb}
                      className="card-img-top"
                      alt="poster_path"
                      style={{ width: "100%" }}
                    />
                    <div className="card-body text-white">
                      <h5 className="card-title">
                        StrMeal:{" "}
                        <span className="text-warning">{data.strMeal}</span>
                      </h5>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Foodies;
