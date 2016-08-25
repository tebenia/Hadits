import React from 'react';

export const Index = () => (
  <div className="container">
    <h1>Welcome to Hadits</h1>
    <a className="button button-primary" href="#">Anchor button</a>
    <button className="button-primary">Button element</button>
    <input className="button-primary" type="submit" value="submit input"></input>
    <input className="button-primary" type="button" value="button input"></input>
    <div className="row">
      <div className="one column">One</div>
      <div className="eleven columns">Eleven</div>
    </div>

    <div className="row">
      <div className="two columns">Two</div>
      <div className="ten columns">Ten</div>
    </div>

    <div className="row">
      <div className="one-third column">1/3</div>
      <div className="two-thirds column">2/3</div>
    </div>
    <div className="row">
      <div className="one-half column">1/2</div>
      <div className="one-half column">1/2</div>
    </div>
  </div>
);
