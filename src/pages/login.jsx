import { Form, Input, Button, Card, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { loginUserAPI } from '../services/api.service';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'antd';
import { useState } from 'react';

const { Title } = Typography;

const LoginPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        try {
            setLoading(true);
            // Thêm delay 3 giây để dễ quan sát loading state
            await new Promise(resolve => setTimeout(resolve, 1750));
            await loginUserAPI(values.email, values.password_hash, values.password);
            message.success('Đăng nhập thành công!');
            setLoading(false);
            form.resetFields();
            navigate('/');
        } catch (error) {
            message.error('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin!');
            setLoading(false);
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh',
            padding: '20px'
        }}>
            <Card
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <Title level={2}>Đăng Nhập</Title>
                </div>

                <Form
                    form={form}
                    name="login"
                    onFinish={onFinish}
                    layout="vertical"
                    size="large"
                >
                    <Row>
                        <Col xs={24} md={24}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập email!'
                                    },
                                    {
                                        type: 'email',
                                        message: 'Email không hợp lệ!'
                                    }
                                ]}
                            >
                                <Input
                                    prefix={<UserOutlined />}
                                    placeholder="Nhập email"
                                    autoComplete="email"
                                    disabled={loading}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={24}>
                            <Form.Item
                                name="password_hash"
                                label="Mật khẩu"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập mật khẩu!'
                                    },
                                    {
                                        min: 6,
                                        message: 'Mật khẩu phải có ít nhất 6 ký tự!'
                                    }
                                ]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined />}
                                    placeholder="Nhập mật khẩu"
                                    autoComplete="current-password"
                                    disabled={loading}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={24}>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    size="large"
                                    loading={loading}
                                >
                                    {loading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
                                </Button>
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={24} style={{ textAlign: 'center' }}>
                            <Button
                                type="link"
                                style={{ padding: 0 }}
                                disabled={loading}
                                onClick={() => navigate('/register')}
                            >
                                Chưa có tài khoản? Đăng ký ngay
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;