import UserForm from "../components/user/user.form";
import USerTable from "../components/user/user.table";
import { useState } from "react";
import { useEffect } from "react";
import { fetchAllUsersAPI } from "../services/api.service";
const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const res = await fetchAllUsersAPI()
        setUsers(res.data);
    }

    return (
        <div>
            <UserForm loadUsers={loadUsers} />
            <USerTable users={users} loadUsers={loadUsers} />
        </div>)
}
export default UsersPage;