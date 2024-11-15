import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/errors/container";
import Headers from "../../layouts/partials/header";
import { useEffect } from "react";
import { fetchCountries } from "../../redux/feature/CountrySlice";

const ListCountries = () => {
    const { countries } = useSelector((state) => state.country);
    console.log("🚀 ~ ListCountries ~ countries:", countries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    return (
        <>
            <Container>
                <Headers title="List Countries" />
                <div className="overflow-x-auto shadow-xl px-4">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th className="font-bold text-xl text-base-700">
                                    Countries
                                </th>
                                <th className="font-bold text-xl text-base-700">
                                    Flags
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {countries.map((item, index) => {
                                return (
                                    <>
                                        <tr className="hover:bg-yellow-200">
                                            <th>{index + 1}</th>
                                            <td>{item.name.common}</td>

                                            <img
                                                src={item.flags.png}
                                                alt=""
                                                className="w-20 py-2 rounded-md"
                                            />
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    );
};

export default ListCountries;
