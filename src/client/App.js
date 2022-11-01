import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
​
function App() {
  return (
    <Routes>
      {/*  your routes here like:
      <Route exact path="/meals" element={<TestComponent />} /> */}
    </Routes>
  );
}
​
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
