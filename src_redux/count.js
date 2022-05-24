import { render } from '@testing-library/react'
import React,{Component} from 'react'
import store from './redux/store'

export default class Count extends Component{
    state = {
        count: 0
    }
    componentDidMount() {
        store.subscribe(()=>{
            this.setState({})
        })
    }
    add = ()=>{
        console.log(store.getState())
        let num = Number(this.selectNum.value) 
        store.dispatch({type:'increment',data:num})
        // let num = Number(this.selectNum.value)  // 转成数字避免拼接
        // this.setState({
        //     count:num + count   // 不能count++ ,count++是先把count赋值再自增 ，此时state的count依然为0，重新赋值count仍为0
        // })
    }
    render() {
        let {count} = this.state
        return (
            <div>   
                <h1>当前求和:{store.getState()}</h1>
                <select ref={c=>this.selectNum = c}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>&nbsp;
                <button onClick={this.add}>+</button>&nbsp;
                <button>-</button>&nbsp;
            </div>
        )
    }
}
