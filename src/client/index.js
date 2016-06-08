import { h, render } from 'preact';
import App from '../views/index'

render(<App state={window.__INITIAL_STATE} />, document.body)