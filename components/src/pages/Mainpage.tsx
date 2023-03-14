import ClassInput from "../components/ClassInput";
import * as objBooks from '../date.json';
export const Mainpage = () => {
  const books = objBooks.books;
  console.log(books);
  
  
    return (
      <div>
        <h1>Main Page</h1>
        <ClassInput/>
        <p>Tets Oksana Kalinina @oksan4ik10</p>
      </div>
    );
  };
  