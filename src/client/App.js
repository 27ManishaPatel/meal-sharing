import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";



function App() {
  return (
    <div>
      <Routes>
      <Route  exact path="/" element={<TestComponent /> } />
      </Routes>
     
    </div>

  );
}
export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import TestComponent from "./components/TestComponent/TestComponent";

// function App() {
//   return (
//     <Router>
//       <Route exact path="/">
//         <p>test</p>
//         <p>hello</p>
//       </Route>
//       <Route exact path="/lol">
//         <p>lol</p>
//       </Route>
//       <Route exact path="/test-component">
//         <TestComponent></TestComponent>
//       </Route>
//     </Router>
//   );
// }

// export default App;
