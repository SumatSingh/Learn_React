import Footer from "./components/Footer"
import Header from "./components/Header"

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import DisplayMovies from "./components/movie/DisplayMovies"
import UseEffects from "./components/useEffect/UseEffects"
import HomeUseStates from "./components/useSate/HomeUseStates"
import WallPaper from "./components/wallpaper/WallPaper"
import PixabayState from "./context/PixabayState"
import SignInForm from "./components/SignIn"
import Foodies from "./components/food/Foodies"
import Home from "./components/Home"


const App = () => {
  return (
    <PixabayState>
    <Router>
      {/* <Header/> */}
      <HeaderWrapper />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<SignInForm/>} />
        <Route path="/movies" element={<DisplayMovies/>} />
        <Route path="/fashion" element={<UseEffects/>} />
        <Route path="/tech" element={<HomeUseStates/>} />
        <Route path="/wallpaper" element={<WallPaper/>} />
        <Route path="/foodies" element={<Foodies />} />
        <Route path="/foodies/:category" element={<Foodies />} />
      </Routes>
      <FooterWrapper/>
      {/* <Footer/> */}
    </Router>
    </PixabayState>
  )
}

const HeaderWrapper = () => {
  const location = useLocation();
  return location.pathname !== "/login" ? <Header/> : null;
}
const FooterWrapper = () => {
  const location = useLocation();
  return location.pathname !== "/login" && location.pathname !== "/" ? <Footer/> : null;
}
export default App

