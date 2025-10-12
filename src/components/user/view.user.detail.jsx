import { Drawer } from 'antd';

const ViewUserDetail = (props) => {
    const { isDetailOpen, setIsDetailOpen, dataDetail, setDataDetail } = props;
    const onClose = () => {
        setIsDetailOpen(false);
    };
    return (

            <Drawer
                title="User Detail"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={isDetailOpen}
            >
                <p>Full Name: {dataDetail.username}</p>
                <p>Email: {dataDetail.email}</p>
                <p>Phone: {dataDetail.phone}</p>
            </Drawer>

    )
}

export default ViewUserDetail
