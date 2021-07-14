import React, { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';
import { StateContext } from './StateContext';
import { State } from './StateContext';

interface Props{
  exact: boolean,
  path: string
}

const PrivateRoute: React.FC<Props> = ({ children, exact, path}) => {
  // redirects to login if user is not authorized
  const [state] = useContext(StateContext) as [State];

  return(
    <Route>
      {state.isAuthorized ? children : <Redirect to="/join"/>}
    </Route>
  );
}

export default PrivateRoute;
