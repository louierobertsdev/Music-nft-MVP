import { ErrorOutline } from '@mui/icons-material';
import React from 'react';

const NetworkCheck = ({ target }) => {
  return (
    <>
      <div style={{ marginLeft: 'auto', color: 'yellow' }}>
        <div>
          <span style={{ paddingRight: '10px' }}>
            <ErrorOutline />
          </span>
          Please switch to {target}!
        </div>
      </div>
    </>
  );
};

export default NetworkCheck;
