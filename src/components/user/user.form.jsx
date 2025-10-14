import { Input, notification } from 'antd';
import { Button, Flex } from 'antd';
import React from 'react';
import axios from 'axios';
import { createUserAPI } from '../../services/api.service';
import { json } from 'react-router-dom';
import { Modal } from 'antd';

const UserForm = (props) => {
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [avatar, setAvatar] = React.useState('');
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const { loadUsers } = props;
    const handleSubmit = async () => {
        
        try {
            const res = await createUserAPI(fullName, email, password, phone, avatar);
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
                setAvatar('');
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
        <div className="user-form" style={{ margin: '20px' }}>
            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
                <h2 style={{ marginBottom: '15px' }}>UserForm</h2>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button onClick={() => setIsModalOpen(true)} type="primary" style={{ marginTop: '15px' }}>Submit</Button>
                </div>
            </div>
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={() => handleSubmit()}
                onCancel={() => setIsModalOpen(false)}
                maskClosable={false}
                okText="Create"
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
                    <div>
                        <span>Avatar URL</span>
                        <Input onChange={(e) => setAvatar(e.target.value)}
                            placeholder="Enter avatar URL" value={avatar} />
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default UserForm;