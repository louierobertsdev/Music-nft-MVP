import { allDatas } from '$components/views/subscription/datas';
import { paymentContract } from '$contracts';
import { Box, Button } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MySubInfo = () => {
  const { userData } = useSelector(state => state.user);
  const [mySubscribe, setMySubscribe] = useState();
  const getMySubInfo = async () => {
    const mySubHistory = await paymentContract.getPastEvents('PaymentSent', {
      filter: { from: userData?.metamask },
      fromBlock: 0,
    });

    const mySub = mySubHistory.reverse();
    setMySubscribe(mySub);
  };
  let dateNow = parseInt(Math.round(new Date().getTime() / 1000));
  useEffect(() => {
    if (!mySubscribe) getMySubInfo();
  }, [mySubscribe]);

  let FirstIcon;
  let date;

  return (
    <Box>
      <Box>
        <h1 style={{ marginTop: '-1px', color: '#fff' }}>
          My subscription information
        </h1>
      </Box>
      <Box className="mypage_mysubinfo_contents">
        {mySubscribe === undefined ? (
          <>
            <Box>There is no subscription information.</Box>
            <Link href="/subscriptionbuy">
              <Button>Go to purchase</Button>
            </Link>
          </>
        ) : (
          <>
            {mySubscribe.length === 0 ? (
              <>
                <Box>There is no subscription information.</Box>
                <Link href="/subscriptionbuy">
                  <Button>Go to purchase</Button>
                </Link>
              </>
            ) : (
              <>
                <Box className="mypage_mysubinfo_contents_first">
                  {
                    (FirstIcon =
                      allDatas[mySubscribe[0].returnValues.planId].Icons)
                  }
                  <Box className="mypage_mysubinfo_contents_title">
                    Previous subscription information
                  </Box>
                  {mySubscribe.map((v, i) => {
                    return (
                      <>
                        <Box>
                          <Box
                            style={{
                              display: 'inline-block',
                              fontSize: '20px',
                              marginRight: '40px',
                            }}
                          >
                            {new Date(
                              v.returnValues.date * 1000,
                            ).getFullYear() +
                              '-' +
                              (new Date(v.returnValues.date * 1000).getMonth() +
                                1) +
                              '-' +
                              new Date(v.returnValues.date * 1000).getDate()}
                          </Box>

                          {/* {allDatas[v.returnValues.planId].Icon} */}
                          <FirstIcon />
                          <Box className="mypage_mysubinfo_contents_contents">
                            <Box
                              style={{
                                display: 'inline-block',
                                marginLeft: '10px',
                                marginRight: '10px',
                              }}
                            >
                              {allDatas[v.returnValues.planId].subIconTitle}
                            </Box>
                            <Box style={{ display: 'inline-block' }}>
                              {allDatas[v.returnValues.planId].months}달
                            </Box>
                          </Box>
                        </Box>
                      </>
                    );
                  })}
                </Box>
                <Box style={{ marginTop: '20px' }}>
                  {userData?.subscription * 1000 <= Date.now() && (
                    <>
                      <span>The voucher period has ended</span>
                      <Link href="/subscriptionbuy">
                        <Button>Go to purchase a ticket</Button>
                      </Link>
                    </>
                  )}
                </Box>
              </>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default MySubInfo;
