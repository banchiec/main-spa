import { Navigate } from "react-router-dom";
import Layout from "../../components/layout";

export const mainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    { path: '*', element: <Navigate to='/404' /> },
    //{ path: '/', element: <Home /> },
    //{ path: '/product-type', element: <ProductTypeCreateView /> },
    //{ path: '/products', element: <ProductCreateView /> },
    //{ path: '/categories', element: <CategoryCreateView /> },
    //{ path: '/about-me', element: <AboutMePage /> },
    //{ path: '/portfolio', element: <PortfolioPage /> },
    //{ path: '/shop', element: <ShopPage /> },
    // {path: '/shop/stuff-you-can-buy', element: <AboutMePage/>},
    //{ path: '/shop/:category', element: <CategoryShopView />routes },
    //{ path: '/shop/commissions/logo-lettering', element: <CommissionsOrderPage /> },
    //{ path: '/shop/commissions/cover', element: <CommissionsOrderPage /> },
    //{ path: '/shop/commissions/cartoon-illustration', element: <CommissionsOrderPage /> },
    // {path: '404', element: <NotFoundPage/>},
    // {path: 'account', element: <Navigate to='/account/list' />},
  ],
}