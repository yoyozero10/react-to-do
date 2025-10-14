import { Drawer } from 'antd';


const ViewUserDetail = (props) => {
    const { isDetailOpen, setIsDetailOpen, dataDetail } = props;
    const onClose = () => {
        setIsDetailOpen(false);
    };
    return (

            <Drawer
                width={"35vw"}
                title="User Detail"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={isDetailOpen}
            >
                <p>Full Name: {dataDetail.username}</p>
                <p>Email: {dataDetail.email}</p>
                <p>Phone: {dataDetail.phone}</p>
                <div>
                    <label>Avatar:</label>
                    <img style={{ width: '100px', height: '100px' }} src={dataDetail.avatar} alt="" />
                </div>
            </Drawer>

    )
}

export default ViewUserDetail
