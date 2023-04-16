import { useState, ChangeEvent, FormEvent } from 'react';
import { useAppSelector } from '../redux/hooks/redux';

interface IPropsInput {
  search: (q: string) => void;
}

export const InputHookSearchMain = (props: IPropsInput) => {
  const { searchQuery } = useAppSelector((state) => state.SearchInput);

  const [date, setDate] = useState(searchQuery);

  function inputDate(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setDate(value);
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
