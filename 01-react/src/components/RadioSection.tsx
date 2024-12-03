export type RadioSectionType = {
  name: string;
  id: string;
  label: string;
  current?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange: (value: string) => void;
};

export function RadioSection({
  label,
  id,
  name,
  disabled,
  onChange,
  current,
}: RadioSectionType) {
  console.log('id', id, 'checked', !!current && current === id);
  return (
    <section>
      <input
        type='radio'
        name={name}
        id={id}
        disabled={disabled !== undefined ? disabled : false}
        defaultChecked={Boolean(current) && current === id}
        onInput={() => {
          onChange(id);
        }}
      />
      <label htmlFor={id}>{label}</label>
    </section>
  );
}
