import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table, Popconfirm, notification } from 'antd';
import React from 'react';
import { deleteBookAPI } from '../../services/api.service';
import UpdateBookModal from '../book/update.book.modal';
import ViewBookDetail from '../book/view.book.detail';

const BookTable = (props) => {
  const { page, limit, total, books, loadBooks, handleTableChange } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = React.useState(false);
  const [dataUpdate, setDataUpdate] = React.useState({});
  const [dataDetail, setDataDetail] = React.useState({});
  const [isDetailOpen, setIsDetailOpen] = React.useState(false);

  React.useEffect(() => {
    loadBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const handleDelete = async (_id) => {
    try {
      await deleteBookAPI(_id);
      await loadBooks();
      notification.success({
        message: 'Success',
        description: 'Book deleted successfully',
      });
    } catch (error) {
      notification.error({
        message: 'Error',
        description: JSON.stringify(error.response?.data),
      });
    }
  }

  const columns = [
    {
      title: 'Index',
      dataIndex: 'index',
      render: (text, record, index) => (page - 1) * limit + index + 1,
    },
    {
      title: 'Id',
      dataIndex: '_id',
      rowKey: '_id',
      render: (text, record) => (
        <Space size="middle">
          <a href="#"
            onClick={() => {
              setDataDetail(record);
              setIsDetailOpen(true);
            }}
          >{record._id}</a>
        </Space>
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: (price) => `$${price}`,
    },
    {
      title: 'Image',
      dataIndex: 'image',
      render: (image) => (
        <img 
          src={image} 
          alt="book cover" 
          style={{ width: '40px', height: '40px', objectFit: 'cover' }}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/40x40?text=No+Image';
          }}
        />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <EditOutlined onClick={() => {
            setDataUpdate(record);
            setIsModalUpdateOpen(true);
          }} style={{ color: 'blue', cursor: 'pointer' }} />
          <Popconfirm
            placement='left'
            title="Delete Book"
            description="Are you sure to delete this book?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} />
          </Popconfirm>
        </Space>
      ),
    }
  ];

  return (
    <>
      <Table
        onChange={(pagination) => {
          handleTableChange(pagination);
        }}
        pagination={{
          current: page,
          pageSize: limit,
          total: total,
          showSizeChanger: false,
          showQuickJumper: false,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
        }}
        columns={columns}
        dataSource={books}
        rowKey={"_id"}
      />
      <UpdateBookModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadBooks={loadBooks}
      />
      <ViewBookDetail
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
        dataDetail={dataDetail}
      />
    </>
  );
}

export default BookTable;
