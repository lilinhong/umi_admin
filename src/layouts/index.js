import React, {Fragment} from 'react'
import ErrorBoundary from '@/components/ErrorBoundary'
import BasicLayout from './basicLayout'
import SimpleLayout from './simpleLayout'

function Layout(props) {
  console.log('props', props)
  if (props.location.pathname === '/login') {
    return <ErrorBoundary>
      <SimpleLayout>
        { props.children }
      </SimpleLayout>
    </ErrorBoundary>
  }

  return (
    <Fragment>
      <ErrorBoundary>
        <BasicLayout>
          { props.children }
        </ BasicLayout>
      </ErrorBoundary>
    </Fragment>
  );
}

export default Layout