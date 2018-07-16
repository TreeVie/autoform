import React from 'react'
import Sider from './sider'
import Content from './content'
import './layout.less'

interface LayoutProps{
    mode?:"vertical"|"horizon",
    className?:string
}

export default class Layout<T extends LayoutProps> extends React.Component<T>{
    static Header;
    static Sider;
    static Content;
    render(){
        let {mode='horizon',className} = this.props;
        className = className?`${className} `:""
        return (
            <div className={`${className}layout layout-${mode}`}>
                {this.props.children}
            </div>
        )
    }
}

Layout.Header  = Header;
Layout.Sider = Sider;
Layout.Content = Content;

function Header({children}){
    return (
        <header className="header">{children}</header>
    )
}