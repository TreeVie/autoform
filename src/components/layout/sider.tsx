import React from 'react'
import "./sider.less"

interface SiderProps{
    style?:React.CSSProperties
}

export default class Sider extends React.Component<SiderProps>{
    render(){
        let {style} = this.props;
        return (
            <div style={style} className="sider">{this.props.children}</div>
        )
    }
}