import { h, render , Component} from 'preact';
import Routes from './routes'

 class App extends Component{
   render() {
     console.log(this.props)
     return Routes({...this.props})
   }
}

module.exports = App