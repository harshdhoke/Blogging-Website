import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import Blog from "./Pages/Blog";
import SinglePost from "./Pages/SinglePost";
import Error from "./Pages/Error";
import SingleAuthor from "./Pages/SingleAuthor";
import AuthorsPage from "./Pages/AuthorsPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog/:slug" element={<SinglePost />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/author/:slug" element={<SingleAuthor />} />
        <Route path="/author" element={<AuthorsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
