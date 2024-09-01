import { useEffect } from "react";
import { useState } from "react";

const UseEffects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApiData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setData(result);
        console.error("fetching data:", result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchApiData();
  }, []);

  return (
    <>
      <div className="container py-4">
        <div className="row">
          {loading ? (
            <p>Loading...</p>
          ) : (
            data.map((data) => (
              <div className="col-md-3  mb-4" key={data.id}>
                <div
                  className="card border border-2 bg-dark"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={data.image}
                    className="card-img-top"
                    alt="poster_path"
                    style={{ width: "100%", overflow: "hidden" }}
                  />

                  <div className="card-body text-white">
                    <h5 className="card-title">
                      Title: <span className="text-warning">{data.title}</span>
                    </h5>
                    <h6 className="card-subtitle mb-2 ">
                      Release Date:{" "}
                      <span className="text-warning">{data.price}</span>
                    </h6>
                    <p className="card-text">
                      Category:{" "}
                      <span className="text-warning">{data.category}</span>
                    </p>
                    <p className="card-text">
                      Rating:{" "}
                      <span className="text-warning"> {data.rating.rate}</span>
                      <span className="text-warning">
                        {" "}
                        ({data.rating.count})
                      </span>
                    </p>
                    <p className="card-text">
                      Description:
                      <span className="text-warning"> {data.description}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default UseEffects;

