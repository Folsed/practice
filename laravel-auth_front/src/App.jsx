import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import AppRouter from './router'
import { AuthProvider } from './providers/AuthProvider'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </QueryClientProvider>
    )
}

export default App
