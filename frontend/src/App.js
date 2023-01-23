import Header from "./components/Ui/Header";
import NotesListPage from "./components/pages/NotesListPage";
import NotePage from "./components/pages/NotePage";
import ErrorPage from "./components/pages/ErrorPage";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<NotesListPage />} />
        {/* id will be destructured in NotePage using useParmas hook */}
        <Route path="/note/:id" element={<NotePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
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
