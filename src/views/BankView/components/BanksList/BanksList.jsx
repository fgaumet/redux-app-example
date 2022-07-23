import React from 'react';
import { connect } from 'react-redux';
import DonutChart from 'react-donut-chart';
import './styles.css';

const BanksList = ({ banks }) => {

  let data = [];
  let chartData = [];
  let total = 0.0; // el total del dinero que se depositó juntando todos los bancos
  let new_total = 0.0; // el total del dinero que se cobraría dentro de 30 dias
  // juntando todos los bancos

  /*
  Formato de data

  {
    name: , // nombre del banco
    amount: , // monto de dinero que está depositado
    percentage: , // porcentaje que el monto representa del total
    interest: , // dinero que cobraría de aca a 30 días
  }
  */

  console.log('banks', banks);

  banks.map(bank => {
    total += parseFloat(bank.amount);
  })

  console.log('total', total);

  data = banks.map(el => {
    let percentage = (el.amount * 100.0)/total;
    let interest = ((el.amount * (el.bank_interest/100.0))/365) * 30;
    console.log('\npercentage', percentage);
    console.log('interest', interest);
    console.log('inside banks', el);
    return [...data, { name: el.name, amount: el.amount, percentage, interest }]
  });

  console.log('data', data, '\n\n');

  data.map(el => {
    const { name, percentage } = el[0];
    console.log('chart name', name);
    chartData.push({ label: name, value: percentage });
  });

  data.map(el => {
    new_total += parseFloat(el[0].interest);
  })

  // calcular el total del dinero
  // calcular el porcentaje que representa cada uno

  console.log('chartData', chartData.length);

  return (
    <div className='banks-list'>
      { chartData.length !== 0 &&
        <div>
          <h1>Lista de los bancos</h1>
          <DonutChart data={chartData} />
        </div>
      }
      { total !== 0.0 &&
        <div>
          <h2>Total dinero depositado</h2>
          <p>{total}</p>
        </div>
      }
      { new_total !== 0.0 &&
        <div>
          <h2>Dinero extra a cobrar</h2>
          <p>{new_total}</p>
        </div>
      }
    </div>
  );
};

BanksList.propTypes = {};

BanksList.defaultProps = {};

export default connect((state) => ({ banks: state.bankReducer.banks }))(
  BanksList,
);
