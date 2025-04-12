import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";

// Import main sections
import First from "./Pages/First/First";
import Second from "./Pages/Second/Second";
import Third from "./Pages/Third/Third";
import Fourth from "./Pages/Fourth/Fourth";
import Fifth from "./Pages/Fifth/Fifth";

// Import subsections
import FirS1 from "./Pages/First/FirS1";
import FirS2 from "./Pages/First/FirS2";
import FirS3 from "./Pages/First/FirS3";
import FirS4 from "./Pages/First/FirS4";
import FirS5 from "./Pages/First/FirS5";

/*import { Outlet } from "react-router-dom"; // Import Outlet
*/

import "./App.css"; // Import global styles

function App() {
  return (
    <div className="app-background">
      <div className="app-content">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />

            {/* First Section with Nested Routes */}
            <Route path="/first" element={<First />}>
              <Route path="firs1" element={<FirS1 />} />
              <Route path="firs2" element={<FirS2 />} />
              <Route path="firs3" element={<FirS3 />} />
              <Route path="firs4" element={<FirS4 />} />
              <Route path="firs5" element={<FirS5 />} />
            </Route>

            {/* Other Sections */}
            <Route path="/second" element={<Second />} />
            <Route path="/third" element={<Third />} />
            <Route path="/fourth" element={<Fourth />} />
            <Route path="/fifth" element={<Fifth />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
