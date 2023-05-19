import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import User from "./components/User";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route exact path='/user/:username' element={<User />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
