import React from "react"
import { Route, Switch } from "react-router"
import Auth from "../Containers/Auth"
import DashBoard from "../Containers/DashBoard"

const routes = (
	<Switch>
		<Route exact path="/" component={Auth} />
		<Route path="/dashboard" component={DashBoard} />
	</Switch>
)

export default routes
