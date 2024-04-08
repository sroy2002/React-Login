import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Profile from "./Pages/Profile";
import Questions from "./Pages/Questions";
import FinalPage from "./Pages/FinalPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/userProfile" element={<FinalPage />} />
      </Routes>
    </>
  );
}

export default App;

// import Signup from "./Components/Signup";
// function App() {
//   return (
//     <div >
//       <Signup />
//     </div>
//   );
// }

// export default App;
