import { useState, ChangeEvent, useEffect, FormEvent } from 'react';

interface IPropsInput {
  search: (q: string) => void;
}

export const InputHookSearchMain = (props: IPropsInput) => {
  const dateLocal = localStorage.getItem('date');
  let dateInput: string;
  if (dateLocal) dateInput = dateLocal;
  else dateInput = '';
  const [date, setDate] = useState(dateInput);

  useEffect(() => {
    localStorage.setItem('date', dateInput);
  }, [dateInput]);

  function inputDate(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setDate(value);
    localStorage.setItem('date', value);
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    props.search(date);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onInput={inputDate} value={date} placeholder="Search..." />
      </form>
    </>
  );
};
