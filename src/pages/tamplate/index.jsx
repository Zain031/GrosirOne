import Container from "../../components/container";
import Headers from "../../layouts/partials/header";

const Tamplate = () => {
    const modal = () => {
        document.getElementById("my_modal_3").showModal();
    };

    const addModal = () => {
        document.getElementById("my_modal_4").showModal();
    };

    return (
        <>
            <Container>
                <Headers title="Tamplate" />
                <div className="overflow-x-auto">
                    <div className="flex justify-end  mb-4 gap-6 px-10 ">
                        <input
                            type="text"
                            placeholder="Search By Name"
                            className="input input-bordered input-primary w-full max-w-xs my-3"
                        />

                        <select className="select select-primary w-full max-w-xs my-3">
                            <option disabled selected>
                                Category
                            </option>
                            <option>Company Profile</option>
                            <option>Website CUstom</option>
                            <option>Mobile Application</option>
                            <option>UI/UX</option>
                        </select>

                        <button
                            className=" px-3 rounded-md bg-success text-white  max-w-xs my-3"
                            onClick={addModal}
                        >
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
                        </button>
                    </div>

                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-96 max-w-2xl flex flex-col justify-center items-center">
                            <h3 className="font-bold text-lg">
                                Create Tamplate
                            </h3>

                            <form
                                method="dialog"
                                className="w-full flex flex-col items-center"
                            >
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                    ✕
                                </button>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered input-primary w-full max-w-xs my-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Price"
                                    className="input input-bordered input-primary w-full max-w-xs my-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Link Address"
                                    className="input input-bordered input-primary w-full max-w-xs my-3"
                                />
                                <input
                                    type="text"
                                    placeholder="Quantity Purchased"
                                    className="input input-bordered input-primary w-full max-w-xs my-3"
                                />
                                <select className="select select-primary w-full max-w-xs my-3">
                                    <option disabled selected>
                                        Category
                                    </option>
                                    <option>Company Profile</option>
                                    <option>Website CUstom</option>
                                    <option>Mobile Application</option>
                                    <option>UI/UX</option>
                                </select>
                                <p>Select Image</p>
                                <input
                                    type="file"
                                    className="file-input file-input-bordered file-input-primary w-full max-w-xs my-3"
                                />
                            </form>
                        </div>
                    </dialog>

                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Link Address</th>
                                <th>Quantity Purchased</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Company Profile 1</td>
                                <td>Image </td>
                                <td>800.000</td>
                                <td>http://example.com</td>
                                <td>60</td>
                                <td>Company Profile</td>
                                <td className="flex gap-3">
                                    <button
                                        className="btn btn-success text-white flex gap-2 tooltip tooltip-primary"  data-tip="Edit"
                                        onClick={modal}
                                    >
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
                                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        className="btn btn-error text-white flex gap-2 tooltip tooltip-primary"  data-tip="Delete"
                                        onClick={modal}
                                    >
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
                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}

                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box w-96 max-w-2xl flex flex-col justify-center items-center">
                                    <h3 className="font-bold text-lg">
                                        Edit Tamplate
                                    </h3>

                                    <form
                                        method="dialog"
                                        className="w-full flex flex-col items-center"
                                    >
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                            ✕
                                        </button>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="input input-bordered input-primary w-full max-w-xs my-2"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Price"
                                            className="input input-bordered input-primary w-full max-w-xs my-2"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Link Address"
                                            className="input input-bordered input-primary w-full max-w-xs my-3"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Quantity Purchased"
                                            className="input input-bordered input-primary w-full max-w-xs my-3"
                                        />
                                        <select className="select select-primary w-full max-w-xs my-3">
                                            <option disabled selected>
                                                Category
                                            </option>
                                            <option>Company Profile</option>
                                            <option>Website CUstom</option>
                                            <option>Mobile Application</option>
                                            <option>UI/UX</option>
                                        </select>
                                        <p>Select Image</p>
                                        <input
                                            type="file"
                                            className="file-input file-input-bordered file-input-primary w-full max-w-xs my-3"
                                        />
                                    </form>
                                </div>
                            </dialog>
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    );
};

export default Tamplate;
