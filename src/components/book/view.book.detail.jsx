
import { Drawer } from 'antd';

const ViewBookDetail = (props) => {
    const { isDetailOpen, setIsDetailOpen, dataDetail } = props;
    const onClose = () => {
        setIsDetailOpen(false);
    };
   return (

            <Drawer
                width={"50vw"}
                title={<span style={{ fontSize: '24px', fontWeight: 'bold' }}>📚 Book Detail</span>}
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={isDetailOpen}
            >
                <div style={{ padding: '20px' }}>
                    <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                        <img 
                            style={{ 
                                width: '250px', 
                                height: '350px', 
                                objectFit: 'cover',
                                borderRadius: '12px',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                            }} 
                            src={dataDetail.image} 
                            alt={dataDetail.title} 
                        />
                    </div>
                    
                    <div style={{ 
                        background: '#667eea',
                        padding: '20px',
                        borderRadius: '10px',
                        marginBottom: '20px',
                        color: 'white'
                    }}>
                        <h2 style={{ margin: '0 0 10px 0', fontSize: '28px' }}>{dataDetail.title}</h2>
                        <p style={{ margin: 0, fontSize: '18px', opacity: 0.9 }}>✍️ {dataDetail.author}</p>
                    </div>

                    <div style={{ 
                        background: '#f8f9fa',
                        padding: '15px',
                        borderRadius: '8px',
                        marginBottom: '20px',
                        border: '2px solid #e9ecef'
                    }}>
                        <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#28a745', margin: 0 }}>
                            💰 Price: ${dataDetail.price}
                        </p>
                    </div>

                    <div style={{ 
                        background: '#ffffff',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #dee2e6',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}>
                        <h3 style={{ marginTop: 0, color: '#495057', fontSize: '20px' }}>📖 Description:</h3>
                        <p style={{ lineHeight: '1.8', color: '#6c757d', fontSize: '16px' }}>
                            {dataDetail.description}
                        </p>
                    </div>
                </div>
            </Drawer>

    )
}

export default ViewBookDetail

    