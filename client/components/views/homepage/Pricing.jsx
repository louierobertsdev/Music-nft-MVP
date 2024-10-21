import React from 'react';
import Link from 'next/link';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Button } from './Button';
import { Global } from './pricingStyle';

function Pricing() {
  return (
    <>
      <Global />
      <IconContext.Provider value={{ color: '#fff', size: 64 }}>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Pricing</h1>
            <div className="pricing__container">
              <Link href="/subscriptionbuy">
                <div className="pricing__container-card pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>3 months free</h3>
                  <h4>0 ETH</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>free streaming</li>
                    <li>Free artist registration fee</li>
                    <li>NFT trading available for 3 months</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link href="/subscriptionbuy">
                <div className="pricing__container-cardInfo pricing__container-card">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>user</h3>
                  <h4>0.05 ETH ~</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>Unlimited Streaming Service</li>
                    <li>Playlist provided</li>
                    <li>Artist basket provided</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link href="/subscriptionbuy">
                <div className="pricing__container-cardInfo pricing__container-card">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>artist</h3>
                  <h4>0.1 ETH ~</h4>
                  <p>per month</p>
                  <ul className="pricing__container-features">
                    <li>Unlimited Streaming Service</li>
                    <li>NFT trading/auction available</li>
                    <li>NFT sound source registration possible</li>
                  </ul>
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Choose Plan
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
export default Pricing;
