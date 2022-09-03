import React, { useState } from 'react';
import ButtonCalc from '@components/ButtonCalc';
import Pantalla from '@components/Pantalla';
import ButtonClear from '@components/buttonClearCalc';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('');
  const addInput = (val) => {
    setInput(input + val);
  };
  const clearInput = () => {
    setInput('');
  };
  const calcResult = () => {
    const regex = /[+-]?\d+[+-\\*]\d+/.test(input);
    const regex2 = /\d/.test(input);
    if (input && regex && regex2) setInput(evaluate(input));
    else {
      if (!input) alert('Por favor ingrese valores para realizar los cálculos');
      else alert('La operación no ha podido realizarse correctamente');
    }
  };
  const delInput = () => {
    setInput(input.toString().substring(0, input.length - 1));
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-start bg-[#1b1b37] md:py-10 p-2">
      <div className="flex flex-col bg-[#77cfe1] border-2 border-white rounded-xl p-5 w-[400px] md:h-[600px] h-[560px] md:gap-2 gap-1">
        <Pantalla input={input} />
        <div className="flex w-full gap-1 md:gap-2">
          <ButtonCalc children="1" eventHandler={addInput} />
          <ButtonCalc children="2" eventHandler={addInput} />
          <ButtonCalc children="3" eventHandler={addInput} />
          <ButtonCalc children="+" eventHandler={addInput} />
        </div>
        <div className="flex w-full gap-1 md:gap-2">
          <ButtonCalc children="4" eventHandler={addInput} />
          <ButtonCalc children="5" eventHandler={addInput} />
          <ButtonCalc children="6" eventHandler={addInput} />
          <ButtonCalc children="-" eventHandler={addInput} />
        </div>
        <div className="flex w-full gap-1 md:gap-2">
          <ButtonCalc children="7" eventHandler={addInput} />
          <ButtonCalc children="8" eventHandler={addInput} />
          <ButtonCalc children="9" eventHandler={addInput} />
          <ButtonCalc children="*" eventHandler={addInput} />
        </div>
        <div className="flex w-full gap-1 md:gap-2">
          <ButtonCalc children="=" eventHandler={calcResult} />
          <ButtonCalc children="0" eventHandler={addInput} />
          <ButtonCalc children="." eventHandler={addInput} />
          <ButtonCalc children="/" eventHandler={addInput} />
        </div>
        <div className="flex w-full gap-1 md:gap-2">
          <ButtonClear eventHandler={clearInput}>Clear</ButtonClear>
          <ButtonClear eventHandler={delInput}>Del</ButtonClear>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
