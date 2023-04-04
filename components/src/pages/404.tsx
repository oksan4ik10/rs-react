import { Link } from 'react-router-dom';
export const Notfound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>
        This page does not exist. Go <Link to="/">home</Link>
      </p>
    </div>
  );
};
