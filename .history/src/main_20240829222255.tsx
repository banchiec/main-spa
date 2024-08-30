import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions:  {
    queries: {
      staleTime: 10*(60*1000),
      cacheTime: 15*(60*1000),
    }
  }
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
