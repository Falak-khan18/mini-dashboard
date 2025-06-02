import React, { useEffect, useState, useMemo, useCallback } from "react";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";
import UserTable from "./components/UserTable";
import UserModal from "./components/UserModal";
import { useSelectedUser } from "./contexts/SelectedUserContext";

const App = () => {
  const { selectedUser, setSelectedUser } = useSelectedUser();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * usersPerPage;
    return filteredUsers.slice(start, start + usersPerPage);
  }, [filteredUsers, currentPage]);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  }, []);

  const handleViewUser = useCallback((user) => {
    setSelectedUser(user);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedUser(null);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-5xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Mini Admin Dashboard
        </h1>

        <div className="mb-4">
          <Input
            placeholder="Search by name or email..."
            value={search}
            onChange={handleSearch}
          />
        </div>

        <UserTable users={paginatedUsers} onViewUser={handleViewUser} />

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              variant={currentPage === i + 1 ? "secondary" : "primary"}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
        </div>

        {selectedUser && (
          <UserModal onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default App;
