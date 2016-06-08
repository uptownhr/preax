import Router from 'preact-router';
import { h, Component } from 'preact';

const Home = () => <div> Home </div>
class About extends Component{
  constructor(props){
    super();
    console.log(props)
    this.state = props.state || ''
  }

  componentWillMount(){
    console.log('will mount')
  }

  componentDidMount(){
    console.log('did mount')
    setTimeout( () => {
      console.log('not updating')
      this.setState( {name: 'zzzzxcv'})
    },1000)
  }
  click(){
    console.log('clicked')
  }

  render(){
    console.log('rendering', this.state.name)
    return <div onClick={ e => alert("hi!") }>Testing About state - {this.state.name}</div>
  }
}

const Routes = (props) => {
  console.log(props.state, props.url)
  return <Router url={props.url} >
    <Home path="/" />
    <About path="/about" state={props.state} />
  </Router>
};

export default Routes