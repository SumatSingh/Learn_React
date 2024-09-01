import homeImg from '../assets/programmer.jpg';

const Home = () => {
  return (
    <div
      style={{ 
        height: '75vh', 
        width: '100vw', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        overflow: 'hidden',
      }}
    >
      <img
        src={homeImg}
        alt="HomeImg"
        style={{
          height: '100%',
          width: 'auto',  
          objectFit: 'cover',
          objectPosition: 'top', 
          backgroundSize: 'cover'
        }}
      />
    </div>
  );
};

export default Home;
