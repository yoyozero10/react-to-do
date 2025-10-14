import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table } from 'antd';
import UpdateUserModal from './update.user.modal';
import React from 'react';
import ViewUserDetail from './view.user.detail';
import { Popconfirm } from 'antd';
import { deleteUserAPI } from '../../services/api.service';
import { notification } from 'antd';

const USerTable = (props) => {
  const { page, limit, total, users, loadUsers, setPage, setLimit, handleTableChange } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = React.useState(false);
  const [dataUpdate, setDataUpdate] = React.useState({});
  const [dataDetail, setDataDetail] = React.useState({});
  const [isDetailOpen, setIsDetailOpen] = React.useState(false); 

  const handleDelete = async (_id) => {
    try {
      await deleteUserAPI(_id);
      await loadUsers();
      notification.success({
        message: 'Success',
        description: 'User deleted successfully',
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
      title : 'Index',
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
      title: 'Name',
      dataIndex: 'username',
    },
    {
      title: '',
      dataIndex: 'avatar',
      render: (avatar) => (
        <img 
          src={avatar} 
          alt="avatar" 
          style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/40x40?text=No+Image';
          }}
        />
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <EditOutlined onClick={() => {
            setDataUpdate(record);
            setIsModalUpdateOpen(true);
            console.log(record);
          }} style={{ color: 'blue', cursor: 'pointer' }} />
          <Popconfirm
            placement='left'
            title="Delete User"
            description="Are you sure to delete this user?"
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

  return <>
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
      showTotal: (total, range) => `${range[0]}-${range[1]} trên ${total} items`,
    }}
     columns={columns} dataSource={users} rowKey={"_id"} />
    <UpdateUserModal
      isModalUpdateOpen={isModalUpdateOpen}
      setIsModalUpdateOpen={setIsModalUpdateOpen}
      dataUpdate={dataUpdate}
      setDataUpdate={setDataUpdate}
      loadUsers={loadUsers}
    />
    <ViewUserDetail
      isDetailOpen={isDetailOpen}
      setIsDetailOpen={setIsDetailOpen}
      dataDetail={dataDetail}
      setDataDetail={setDataDetail}
    />
  </>
}

export default USerTable;