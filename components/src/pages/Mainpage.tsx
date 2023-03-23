import ClassInput from '../components/ClassInput';
import ClassCardsBooks from '../components/ClassCardsBooks';
import * as objBooks from '../date.json';

export const Mainpage = () => {
  return (
    <>
      <h1>RS-Books</h1>
      <ClassInput />
      <ClassCardsBooks {...objBooks} />
    </>
  );
};
