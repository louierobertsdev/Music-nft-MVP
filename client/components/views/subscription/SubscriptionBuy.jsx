import React, { useEffect, useState } from 'react';
import { FaBoxOpen, FaUserAstronaut, FaUserFriends } from 'react-icons/fa';
import { Global } from './SubscriptionBuyStyle';
import { IconContext } from 'react-icons/lib';
import SubscriptionLayout from './subscriptionLayout/SubscriptionLayout';
import { paymentContract } from '$contracts';
import { utils } from 'web3';
import { allDatas } from './datas';

const SubscriptionBuy = () => {
  const [plans, setPlans] = useState();

  const getAllPlans = async () => {
    const allPlans = await paymentContract.methods.getAllPlans().call();
    const emptyArray = [];
    for (let i = 0; i < allPlans.length; i++) {
      emptyArray.push(allPlans[i]);
      emptyArray[i] = {
        ...emptyArray[i],
        Icons: allDatas[i].Icons,
        subIconTitle: allDatas[i].subIconTitle,
      };
    }
    setPlans(emptyArray);
  };

  useEffect(() => {
    if (!plans) getAllPlans();
  }, [plans]);

  return (
    <>
      <Global />
      <IconContext.Provider value={{ size: 35 }}>
        <div className="buySection">
          <div>
            <div
              style={{
                color: 'white',
                float: 'left',
                margin: '0 0 100px 150px',
                fontSize: '45px',
                fontWeight: 600,
              }}
            >
              Sell subscriptions
            </div>
          </div>
          <div
            style={{ color: 'white', fontSize: '40px', margin: '40px 0 20px' }}
          >
            <FaBoxOpen color="#fff" style={{ marginRight: '10px' }} />
            Event
          </div>
          <div
            className="buyContainer-card"
            style={{
              display: 'flex',
              flexDirection: 'row',
              minWidth: '1200px',
              maxWidth: '1200px',
              height: '300px',
              margin: '0 auto',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            {plans &&
              plans.map((v, i) => {
                return (
                  <>
                    {i <= 1 && (
                      <div style={{ height: '194px' }}>
                        <SubscriptionLayout
                          Icons={v.Icons}
                          subIconTitle={v.subIconTitle}
                          subPrice={utils.fromWei(v.amount)}
                          subTarget={v.target}
                          frequency={v.frequency}
                          planId={v.planId}
                        />
                      </div>
                    )}
                  </>
                );
              })}
          </div>
          <div
            style={{ color: 'white', fontSize: '40px', margin: '40px 0 20px' }}
          >
            <FaBoxOpen color="#fff" style={{ marginRight: '10px' }} />
            Artist
          </div>
          <div
            className="buyContainer-card"
            style={{
              display: 'flex',
              flexDirection: 'row',
              minWidth: '1200px',
              maxWidth: '1200px',
              height: '300px',
              margin: '0 auto',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            {plans &&
              plans.map((v, i) => {
                return (
                  <>
                    {i > 1 && i <= 5 && (
                      <div>
                        <SubscriptionLayout
                          Icons={v.Icons}
                          subIconTitle={v.subIconTitle}
                          subPrice={utils.fromWei(v.amount)}
                          subTarget={v.target}
                          frequency={v.frequency}
                          planId={v.planId}
                        />
                      </div>
                    )}
                  </>
                );
              })}
          </div>

          <div
            style={{ color: 'white', fontSize: '40px', margin: '40px 0 20px' }}
          >
            <FaUserFriends color="#fff" style={{ marginRight: '10px' }} />
            User
          </div>
          <div
            className="buyContainer-card"
            style={{
              display: 'flex',
              flexDirection: 'row',
              minWidth: '1200px',
              maxWidth: '1200px',
              height: '300px',
              margin: '0 auto',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            {plans &&
              plans.map((v, i) => {
                return (
                  <>
                    {i > 5 && (
                      <div>
                        <SubscriptionLayout
                          Icons={v.Icons}
                          subIconTitle={v.subIconTitle}
                          subPrice={utils.fromWei(v.amount)}
                          subTarget={v.target}
                          frequency={v.frequency}
                          planId={v.planId}
                        />
                      </div>
                    )}
                  </>
                );
              })}
          </div>

          <div className="buyFooter">
            <h3>
              To use the service, users must subscribe. <br />
              The ability to listen to music is provided only to users who
              purchase a subscription, and payments must be made every month.
            </h3>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default SubscriptionBuy;
