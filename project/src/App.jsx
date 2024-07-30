import { Provider } from 'react-redux'
import './App.css'
import { store } from './config/redux/store/store'
import AppRouter from './config/router/approuter'

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  )
}

export default App
