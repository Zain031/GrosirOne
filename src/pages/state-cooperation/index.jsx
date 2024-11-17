import { useEffect, useState } from "react";
import Container from "../../components/errors/container";
import Header from "../../layouts/partials/header";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { RefreshCwOff, SquareX } from "lucide-react";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/feature/CounterSlice";

const StateCooperation = () => {
    const dispatch = useDispatch();
    const [names, setNames] = useState(null);
    useEffect(() => {
        dispatch(reset());
        const storedNames = localStorage.getItem("names");

        if (storedNames) {
            setNames(JSON.parse(storedNames));
        }
    }, []);

    const handleCancelCooperation = (name) => {
        const updatedNames = names.filter((n) => n !== name);
        setNames(updatedNames);
        localStorage.setItem("names", JSON.stringify(updatedNames));
    };

    const handleConfirm = (name) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won cancel cooperation with " + name,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!",
        }).then((result) => {
            if (result.isConfirmed) {
                handleCancelCooperation(name);
                Swal.fire({
                    title: "Cancelled!",
                    text: "Cooperation with " + name + " has been cancelled.",
                    icon: "success",
                });
            }
        });
    };

    const handleCancelAllCooperation = () => {
        localStorage.removeItem("names");
        setNames([]);
    };

    const handleConfirmCancelAllCooperation = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won cancel all cooperation",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!",
        }).then((result) => {
            if (result.isConfirmed) {
                handleCancelAllCooperation();
                Swal.fire({
                    title: "Cancelled!",
                    text: "All cooperation has been cancelled.",
                    icon: "success",
                });
            }
        });
    };

    return (
        <Container>
            <Header title="State cooperation" />
            <div className="overflow-x-auto p-4 shadow-xl outline outline-1 outline-slate-200 rounded-md mt-10 ">
                {names?.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr className="text-xl">
                                <th></th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {names.map((name, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{name}</td>
                                    <td>
                                        <button
                                            className="btn bg-[#fa2e2f] hover:bg-[#c23a22] text-white"
                                            onClick={() => handleConfirm(name)}
                                        >
                                            <p className="hidden md:block">
                                                <SquareX />
                                            </p>
                                            Cancel cooperation
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                        {names?.length > 1 && (
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>
                                        <button
                                            className="btn bg-base hover:bg-[#cc0001] text-base-900 hover:text-white"
                                            onClick={
                                                handleConfirmCancelAllCooperation
                                            }
                                        >
                                            <p className="hidden md:block">
                                                <RefreshCwOff />
                                            </p>
                                            Cancel all cooperation
                                        </button>
                                    </th>
                                </tr>
                            </tfoot>
                        )}
                    </table>
                ) : (
                    <div role="alert" className="alert alert-warning">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="h-6 w-6 shrink-0 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <span>No state cooperation</span>
                        <Link to={"/"}>
                            <button className="btn btn-primary flex items-center">
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
                                        d="M12 4.5v15m7.5-7.5h-15"
                                    />
                                </svg>
                                Add state cooperation
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default StateCooperation;
