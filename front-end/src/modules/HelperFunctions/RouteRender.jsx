import React from 'react';
import {Route} from 'react-router-dom';

const RouteRender = ({routes}) => (
  <div className="RouteRender">
    {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route}/>))}
  </div>
)

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    render={props => (<route.component {...props} routes={route.routes}/>)}/>
)

export default RouteRender;
