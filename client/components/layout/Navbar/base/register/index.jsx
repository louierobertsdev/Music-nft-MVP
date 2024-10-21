import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { ErrorOutline } from '@mui/icons-material';
import { Button, CircularProgress } from '@mui/material';

import { useWalletInfo } from '$hooks/web3';
import { useWeb3 } from '$providers/hooks';
import { MetamaskButton, RegisterModal } from '../../contents';
import ProfileButton from '../myMenu';
import NetworkCheck from './NetworkCheck';
import GetBalance from '$components/views/getBalance/GetBalance';

const RegisterCheck = () => {
  const { userData } = useSelector(state => state.user);

  const { network, account } = useWalletInfo();
  const { hasInitialResponse, isSupported, target } = network;
  const { isLoading, requireInstall, connect } = useWeb3();
  const [open, setOpen] = useState(false);

  const handleMetaMaskOpen = useCallback(() => {
    setOpen(true);
  }, []);

  // useEffect(() => {
  //   // To be modified
  //   if (!account.data) return;
  //   console.log('Ok!');
  // }, [network]);

  const onClickMetamask = useCallback(() => {
    connect();
  }, [connect]);

  return (
    <>
      {/* Check network match */}
      {hasInitialResponse && !isSupported && <NetworkCheck target={target} />}

      {isLoading ? (
        <div style={{ marginLeft: 'auto' }}>
          <CircularProgress />
        </div>
      ) : requireInstall ? (
        <div style={{ marginLeft: 'auto' }}>
          <Button
            style={{ color: 'yellow' }}
            onClick={() =>
              window.open('https://metamask.io/download.html', '_blank')
            }
          >
            <div>
              <span style={{ paddingRight: '10px' }}>
                <ErrorOutline />
              </span>
              Please install MetaMask!
            </div>
          </Button>
        </div>
      ) : userData ? (
        <>
          <div style={{ marginLeft: 'auto' }}>
            {account.data && <GetBalance metamask={account.data} />}
          </div>
          {/* <div style={{ paddingRight: '20px' }}>
            <ProfileButton value="notice" />
          </div> */}
          <div style={{ paddingRight: '20px' }}>
            <ProfileButton value="mypage" />
          </div>
        </>
      ) : account.data ? (
        <MetamaskButton metaopenfunc={handleMetaMaskOpen} />
      ) : (
        <div style={{ marginLeft: 'auto', color: 'yellow' }}>
          <div>
            <button
              onClick={onClickMetamask}
              style={{
                backgroundColor: 'transparent',
                marginLeft: 'auto',
                color: 'yellow',
                padding: '15px',
                border: 'none',
              }}
            >
              <span style={{ paddingRight: '10px' }}>
                <ErrorOutline />
              </span>
              Please log in to MetaMask!
            </button>
          </div>
        </div>
      )}
      <RegisterModal setOpen={setOpen} open={open} />
    </>
  );
};

export default RegisterCheck;
