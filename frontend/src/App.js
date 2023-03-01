import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages and componenets
import Home from './pages/Home'
import Navbar from './componenets/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path={["/", "/home", "/index", "/index.html", "index.js"]}
              element={<Home />}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
