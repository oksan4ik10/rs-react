import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

type FunctionalType = () => void;

interface IOpts {
  onShellReady: FunctionalType;
  onShellError: FunctionalType;
  onAllReady: FunctionalType;
  onError: FunctionalType;
}
export default function renderApp(url: string, opts: IOpts) {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    opts
  );
  return stream;
}
