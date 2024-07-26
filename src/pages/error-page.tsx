import { useRouteError } from 'react-router-dom';

interface RouteError {
  statusText?: string;
  message?: string;
}

function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, That route doesn't exist in Marvel Hero App.</p>
      <p>
        <i>Error: {error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
