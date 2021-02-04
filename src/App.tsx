import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "routes";
import { getAccessToken } from "services/common/storage";
import store from "store";
import "./App.scss";

const NotFound: React.FC = () => <div>Page Not Found</div>;

/* TODO: Implement Page SignIn later */
const SignIn: React.FC = () => <div>Sign In</div>;

const App: React.FC = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index.toString()}
            exact
            path={route.path}
            component={
              // eslint-disable-next-line no-nested-ternary
              route.isAuth
                ? token
                  ? route.component
                  : SignIn
                : route.component
            }
          />
        ))}
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
