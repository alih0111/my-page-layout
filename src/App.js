import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/NotFoundPage";
import {useRoutes} from 'hookrouter';

const routes = {
  "/": () => <HomePage />,
  '/blog': () => <BlogPage />,
  "/post/:id": ({ id }) => <PostPage id={id} />,
};

export default function App() {
  const match = useRoutes(routes);
  return match || <NotFoundPage/>;
}

