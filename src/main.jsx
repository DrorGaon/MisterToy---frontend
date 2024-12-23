import { createRoot } from 'react-dom/client'
import { RootCmp } from './RootCmp.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RootCmp />
    </Provider>
)
