import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'
import About from './components/about'
import Home from './components/home'
import { Router,Route } from 'react-router'

export default class App extends Component{
    render() {
        return(
            <div>
                <div>
                   <NavLink to='/home'>Home</NavLink>&nbsp;&nbsp;&nbsp;
                   <NavLink to='/about'>About</NavLink>
                </div>
                <div>
                    <Router>
                        <Route path="/" component={App}/>
                        <Route path="home" component={Home} />
                        <Route path="about" component={About} />
                    </Router>
                </div>
               

            </div>
        )
    }
}
