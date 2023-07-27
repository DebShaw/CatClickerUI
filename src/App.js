import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllCats } from "./actions/index";
import Home from "./components/Home";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCats());
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
