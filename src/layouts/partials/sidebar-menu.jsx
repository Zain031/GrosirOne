import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SidebarMenu() {
    const count = useSelector((state) => state.counter.count); // Mengambil state counter dari Redux
    console.log("🚀 ~ SidebarMenu ~ count:", count);

    return (
        <>
            <li>
                <NavLink to="/">Tamplate</NavLink>
            </li>

            <li>
                <NavLink to="/category">Category</NavLink>
            </li>
        </>
    );
}

export default SidebarMenu;
