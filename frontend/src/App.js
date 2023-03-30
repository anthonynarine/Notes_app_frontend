import Header from "./components/Ui/Header";
import NotesListPage from "./components/pages/NotesListPage";
import NotePage from "./components/pages/NotePage";
import ErrorPage from "./components/pages/ErrorPage";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    // to toggle light and dark container (for light) container dark for dark
    <div className="container dark ">
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          {/* id will be destructured in NotePage using useParmas hook */}
          <Route path="/note/:id" element={<NotePage />} />
          {/* localhost:3000/note/2 to test make sure backend server is running will route to the note with id 2*/}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <StyledEngineProvider injectFirst >
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/add-property" element={<AddProperty />} />
//         <Route path="/listings" element={<Listings />} />
//         <Route path="/agencies" element={<Agencies  />} />
//       </Routes>
//     </StyledEngineProvider>
//   );
// }




