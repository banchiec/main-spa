import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Router } from 'react-router-dom'

const queryClient = new QueryClient({
  defaultOptions:  {
    queries: {
      staleTime: 10*(60*1000),
      cacheTime: 15*(60*1000),
    }
  }
})


createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
)
