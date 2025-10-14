/* eslint-disable no-unused-vars */
import React from 'react';
import { Modal } from 'antd';
import { updateUserAPI } from '../../services/api.service';
import { Input, notification } from 'antd';


const UpdateUserModal = (props) => {
    const { isModalUpdateOpen, setIsModalUpdateOpen } = props;
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [avatar, setAvatar] = React.useState('');
    const { dataUpdate, setDataUpdate, loadUsers } = props;

    React.useEffect(() => {
        if (dataUpdate) {
            setFullName(dataUpdate.username);
            setEmail(dataUpdate.email);
            setPhone(dataUpdate.phone);
            setPassword(dataUpdate.password);
            setAvatar(dataUpdate.avatar || '');

        }
    }, [dataUpdate]);
    const handleSubmit = async () => {
        try {
            console.log('Updating user with data:', {
                _id: dataUpdate._id,
                username: fullName,
                email,
                avatar
            });
            const res = await updateUserAPI(dataUpdate._id, fullName, email, avatar);
            console.log('Update response:', res);
            await loadUsers();
            if (res.data) {
                notification.success({
                    message: 'Success',
                    description: 'User updated successfully',
                });
                setFullName('');
                setEmail('');
                setPassword('');
                setPhone('');
                setAvatar('');
                setIsModalUpdateOpen(false);
            }
        } catch (error) {
            console.error('Update error:', error);
            console.error('Error response:', error.response?.data);
            notification.error({
                message: 'Error',
                description: JSON.stringify(error.response?.data || error.message),
            });
        }
    }
    return (
        <Modal
            title="Update User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalUpdateOpen}
            onOk={() => handleSubmit()}
            onCancel={() => setIsModalUpdateOpen(false)}
            maskClosable={false}
            okText="Update"
        >
            <div>
                <div>
                    <span>Id</span>
                    <Input disabled value={dataUpdate._id} />
                </div>
                <div>
                    <span>Full Name</span>
                    <Input onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter full name" value={fullName} />
                </div>
                <div>
                    <span>Email</span>
                    <Input onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email" value={email} />
                </div>
                {/* Phone field commented out as API doesn't support it */}
                {/* <div>
                    <span>Phone</span>
                    <Input onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number" value={phone} />
                </div> */}
                <div>
                    <span>Avatar URL</span>
                    <Input onChange={(e) => setAvatar(e.target.value)}
                        placeholder="Enter avatar URL" value={avatar} />
                </div>
            </div>
        </Modal>
    )
}

export default UpdateUserModal
