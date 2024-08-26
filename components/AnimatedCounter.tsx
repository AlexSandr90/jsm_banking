/** @format */

'use client';

import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="d-full">
      <CountUp
        decimal=","
        prefix="USD "
        decimals={2}
        end={amount}
      />
    </div>
  );
};

export default AnimatedCounter;
