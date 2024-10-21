import React from 'react';

const EditionHistoryLabel = () => {
  return (
    <div
      style={{
        display: 'flex',
        textAlign: 'center',
        color: '#546682',
        fontSize: '20px',
        fontWeight: 600,
        margin: '30px 0 15px',
      }}
    >
      <div style={{ width: '400px' }}>Item</div>
      <div style={{ width: '200px' }}>Price</div>
      <div style={{ width: '150px' }}>Buyer</div>
      <div style={{ width: '150px' }}>Seller</div>
      <div style={{ width: '300px' }}>Date</div>
    </div>
  );
};

export default EditionHistoryLabel;
