import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/register/Register";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../Pages/SignIn/SignIn";
import Articles from "../Pages/Articles/Articles";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import ArticleDetails from "../Pages/ArticleDetails/ArticleDetails";
import LoadingRoute from "../routes/LoadingRoute";
import PrivetRoute from "../routes/PrivetRoute";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddArticle from "../Pages/AddArticle/AddArticle";
import MyArticles from "../Pages/MyArticles/MyArticles";
import UpdateArticle from "../Pages/UpdateArticle/UpdateArticle";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Events from "../Pages/Events/Events";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: 'articles',
          loader: () => fetch('https://eduverse-server.vercel.app/articles'),
          Component: Articles
        },
        {
          path: 'articles/:id',
          loader: ({params}) => fetch(`https://eduverse-server.vercel.app/articles/${params.id}`),
          element: <LoadingRoute><ArticleDetails></ArticleDetails></LoadingRoute>
        },
        {
          path: '/category/:categoryName',
          loader: ({params}) => fetch(`https://eduverse-server.vercel.app/articles/category/${params.categoryName}`),
          Component: CategoryPage
        },
        {
          path: '/addArticle',
          element: <PrivetRoute><AddArticle></AddArticle></PrivetRoute>
        },
        {
          path: '/myArticles',
          element: <PrivetRoute><MyArticles></MyArticles></PrivetRoute>
        },
        {
          path: '/updateArticle/:id',
          loader: ({params}) => fetch(`https://eduverse-server.vercel.app/articles/${params.id}`),
          element: <PrivetRoute><UpdateArticle></UpdateArticle></PrivetRoute>
        },
        {
          path: '/events',
          element: <PrivetRoute><Events></Events></PrivetRoute>
        },
        {
          path: '/aboutUs',
          Component: AboutUs
        }

    ]
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children: [
        {
          index: true,
          path: '/auth/register',
          Component: Register
        },
        {
          path: '/auth/signIn',
          Component: SignIn
        },
    ]
  },
  {
    path: '/*',
    Component: ErrorPage
  }
]);

export default router;