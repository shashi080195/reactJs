import React, { Component } from "react"
import logger from "redux-logger"
import MiniApp from "./MiniApp"
import miniAppSaga from "./MiniApp/saga"
import reducer from "./MiniApp/reducer"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()
var middlewares = [sagaMiddleware]
//console.log("__DEV__", __DEV__)
middlewares = [...middlewares, logger]

const store = createStore(reducer(), applyMiddleware(...middlewares))
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
				<MiniApp />
			</Provider>
		)
	}
}

export default App
