import React from 'react';
import Product from '../components/Product';
import TopMenuNav from '../components/TopMenuNav';
import FAQ from '../components/FAQ';

export default class MechanicalKeyboards extends React.Component {
  render() {
    return (
        <div>
          <TopMenuNav/>
          <Product/>
          <FAQ/>
        </div>
    );
  }
}
