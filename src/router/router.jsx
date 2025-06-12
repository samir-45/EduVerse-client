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
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddArticle from "../Pages/AddArticle/AddArticle";

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
          loader: () => fetch('http://localhost:3000/articles'),
          Component: Articles
        },
        {
          path: 'articles/:id',
          loader: ({params}) => fetch(`http://localhost:3000/articles/${params.id}`),
          element: <LoadingRoute><ArticleDetails></ArticleDetails></LoadingRoute>
        },
        {
          path: '/category/:categoryName',
          loader: ({params}) => fetch(`http://localhost:3000/articles/category/${params.categoryName}`),
          Component: CategoryPage
        },
        {
          path: '/addArticle',
          Component: AddArticle
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
  }
]);

export default router;