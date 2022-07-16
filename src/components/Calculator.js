import './Calculator.css';
import React from 'react';
import Button from './Button';
import Screen from './Screen';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <article className="calculator">
        <Screen cName="screen" result="0" />
        <Button bgColor="btn-gray" btnRef="AC" />
        <Button bgColor="btn-gray" btnRef="+/-" />
        <Button bgColor="btn-gray" btnRef="%" />
        <Button bgColor="btn-orange" btnRef="÷" />
        <Button bgColor="btn-gray" btnRef="7" />
        <Button bgColor="btn-gray" btnRef="8" />
        <Button bgColor="btn-gray" btnRef="9" />
        <Button bgColor="btn-orange" btnRef="x" />
        <Button bgColor="btn-gray" btnRef="4" />
        <Button bgColor="btn-gray" btnRef="5" />
        <Button bgColor="btn-gray" btnRef="6" />
        <Button bgColor="btn-orange" btnRef="-" />
        <Button bgColor="btn-gray" btnRef="1" />
        <Button bgColor="btn-gray" btnRef="2" />
        <Button bgColor="btn-gray" btnRef="3" />
        <Button bgColor="btn-orange" btnRef="+" />
        <Button bgColor="btn-gray zero" btnRef="0" />
        <Button bgColor="btn-gray" btnRef="." />
        <Button bgColor="btn-orange" btnRef="=" />
      </article>
    );
  }
}

export default Calculator;
