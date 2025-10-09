import React from 'react';
import { Modal } from 'antd';
import { createUserAPI } from '../../services/api.service';
import { Input, notification } from 'antd';


const UpdateUserModal = () => {
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [isModalOpen, setIsModalOpen] = React.useState(true);
    const handleSubmit = async () => {
        try {
            const res = await createUserAPIeUserAPI(fullName, email, password, phone);
            await loadUsers();
            if (res.data) {
                notification.success({
                    message: 'Success',
                    description: 'User created successfully',
                });
                setFullName('');
                setEmail('');
                setPassword('');
                setPhone('');
                setIsModalOpen(false);
            }
        } catch (error) {
            notification.error({
                message: 'Error',
                description: JSON.stringify(error.response?.data),
            });
        }
    }
    return (
        <Modal
            title="Update User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={() => handleSubmit()}
            onCancel={() => setIsModalOpen(false)}
            maskClosable={false}
            okText="Update"
        >
            <div>
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
                <div>
                    <span>Password</span>
                    <Input.Password onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password" value={password} />
                </div>
                <div>
                    <span>Phone</span>
                    <Input onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number" value={phone} />
                </div>
            </div>
        </Modal>
    )
}

export default UpdateUserModal
