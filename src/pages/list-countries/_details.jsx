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
    Handshake,
    Landmark,
    Languages,
    MapPinned,
    UsersRound,
} from "lucide-react";
import Loading from "../../components/loading";
import { increment } from "../../redux/feature/CounterSlice";

const DetailCountry = () => {
    const detail = useSelector((state) => state.country.countryByName);

    const { name } = useParams();
    const dispatch = useDispatch();
    const data = [];
    for (const currencyCode in detail[0]?.currencies) {
        const currency = detail[0].currencies[currencyCode];
        data.push(currency);
    }

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
                    <div className="card rounded-md shadow-md outline outline-1 outline-slate-400 p-5  ">
                        <div className="flex justify-end">
                            <button
                                onClick={() => Collaboration(name)}
                                className="p-3  flex gap-3 rounded-md text-center w-max items-center mt-2 bg-primary text-white hover:bg-primary-focus hover:bg-primary-content hover:text-slate-950 "
                            >
                                <Handshake />
                                <p className="text-center">
                                    Establish Cooperation
                                </p>
                            </button>
                        </div>
                        <div className="">
                            <p className="text-center">
                                <Header title={name} />
                            </p>
                            <p className="text-2xl font-light mt-1 text-center">
                                ({detail[0]?.name?.official})
                            </p>
                        </div>

                        {detail.map((country) => (
                            <div key={country?.cca3} className="w-full">
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-2 pt-4 ">
                                    <img
                                        className="m-auto outline outline-1 outline-slate-400 rounded-md h-40"
                                        src={country?.flags?.png}
                                        alt=" "
                                    />
                                    <p className="text-center text-sm ">
                                        {country?.flags?.alt}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pt-4">
                                    <div className="shadow-md outline outline-1 outline-slate-400 p-4 rounded-md hover:shadow-xl ">
                                        <p className="text-center mb-2 font-bold">
                                            Coat Of Arm
                                        </p>
                                        <img
                                            src={country?.coatOfArms?.svg}
                                            alt="Coat of Arms"
                                            className="m-auto w-32 h-32"
                                        />
                                    </div>
                                    <div className="shadow-md outline outline-1 outline-slate-400 p-4 rounded-md hover:shadow-xl">
                                        <Earth
                                            size={48}
                                            color="#262933"
                                            strokeWidth={1}
                                            absoluteStrokeWidth
                                            className="m-auto"
                                        />
                                        <p className="text-center mb-2">
                                            Region
                                        </p>
                                        <hr />
                                        <p className="text-center font-extrabold text-2xl mt-3 ">
                                            {country?.region} <br />{" "}
                                            <span className="font-light text-sm">
                                                ( {country?.subregion})
                                            </span>
                                        </p>
                                    </div>

                                    <div className="shadow-md outline outline-1 outline-slate-400 p-4 rounded-md hover:shadow-xl ">
                                        <Landmark
                                            size={48}
                                            color="#262933"
                                            strokeWidth={1}
                                            absoluteStrokeWidth
                                            className="m-auto"
                                        />

                                        <p className="text-center mb-2">
                                            Capital
                                        </p>
                                        <hr />
                                        <p className="text-center font-extrabold text-2xl mt-3 ">
                                            {Object.values(country?.capital[0])}
                                        </p>
                                    </div>
                                    <div className="shadow-md outline outline-1 outline-slate-400 p-4 rounded-md hover:shadow-xl">
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

                                    <div className="shadow-md outline outline-1 outline-slate-400 p-4 rounded-md hover:shadow-xl">
                                        <Banknote
                                            size={48}
                                            color="#262933"
                                            strokeWidth={1}
                                            absoluteStrokeWidth
                                            className="m-auto"
                                        />
                                        <p className="text-center mb-2">
                                            Currency
                                        </p>
                                        <hr />
                                        <p className="text-center font-extrabold text-2xl mt-3">
                                            {data[0]?.name}
                                        </p>
                                    </div>

                                    <div className="shadow-md outline outline-1 outline-slate-400 p-4 rounded-md hover:shadow-xl">
                                        <Languages
                                            size={48}
                                            color="#262933"
                                            strokeWidth={1}
                                            absoluteStrokeWidth
                                            className="m-auto"
                                        />
                                        <p className="text-center mb-2">
                                            Languages
                                        </p>
                                        <hr />
                                        <p className="text-center font-extrabold text-2xl mt-3">
                                            {Object.values(
                                                country?.languages
                                            )?.[0] || "N/A"}
                                        </p>
                                    </div>
                                    <div className="shadow-md outline outline-1 outline-slate-400 p-4 rounded-md hover:shadow-xl">
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

                                    <div className="shadow-md outline outline-1 outline-slate-400 p-4 rounded-md hover:shadow-xl">
                                        <p className="text-center">
                                            <MapPinned
                                                size={48}
                                                color="#262933"
                                                strokeWidth={1}
                                                absoluteStrokeWidth
                                                className="m-auto "
                                            />
                                        </p>
                                        <p className="text-center mb-2">
                                            Location
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
