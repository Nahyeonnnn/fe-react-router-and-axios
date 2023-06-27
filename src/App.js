import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import NotFoundPage from "./pages/NotFoundPage";
import ArticlesPage from "./pages/ArticlesPage";
// import WelcomePage from "./pages/WelcomePage";

// 아래는 React Router 예시입니다.
// 예시 Route 3가지는 지우고 시작해주세요!

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<div>Home Page</div>} />
        <Route path="/hello" element={<>Hello, World!</>} />
        <Route path="/welcome/:name" element={<WelcomePage />} /> */}
        <Route path="/:ownerId" element={<HomePage/>}/>
        <Route path="/:ownerId/create" element={<CreatePage/>}/>
        <Route path="/articles/:articleId/edit" element={<EditPage/>}/>
        <Route path="/articles/:articleId" element={<ArticlesPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
