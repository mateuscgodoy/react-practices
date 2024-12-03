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
  return (
    <section>
      <input
        type='radio'
        name={name}
        id={id}
        disabled={disabled !== undefined ? disabled : false}
        defaultChecked={!!current && current === id}
        onInput={() => {
          onChange(id);
        }}
      />
      <label htmlFor={id}>{label}</label>
    </section>
  );
}
