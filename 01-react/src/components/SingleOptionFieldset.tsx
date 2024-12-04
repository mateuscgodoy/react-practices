import React from 'react';
import { RadioSection, RadioSectionType } from './RadioSection';

type SingleOptionProp = {
  legend?: string;
  data: RadioSectionType[];
  children?: React.ReactNode;
};

export function SingleOptionFieldset({
  data,
  legend,
  children,
}: SingleOptionProp) {
  const options = data.map((info) => <RadioSection key={info.id} {...info} />);

  return (
    <fieldset>
      {legend && <legend>{legend}</legend>}

      {options}
      {children}
    </fieldset>
  );
}
