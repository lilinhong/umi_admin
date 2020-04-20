import React, {Fragment} from 'react'
import ErrorBoundary from '@/components/ErrorBoundary'
import BasicLayout from './basicLayout'
import SimpleLayout from './simpleLayout'

function Layout(props) {
  if (props.location.pathname === '/user/login') {
    return (
      <Fragment>
        <ErrorBoundary>
          <SimpleLayout>
            {props.children}
          </SimpleLayout>
        </ErrorBoundary>
      </Fragment>
    )
  }
  return (
    <Fragment>
      <ErrorBoundary>
        <BasicLayout>
          {props.children}
        </ BasicLayout>
      </ErrorBoundary>
    </Fragment>
  );
}

export default Layout