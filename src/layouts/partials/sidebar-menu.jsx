import { useSelector } from "react-redux";
import { HomeSVG } from "../../assets/svgs";
import StateSvg from "../../assets/svgs/state-svg";
import { NavLink } from "react-router-dom";
import { BellPlus } from "lucide-react";

function SidebarMenu() {
    const count = useSelector((state) => state.counter.count); // Mengambil state counter dari Redux
    console.log("🚀 ~ SidebarMenu ~ count:", count);

    return (
        <>
            <li>
                <NavLink to="/">
                    <HomeSVG />
                    List of Countries
                </NavLink>
            </li>

            <li>
                <NavLink to="/State-cooperation">
                    <StateSvg />
                    State Cooperation
                    {count > 0 && (
                        <p className="flex text-sm items-center space-x-1 text-slate-100">
                            <BellPlus />
                            <span>({count})</span>
                        </p>
                    )}
                </NavLink>
            </li>
        </>
    );
}

export default SidebarMenu;
