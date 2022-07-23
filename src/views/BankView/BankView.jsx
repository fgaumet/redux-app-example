import React from 'react';

import { BankContainer, BankForm, BanksList } from './components';

const BankView = () => {
  return (
    <div>
      <BankContainer />
      <BankForm />
      <BanksList />
    </div>
  );
};

export default BankView;
