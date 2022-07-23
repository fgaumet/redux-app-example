import React from 'react';

import { NameContainer, NameForm, NamesList } from './components';

import './styles.css';

const NameView = () => {
  return (
    <div className="name-view">
      <NameContainer />
      <NameForm />
      <NamesList />
    </div>
  );
};

export default NameView;
