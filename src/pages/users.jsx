import UserForm from "../components/user/user.form";
import USerTable from "../components/user/user.table";
import { useState } from "react";
import { useEffect } from "react";
import { fetchAllUsersAPI } from "../services/api.service";
const UsersPage = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [users, setUsers] = useState([]);
    const [total, setTotal] = useState(0);

    const handleTableChange = (pagination) => {
        if(pagination.current !== page){
            setPage(pagination.current);
        }
        if(pagination.pageSize !== limit){
            setLimit(pagination.pageSize);
        }
    };

    useEffect(() => {
        loadUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page, limit]);       

    const loadUsers = async () => {
        const res = await fetchAllUsersAPI(page, limit)
        // Handle paginated response structure
        setUsers(res.data.data);
        setTotal(res.data.pagination.total);
        setPage(res.data.pagination.page);
        setLimit(res.data.pagination.limit);
    }

    return (
        <div>
            <UserForm loadUsers={loadUsers} />
            <USerTable
                page={page}
                limit={limit}
                total={total}
                users={users} loadUsers={loadUsers}
                handleTableChange={handleTableChange}
                setPage={setPage}
                setLimit={setLimit}
            />
        </div>)
}
export default UsersPage;