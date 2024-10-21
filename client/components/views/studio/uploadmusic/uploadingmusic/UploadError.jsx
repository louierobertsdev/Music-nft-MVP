import LoadingIcons from '$components/views/loadingicons/LoadingIcons';
import { Button } from '@mui/material';
import Image from 'next/image';
import Router from 'next/router';
import React from 'react';

const UploadError = () => {
  return (
    <div>
      <div>
        <div className="uploadBlur">
          <div
            style={{
              fontSize: '50px',
              color: '#fff',
              display: 'flex',
              margin: '0 auto',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                height: '500px',
                margin: '150px auto 0',
                textAlign: 'center',
              }}
            >
              <div>
                <Image
                  src="/minterror.png"
                  alt="Complete Minting"
                  width="460px"
                  height="460px"
                />
              </div>
              <div style={{ fontSize: '30px' }}>
                An error occurred.. Please try again..
              </div>
              <div>
                <Button sx={{ color: 'white' }} onClick={() => Router.reload()}>
                  Refresh
                </Button>
              </div>
              <LoadingIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadError;
