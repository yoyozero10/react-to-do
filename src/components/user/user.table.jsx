import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table, Tag } from 'antd';
import UpdateUserModal from './update.user.modal';

const USerTable = (props) => {
  const { users } = props;

  const columns = [
    {
      title: 'Id',
      dataIndex: '_id',
      rowKey: '_id',
      render: (text, record) => (
        <Space size="middle">
          <a href="#">{record._id}</a>

        </Space>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'username',
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
          <EditOutlined onClick={() => {}} style={{ color: 'blue', cursor: 'pointer' }} />
          <DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} />
        </Space>
      ),
    }
  ];

  return <>
  (<Table columns={columns} dataSource={users} rowKey={"_id"}/>)
   <UpdateUserModal/>
  </>
}

export default USerTable;