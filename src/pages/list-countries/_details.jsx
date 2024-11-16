import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCountryById } from "../../redux/feature/CountrySlice";
import Container from "../../components/errors/container";
import Header from "../../layouts/partials/header";
import Swal from "sweetalert2";

import {
    Award,
    CircleArrowRight,
    Earth,
    Languages,
    MapPinned,
    UsersRound,
} from "lucide-react";
import Loading from "../../components/loading";
const DetailCountry = () => {
    const detail = useSelector((state) => state.country.countryByName);
    console.log("🚀 ~ DetailCountry ~ detail:", detail);
    const { name } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountryById(name));
    }, [dispatch, name]);

    if (!detail) {
        return <Loading />;
    }

    const Collaboration = (name) => {
        const probability = Math.random();
        let CountryNames = JSON.parse(localStorage.getItem("names")) || [];
        if (CountryNames.includes(name)) {
            Swal.fire({
                
                text: `You have already established cooperation with ${name}.`,
                icon: "info",
            });
            return;
        }

        if (probability > 0.5) {
            CountryNames.push(name);
            localStorage.setItem("names", JSON.stringify(CountryNames));
            Swal.fire({
                title: "Great job!",
                text: `Successfully established cooperation with ${name}.`,
                icon: "success",
            });
        } else {
            Swal.fire({
                title: "Oops",
                text: `Failed to establish cooperation with ${name}.`,
                icon: "warning",
            });
        }
    };

    if (Array.isArray(detail) && detail.length > 0) {
        return (
            <Container>
                <div className="w-full m-auto ">
                    <div className="card rounded-md shadow-md outline outline-1 outline-slate-200 p-5 ">
                        <div className="flex">
                            <Header title={name} />
                            <p className="text-2xl font-light  mx-2 mt-1">
                                ({detail[0]?.name?.official})
                            </p>
                            {detail[0]?.flags?.png && (
                                <img
                                    src={detail[0]?.flags?.png}
                                    alt={detail[0]?.name?.common}
                                    className="w-20 h-12 ml-auto"
                                />
                            )}
                        </div>

                        {detail.map((country) => (
                            <div key={country?.cca3} className="w-full">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
                                    <div className="shadow-md outline outline-1 outline-slate-200 p-4 rounded-md">
                                        <Earth
                                            size={48}
                                            color="#a5a5a1"
                                            strokeWidth={1}
                                            absoluteStrokeWidth
                                            className="m-auto"
                                        />
                                        <p className="text-center">region</p>
                                        <hr />
                                        <p className="text-center font-extrabold text-2xl">
                                            {country?.region} <br />{" "}
                                            <span className="font-light text-sm">
                                                ( {country?.subregion})
                                            </span>
                                        </p>
                                    </div>
                                    <div className="shadow-md outline outline-1 outline-slate-200 p-4 rounded-md">
                                        <UsersRound
                                            size={48}
                                            color="#a5a5a1"
                                            strokeWidth={1}
                                            absoluteStrokeWidth
                                            className="m-auto"
                                        />
                                        <p className="text-center">
                                            Population
                                        </p>
                                        <hr />
                                        <p className="text-center font-extrabold text-2xl">
                                            {country?.population?.toLocaleString(
                                                "id-ID"
                                            )}
                                        </p>
                                    </div>

                                    <div className="shadow-md outline outline-1 outline-slate-200 p-4 rounded-md">
                                        <Award
                                            size={48}
                                            color="#a5a5a1"
                                            strokeWidth={1}
                                            absoluteStrokeWidth
                                            className="m-auto"
                                        />
                                        <p className="text-center">
                                            independent
                                        </p>
                                        <hr />
                                        <p className="text-center font-extrabold text-2xl">
                                            {country?.independent === true
                                                ? "Yes"
                                                : "No"}
                                        </p>
                                    </div>

                                    <div className="shadow-md outline outline-1 outline-slate-200 p-4 rounded-md">
                                        <MapPinned
                                            size={48}
                                            color="#a5a5a1"
                                            strokeWidth={1}
                                            absoluteStrokeWidth
                                            className="m-auto"
                                        />
                                        <p className="text-center">
                                            Currencies
                                        </p>
                                        <hr />
                                        <p className="text-center font-extrabold text-2xl">
                                            Mata uang
                                        </p>
                                    </div>
                                    <div className="shadow-md outline outline-1 outline-slate-200 p-4 rounded-md">
                                        <Languages
                                            size={48}
                                            color="#a5a5a1"
                                            strokeWidth={1}
                                            absoluteStrokeWidth
                                            className="m-auto"
                                        />
                                        <p className="text-center">Languages</p>
                                        <hr />
                                        <p className="text-center font-extrabold text-2xl">
                                            {Object.values(country?.languages)}
                                        </p>
                                    </div>

                                    <div className="shadow-md outline outline-1 outline-slate-200 p-4 rounded-md">
                                        <p className="text-center">
                                            <MapPinned
                                                size={48}
                                                color="#a5a5a1"
                                                strokeWidth={1}
                                                absoluteStrokeWidth
                                                className="m-auto"
                                            />
                                            GoogleMaps
                                        </p>
                                        <hr />
                                        <p className="text-center  text-2xl bg-blue-100 m-1 hover:bg-blue-200 ">
                                            <a
                                                href={`${country?.maps?.googleMaps}`}
                                                className="flex items-center justify-center"
                                                target="_blank"
                                            >
                                                <p className="text-md mx-2">
                                                    {" "}
                                                    See Maps
                                                </p>
                                                <CircleArrowRight
                                                    size={30}
                                                    color="#a5a5a1"
                                                    strokeWidth={1}
                                                    absoluteStrokeWidth
                                                />
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() =>
                                        Collaboration(country?.name?.common)
                                    }
                                    className="p-4 rounded-md items-center mt-4 bg-primary text-white hovar:bg-primary-focus w-full hover:bg-primary-content hover:text-slate-950 "
                                >
                                    <p className="text-center">
                                        Establish cooperation
                                    </p>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        );
    } else {
        return <Loading />;
    }
};

export default DetailCountry;
