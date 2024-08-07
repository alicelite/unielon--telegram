// import "./assets/style/var.less"
// import WelcomeScreen from "./pages/main/WelcomeScreen";
// function App() {
//   return (
//     <>
//     <WelcomeScreen />
//     </>
//   );
// }
// export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/main/WelcomeScreen";
import "./assets/style/var.less"
function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  );
}
export default App;