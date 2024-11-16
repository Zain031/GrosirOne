import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchCountryById } from "../../redux/feature/CountrySlice";
import Container from "../../components/errors/container";
import Header from "../../layouts/partials/header";
import Swal from "sweetalert2";
import {
    Award,
    Banknote,
    CircleArrowRight,
    Earth,
    Languages,
    MapPinned,
    UsersRound,
} from "lucide-react";
import Loading from "../../components/loading";
import { increment } from "../../redux/feature/CounterSlice";

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

    const Collaboration = (countryName) => {
        let CountryNames = JSON.parse(localStorage.getItem("names")) || [];
        if (CountryNames.includes(countryName)) {
            Swal.fire({
                text: `You have already established cooperation with ${countryName}.`,
                icon: "info",
            });
            return;
        }

        Swal.fire({
            title: "Establishing cooperation...",
            html: '<progress class="progress w-56"></progress>',
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
            },
            willClose: () => {
                const probability = Math.random();
                if (probability > 0.5) {
                    const updatedNames = [countryName, ...CountryNames];
                    localStorage.setItem("names", JSON.stringify(updatedNames));
                    dispatch(increment());

                    Swal.fire({
                        title: "Great job!",
                        text: `Successfully established cooperation with ${countryName}.`,
                        icon: "success",
                    });
                } else {
                    Swal.fire({
                        title: "Oops",
                        text: `Failed to establish cooperation with ${countryName}.`,
                        icon: "warning",
                    });
                }
            },
        });
    };

    if (Array.isArray(detail) && detail.length > 0) {
        return (
            <Container>
                <div className="w-full m-auto ">
                    <div className="card rounded-md shadow-md outline outline-1 outline-slate-200 p-5  ">
                        <div className="md:flex sm:flex-row flex-col sm:justify-center sm:text-center">
                            <p>
                                <Header title={name} />
                            </p>
                            <p className="text-2xl font-light  mx-2 mt-1">
                                ({detail[0]?.name?.official})
                            </p>
                            {detail[0]?.flags?.png && (
                                <img
                                    src={detail[0]?.flags?.png}
                                    alt={detail[0]?.name?.common}
                                    className="w-20 h-12 ml-auto "
                                />
                            )}
                        </div>

                        {detail.map((country) => (
                            <div key={country?.cca3} className="w-full">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4">
                                    <div className="shadow-md outline outline-1 outline-slate-200 p-4 rounded-md">
                                        <Earth
                                            size={48}
                                            color="#262933"
                                            strokeWidth={1}
                                            absoluteStrokeWidth
                                            className="m-auto"
                                        />
                                        <p className="text-center mb-2">Region</p>
                                        <hr />
                                        <p className="text-center font-extrabold text-2xl mt-3">
                                            {country?.region} <br />{" "}
                                            <span className="font-light text-sm">
                                                ( {country?.subregion})
                                            </span>
                                        </p>
                                    </div>

                                    <div className="shadow-md outline outline-1 outline-slate-200 p-4 rounded-md">
                                        <UsersRound
                                            size={48}
                                            color="#262933"
                                            strokeWidth={1}
                                            absoluteStrokeWidth
                                            className="m-auto"
                                        />
                                        <p className="text-center mb-2">
                                            Population
                                        </p>
                                        <hr />
                                        <p className="text-center font-extrabold text-2xl mt-3">
                                            {country?.population?.toLocaleString(
                                                "id-ID"
                                            )}
                                        </p>
                                    </div>

                                    <div className="shadow-md outline outline-1 outline-slate-200 p-4 rounded-md">
                                        <Award
                                            size={48}
                                            color="#262933"
                                            strokeWidth={1}
                                            absoluteStrokeWidth
                                            className="m-auto"
                                        />
                                        <p className="text-center mb-2">
                                            Independent
                                        </p>
                                        <hr />
                                        <p className="text-center font-extrabold text-2xl mt-3">
                                            {country?.independent === true
                                                ? "Yes"
                                                : "No"}
                                        </p>
                                    </div>

                                    <div className="shadow-md outline outline-1 outline-slate-200 p-4 rounded-md ">
                                        <Banknote
                                            size={48}
                                            color="#262933"
                                            strokeWidth={1}
                                            absoluteStrokeWidth
                                            className="m-auto"
                                        />
                                        <p className="text-center mb-2">
                                            Currencies
                                        </p>
                                        <hr />
                                        <p className="text-center font-extrabold text-2xl mt-3">
                                            Mata Uang
                                        </p>
                                    </div>

                                    <div className="shadow-md outline outline-1 outline-slate-200 p-4 rounded-md ">
                                        <Languages
                                            size={48}
                                            color="#262933"
                                            strokeWidth={1}
                                            absoluteStrokeWidth
                                            className="m-auto"
                                        />
                                        <p className="text-center mb-2">Languages</p>
                                        <hr />
                                        <p className="text-center font-extrabold text-2xl mt-3">
                                            {Object.values(country?.languages)}
                                        </p>
                                    </div>

                                    <div className="shadow-md outline outline-1 outline-slate-200 p-4 rounded-md ">
                                        <p className="text-center">
                                            <MapPinned
                                                size={48}
                                                color="#262933"
                                                strokeWidth={1}
                                                absoluteStrokeWidth
                                                className="m-auto mb-2"
                                            />
                                        </p>
                                        <hr />

                                        <p className="text-center text-2xl  ">
                                            <a
                                                href={`${country?.maps?.googleMaps}`}
                                                className="flex items-center justify-center py-3 mt-1 rounded-md bg-base-200 hover:bg-base-300 "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <p className="text-sm mx-2">
                                                    Go to Maps
                                                </p>
                                                <CircleArrowRight
                                                    size={30}
                                                    color="#262933"
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
                                    className="p-4 rounded-md items-center mt-4 bg-primary text-white hover:bg-primary-focus w-full hover:bg-primary-content hover:text-slate-950 "
                                >
                                    <p className="text-center">
                                        Establish Cooperation
                                    </p>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-5 flex justify-end  text-blue-600 ">
                    <Link to="/">
                        <button className="hover:underline">
                            See All Countries
                        </button>
                    </Link>
                </div>
            </Container>
        );
    } else {
        return <Loading />;
    }
};

export default DetailCountry;
