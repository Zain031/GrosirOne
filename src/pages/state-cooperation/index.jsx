import { useEffect, useState } from "react";
import Container from "../../components/errors/container";
import Header from "../../layouts/partials/header";
import Swal from "sweetalert2";

const StateCooperation = () => {
    const [names, setNames] = useState(null);
    console.log("🚀 ~ StateCooperation ~ names:", names);

    useEffect(() => {
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

    return (
        <Container>
            <Header title="State cooperation" />
            <div className="overflow-x-auto p-4 shadow-xl outline outline-1 outline-slate-200 rounded-md mt-10">
                {names?.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
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
                                            className="btn btn-primary"
                                            onClick={() => handleConfirm(name)}
                                        >
                                            Cancel cooperation
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center">Belum ada cooperation.</p>
                )}
            </div>
        </Container>
    );
};

export default StateCooperation;
