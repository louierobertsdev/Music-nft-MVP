import { Button } from '../../homepage/Button';
import { FaFire } from 'react-icons/fa';
import React from 'react';
import { Global } from '../SubscriptionBuyStyle';
import { IconContext } from 'react-icons/lib';

<Global />;
const FreeSubscription = () => {
  return (
    <>
      <IconContext.Provider value={{ size: 60 }}>
        <div className="buyWrapper">
          <div className="buyContainer">
            <div className="buyContainer-card buyContainer-cardInfo">
              <div className="buyIcon">
                <Button buttonSize="btn--large" buttonColor="primary">
                  <FaFire />
                  <>
                    <br />
                  </>
                  Event Plan
                </Button>
              </div>
              <div className="buyInfoContainer">
                <h1>0$</h1>
              </div>
              <div className="buyInfoText">
                <h2>
                  Only members who sign up within 3 months of launch can use the
                  membership fee and monthly subscription fee for free.
                </h2>
                <h2>User + Artist Benefits</h2>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default FreeSubscription;
