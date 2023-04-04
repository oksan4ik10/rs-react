import { InputHookSearchMain } from '../components/InputHookSearchMain';
import { CardsBooksHook } from '../components/CardsBooksHook';
import * as objBooks from '../date.json';

export const Mainpage = () => {
  return (
    <>
      <h1>RS-Books</h1>
      <InputHookSearchMain />
      <CardsBooksHook {...objBooks} />
    </>
  );
};
