import React from "react";
import { useSelectedUser } from "../contexts/SelectedUserContext";

const UserModal = ({ onClose }) => {
    const { selectedUser } = useSelectedUser();

    if (!selectedUser) return null; // don't render if no user is selected

    const {
        name,
        email,
        phone,
        website,
        company: { name: companyName } = {},
        address: { street, city } = {},
    } = selectedUser;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-[300px]">
                <h2 className="mb-4 text-xl font-semibold">{name}</h2>
                <p>
                    <strong>Email:</strong> {email}
                </p>
                <p>
                    <strong>Phone:</strong> {phone}
                </p>
                <p>
                    <strong>Website:</strong> {website}
                </p>
                <p>
                    <strong>Company:</strong> {companyName}
                </p>
                <p>
                    <strong>Address:</strong> {street}, {city}
                </p>
                <button
                    className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default React.memo(UserModal);
