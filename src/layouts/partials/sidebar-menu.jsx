import { NavLink } from "react-router-dom";
import { HomeSVG } from "../../assets/svgs";
import DetailsSvg from "../../assets/svgs/details-svg";
import StateSvg from "../../assets/svgs/state-svg";

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
                <NavLink to="/State-cooperation" className="bg-red-600">
                    <StateSvg />
                    State Cooperation,
                </NavLink>
            </li>
        </>
    );
}

export default SidebarMenu;
