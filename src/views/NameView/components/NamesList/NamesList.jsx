import React from 'react';
import { connect } from 'react-redux';

const NamesList = ({ names }) => {

  return (
    <table>
      <tbody>
        {names.map((name) => (
          <tr key={name}>
            <td>{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

NamesList.propTypes = {};

NamesList.defaultProps = {};

export default connect((state) => ({ names: state.nameReducer.names }))(
  NamesList,
);
