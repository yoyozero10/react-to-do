import BookTable from "../components/book/book.table";
import { useState } from "react";
import { useEffect } from "react";
import { fetchAllBooksAPI } from "../services/api.service";

const BookPage = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [books, setBooks] = useState([]);
    const [total, setTotal] = useState(0);

    const handleTableChange = (pagination) => {
        if (pagination.current !== page) {
            setPage(pagination.current);
        }
        if (pagination.pageSize !== limit) {
            setLimit(pagination.pageSize);
        }
    };

    useEffect(() => {
        loadBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, limit]);

    const loadBooks = async () => {
        const res = await fetchAllBooksAPI(page, limit)
        // Handle paginated response structure
        setBooks(res.data.data);
        setTotal(res.data.pagination.total);
        setPage(res.data.pagination.page);
        setLimit(res.data.pagination.limit);
    }

    return <BookTable
        page={page}
        limit={limit}
        total={total}
        books={books}
        loadBooks={loadBooks}
        handleTableChange={handleTableChange} 
        setPage={setPage}
        setLimit={setLimit}
        />
        
}

export default BookPage;