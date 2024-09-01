import { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";
import PropTypes from 'prop-types';

const PixabayState = (props) => {
  const [imageData, setImageData] = useState([]);
  const [query, setQuery] = useState('indian');
  const [loading, setLoading] = useState(true);

  const api_key = '38844565-2bea7b4bdbd3699ca1b98003d'; //Please use your own API_Key.
  useEffect(() => {
    const fetchPixaApiFunction = async () => {
      setLoading(true); 
      try {
        const pixaApi = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`);
        const data = await pixaApi.json();
        console.log("API Response:", data);
        setImageData(data.hits || []);
        console.log("Image Data:", data.hits);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPixaApiFunction();
  }, [query]);


  const fetchDataByCategory = async(cat) => {
    setLoading(true); 
    try {
      const catApi = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`);
      const resData = await catApi.json();
      console.log("API Response:", resData);
      setImageData(resData.hits);
      console.log("Image Data:", resData.hits);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false); 
    }
  }



  
  
  return (
    <PixabayContext.Provider value={{ imageData, fetchDataByCategory, setQuery, loading }}>
      {props.children}
    </PixabayContext.Provider>
  );
};

PixabayState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PixabayState;
