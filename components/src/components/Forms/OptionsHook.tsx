import * as objBooks from '../../date.json';

export const OptionsHook = () => {
  const authors = Array.from(new Set(objBooks.books.map((item) => item.author)));
  return (
    <>
      <option value="Change author">Change author</option>
      {authors.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </>
  );
};
