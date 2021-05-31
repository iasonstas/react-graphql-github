import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const WithLayoutRoute = props => {
  const { layout: Layout, component: Component, layoutProps, location, head, ...rest } = props;
  // Optional window scroll to top of the page.
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout {...layoutProps} head={head}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

WithLayoutRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  layoutProps: PropTypes.object
};

export default WithLayoutRoute;
