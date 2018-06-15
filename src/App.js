import React, { Component } from "react"
import logger from "redux-logger"
import MiniApp from "./MiniApp"
import miniAppSaga from "./MiniApp/saga"
import reducer from "./MiniApp/reducer"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import { createBrowserHistory } from "history"
import { routerMiddleware, connectRouter } from "connected-react-router"
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()
const history = createBrowserHistory()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
var middlewares = [sagaMiddleware]
//console.log("__DEV__", __DEV__)
middlewares = [...middlewares, logger]

const store = createStore(
	connectRouter(history)(reducer()),
	composeEnhancer(applyMiddleware(...middlewares, routerMiddleware(history))),
)
export const runSaga = sagaMiddleware.run
runSaga(miniAppSaga)

const asyncReducers = {}

export const getNewReducer = (data, newModuleInfo) => {
	asyncReducers[newModuleInfo.name] = newModuleInfo.reducer
	store.replaceReducer(reducer(asyncReducers))
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<MiniApp history={history} />
			</Provider>
		)
	}
}

export default App
