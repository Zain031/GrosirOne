import { NavLink } from "react-router-dom";
import { HomeSVG } from "../../assets/svgs";

function SidebarMenu() {
    return (
        <>
            <li>
                <NavLink to="/" className="bg-red-600 ">
                    <HomeSVG />
                    List of countries
                </NavLink>
            </li>
            <li>
                <NavLink to="/Country-details" className="bg-red-600 ">
                    <HomeSVG />
                    Country details
                </NavLink>
            </li>{" "}
            <li>
                <NavLink to="/State-cooperation" className="bg-red-600">
                    <HomeSVG />
                    State Cooperation,
                </NavLink>
            </li>
        </>
    );
}

export default SidebarMenu;
