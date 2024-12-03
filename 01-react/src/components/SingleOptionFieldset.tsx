import { RadioSection, RadioSectionType } from './RadioSection';

type SingleOptionProp = {
  legend?: string;
  data: RadioSectionType[];
};

export function SingleOptionFieldset({ data, legend }: SingleOptionProp) {
  const options = data.map((info) => <RadioSection key={info.id} {...info} />);

  return (
    <fieldset>
      {legend && <legend>{legend}</legend>}

      {options}
    </fieldset>
  );
}
