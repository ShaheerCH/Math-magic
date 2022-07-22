import './Calculator.css';
import React, { useState } from 'react';
import Button from './Button';
import Screen from './Screen';
import calculate from '../logic/calculate';
import Header from './Header';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: 0,
    operation: null,
  });

  const onButtonPress = ({ target }) => {
    setState((state) => calculate(state, target.innerText));
  };

  const { total, next, operation } = state;

  return (
    <>
      <Header />
      <main className="calc">
        <h2>Let&apos;s do some math!</h2>
        <article className="calculator">
          <Screen total={total} next={next} operation={operation} />
          <Button bgColor="btn-gray" btnRef="AC" handleClick={onButtonPress} />
          <Button bgColor="btn-gray" btnRef="+/-" handleClick={onButtonPress} />
          <Button bgColor="btn-gray" btnRef="%" handleClick={onButtonPress} />
          <Button bgColor="btn-orange" btnRef="÷" handleClick={onButtonPress} />
          <Button bgColor="btn-gray" btnRef="7" handleClick={onButtonPress} />
          <Button bgColor="btn-gray" btnRef="8" handleClick={onButtonPress} />
          <Button bgColor="btn-gray" btnRef="9" handleClick={onButtonPress} />
          <Button bgColor="btn-orange" btnRef="x" handleClick={onButtonPress} />
          <Button bgColor="btn-gray" btnRef="4" handleClick={onButtonPress} />
          <Button bgColor="btn-gray" btnRef="5" handleClick={onButtonPress} />
          <Button bgColor="btn-gray" btnRef="6" handleClick={onButtonPress} />
          <Button bgColor="btn-orange" btnRef="-" handleClick={onButtonPress} />
          <Button bgColor="btn-gray" btnRef="1" handleClick={onButtonPress} />
          <Button bgColor="btn-gray" btnRef="2" handleClick={onButtonPress} />
          <Button bgColor="btn-gray" btnRef="3" handleClick={onButtonPress} />
          <Button bgColor="btn-orange" btnRef="+" handleClick={onButtonPress} />
          <Button
            bgColor="btn-gray zero"
            btnRef="0"
            handleClick={onButtonPress}
          />
          <Button bgColor="btn-gray" btnRef="." handleClick={onButtonPress} />
          <Button bgColor="btn-orange" btnRef="=" handleClick={onButtonPress} />
        </article>
      </main>
    </>
  );
};

export default Calculator;
