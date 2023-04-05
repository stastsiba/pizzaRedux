import './body.scss';

import React from 'react';
import { BodyLine } from '../bodyLine/BodyLine';
import { SortBlock } from '../sortBlock/SortBlock';
import { Title } from '../title/Title';
import { Card } from '../card/Card';

export const Body = () => {
  return (
    <div>
      <BodyLine />
      <SortBlock />
      <Title />
      <Card />
    </div>
  );
};
