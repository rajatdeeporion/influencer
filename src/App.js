import "./App.css";
/* src/index.css *
/* The following line can be included in your src/index.js or App.js file */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import Routes from "./Routes.tsx";
import Profile from "./pages/home/Profile.tsx";
function App() {
  return (
    <div className="App">

      <Profile/>
    </div>
  );
}

export default App;
