import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/container";
import Headers from "../../layouts/partials/header";
import { useEffect } from "react";
import { fetchCountries } from "../../redux/feature/CountrySlice";
import Loading from "../../components/loading";
import { Link } from "react-router-dom";

const ListCountries = () => {
    const { countries, loading } = useSelector((state) => state.country);
    const filter = countries.filter(
        (item, index) => index !== 82 && index !== 28
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <Container>
                <Headers title="List Countries" />
                <div className="overflow-x-auto shadow-xl rounded-md outline outline-1 outline-slate-200 px-4 mt-10 p-4">
                    <table className="table ">
                        <thead>
                            <tr>
                                <th></th>
                                <th className="font-bold text-xl text-base-700 ">
                                    Countries
                                </th>
                                <th className="font-bold text-xl text-base-700">
                                    Flags
                                </th>
                                <th className="font-bold text-xl text-base-700">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filter && filter.length > 0 ? (
                                filter.map((item, index) => (
                                    <>
                                        <tr
                                            className="hover:bg-gray-50"
                                            key={item.name.common}
                                        >
                                            <th>{index + 1}</th>
                                            <td>{item.name.common}</td>

                                            <td>
                                                <img
                                                    src={item.flags.png}
                                                    alt=""
                                                    className="w-20"
                                                />
                                            </td>
                                            <td>
                                                <Link
                                                    to={`/list-countries/${item.name.common}`}
                                                    className="btn "
                                                >
                                                    <p className="hidden md:block">
                                                        Details
                                                    </p>
                                                    <div>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="size-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                                            />
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </td>
                                        </tr>
                                    </>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="3"
                                        className="text-center text-gray-500"
                                    >
                                        No countries found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    );
};

export default ListCountries;
