// reducer函数会接收到两个参数，之前的状态,动作对象
const inits = 0
export default function countReducer(preState = inits,action) {
    // 从action对象中获取：type、data
    const {type,data} = action
    switch(type) {
        case 'increment': 
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState;
    }

}
