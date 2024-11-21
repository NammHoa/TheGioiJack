import AdminPage from "../pages/AminPage/AdminPage";
import BaoHanhPage from "../pages/baohanh/baohanh";
import ConTactPage from "../pages/ConTactPage/ConTactPage";
import DetailsOrderPage from "../pages/DetailsOrderPage/DetailsOrderPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import GuaranteePage from "../pages/GuaranteePage/GuaranteePage";
import GuidePage from "../pages/GuidePage/GuidePage";
import HomePage from "../pages/HomePage/HomePage";
import LapTopSalePage from "../pages/LapTopSalePage/LapTopSalePage";
import MyOrderPage from "../pages/MyOrder/MyOrder";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import OrderSucess from "../pages/OrderSuccess/OrderSuccess";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import PcSalePage from "../pages/PcSalePage/PcSalePage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import SaleAllPage from "../pages/SaleAllPage/SaleAllPage";
import SecurityPage from "../pages/SecurityPage/SecurityPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TransportPage from "../pages/TransportPage/TransportPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/my-order',
        page: MyOrderPage,
        isShowHeader: true
    },
    {
        path: '/details-order/:id',
        page: DetailsOrderPage,
        isShowHeader: true
    },
    {
        path: '/payment',
        page: PaymentPage,
        isShowHeader: true
    },
    {
        path: '/orderSuccess',
        page: OrderSucess,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/product/:type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: false
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: false
    },
    {
        path: '/forgot-password',
        page: ForgotPasswordPage,
        isShowHeader: false
    },
    {
        path: '/product-details/:id',
        page: ProductDetailsPage,
        isShowHeader: true
    },
    {
        path: '/profile-user',
        page: ProfilePage,
        isShowHeader: true
    },
    {
        path: '/LaptopSale',
        page: LapTopSalePage,
        isShowHeader: true
    },
    {
        path: '/PcSale',
        page: PcSalePage,
        isShowHeader: true
    },
    {
        path: '/SaleAll',
        page: SaleAllPage,
        isShowHeader: true
    },
    {
        path: '/system/admin',
        page: AdminPage,
        isShowHeader: false,
        isPrivated: true
    },
    {
        path: '/guide',
        page: GuidePage,
        isShowHeader: true
    },
    {
        path: '/security',
        page: SecurityPage,
        isShowHeader: true
    },
    {
        path: '/guarantee',
        page: GuaranteePage,
        isShowHeader: true
    },
    {
        path: '/transport',
        page: TransportPage,
        isShowHeader: true
    },
    {
        path: '/contact',
        page: ConTactPage,
        isShowHeader: true
    },
    {
        path: '/baohanh',
        page: BaoHanhPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage
    }
]