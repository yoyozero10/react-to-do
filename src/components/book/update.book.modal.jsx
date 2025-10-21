
import { Modal } from 'antd';
import { Input } from 'antd';
import React from 'react';
import { updateBookAPI } from '../../services/api.service';
import { notification } from 'antd';

const UpdateBookModal = (props) => {
    const { isModalUpdateOpen, setIsModalUpdateOpen } = props;
    const { dataUpdate, setDataUpdate } = props;
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [image, setImage] = React.useState('');
    const [description, setDescription] = React.useState('');
    const { loadBooks } = props;

    React.useEffect(() => {
            if (dataUpdate) {
                setTitle(dataUpdate.title);
                setAuthor(dataUpdate.author);
                setPrice(dataUpdate.price);
                setImage(dataUpdate.image);
                setDescription(dataUpdate.description);
    
            }
        }, [dataUpdate]);

        const handleSubmit = async () => {
            try {
                const res = await updateBookAPI(dataUpdate._id, title, author, price, image, description);
                await loadBooks();
                if (res.data) {
                    notification.success({
                        message: 'Success',
                        description: 'Book updated successfully',
                    });
                    setTitle('');
                    setAuthor('');
                    setPrice('');
                    setImage('');
                    setDescription('');
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
            title="Update Book"
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
                    <Input disabled value={dataUpdate?._id} />
                </div>
                <div>
                    <span>Title</span>
                    <Input onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter title" value={title} />
                </div>
                <div>
                    <span>Author</span>
                    <Input onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Enter author" value={author} />
                </div>
                <div>
                    <span>Price</span>
                    <Input onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter price" value={price} />
                </div>
                <div>
                    <span>Image URL</span>
                    <Input onChange={(e) => setImage(e.target.value)}
                        placeholder="Enter image URL" value={image} />
                </div>
                <div>
                    <span>Description</span>
                    <Input onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description" value={description} />
                </div>
            </div>
        </Modal>
    )
}

export default UpdateBookModal

    