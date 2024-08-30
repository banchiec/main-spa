import { BrowserRouter as Router } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions:  {
    queries: {
      staleTime: 10*(60*1000),
      cacheTime: 15*(60*1000),
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
 </Router>
)
