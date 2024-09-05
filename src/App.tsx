import { Component } from 'react'
import { useRoutes } from 'react-router-dom';
import { mainRoutes } from './config';
import './App.css'

const Noop = ({children}: React.PropsWithChildren) => {
  return <>{children}</>
}

const App: React.FC =({pageProps}: any) => {
  const routing = useRoutes([mainRoutes])
  const Layout = (Component as any).Layout || Noop

  return (
    <Layout pageProps={pageProps}>
      {routing}
    </Layout>
  )
}

export default App
