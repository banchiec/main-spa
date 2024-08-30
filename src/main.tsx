import { BrowserRouter as Router } from "react-router-dom"
import { QueryClient, QueryClientProvider } from 'react-query'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { DataProvider } from "./context/index.ts"

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
      <Router>
        <DataProvider>
          <App />
        </DataProvider>
      </Router>
    </QueryClientProvider>
)
