import { useState, ChangeEvent } from 'react';

export const InputHookSearchMain = () => {
  const dateLocal = localStorage.getItem('date');
  let dateInput: string;
  if (dateLocal) dateInput = dateLocal;
  else dateInput = '';
  const [date, setDate] = useState(dateInput);

  function changeInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setDate(value);
    localStorage.setItem('date', value);
  }
  return <input onInput={changeInput} value={date} placeholder="Search..." />;
};
