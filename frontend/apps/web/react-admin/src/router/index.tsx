
import { createBrowserRouter } from "react-router";
import LayoutPage from "@/layout/index.tsx";
import LoginPage from "@/pages/login/index.tsx";
import DashboardPage from "@/pages/dashboard/index.tsx";
import StatisticsPage from "@/pages/statistics/index.tsx";
import OrderPage from "@/pages/order/index.tsx";
import SetmealPage from "@/pages/setmeal/index.tsx";
import DishPage from "@/pages/dish/index.tsx";
import CategoryPage from "@/pages/category/index.tsx";
import EmployeePage from "@/pages/employee/index.tsx";
const router = createBrowserRouter([
    {
        path: '',
        Component: LayoutPage,
        children: [
            {
                path: 'dashboard',
                Component: DashboardPage
            },
            {
                path: 'statistics',
                Component: StatisticsPage
            },
            {
                path: 'order',
                Component: OrderPage
            },
            {
                path: 'setmeal',
                Component: SetmealPage
            },
            {
                path: 'dish',
                Component: DishPage
            },
            {
                path: 'category',
                Component: CategoryPage
            },
            {
                path: 'employee',
                Component: EmployeePage
            }
        ]
    },
    {
        path: 'login',
        Component:LoginPage
    }
])

export default router