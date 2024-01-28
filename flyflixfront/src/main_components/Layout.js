import { Outlet } from "react-router-dom";
import NavigationBar from './NavigationBar'

const Layout = () => {
    return (
        <main>
            <NavigationBar/>
            <Outlet/>
        </main>
    )
}

export default Layout;