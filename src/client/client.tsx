import * as React from "react"
import * as ReactDOM from "react-dom";
import { App } from "../app/App";
import { hot } from "react-hot-loader";

let AppHot = hot( module )( App );

ReactDOM.hydrate( <AppHot/>, document.getElementById('root') );
