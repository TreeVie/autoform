import React from "react";
import "./index.less";
import produce from "immer"
import {Dispatch} from 'redux'

interface ToolsProps {
    defaultValue?:string
    tools?: ToolProps[];
}
interface ToolProps {
    name: string;
    id: string;
    children?: ToolProps[];
}

export default class Tools extends React.PureComponent<ToolsProps> {
    static defaultProps = {
        defaultValue:"baseinput",
        tools: [
            {
                id: "baseinput",
                name: "基础输入框"
            },
            {
                id: "time",
                name: "时间选择"
            },
            {
                id: "select",
                name: "下拉框"
            },
            {
                id: "radio",
                name: "单选框"
            },
            {
                id: "checkbox",
                name: "多选框"
            }
        ]
    };

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
    }

    onClick(event: React.MouseEvent<HTMLUListElement>) {
        Array.prototype.map.call(event.currentTarget.children, el =>
            el.classList.remove("selected")
        );
        (event.target as HTMLUListElement).classList.add("selected");
    }
    onMouseMove(e: React.MouseEvent<HTMLLIElement>){
        let el = e.target as HTMLLIElement
        const x = e.pageX - el.offsetLeft
        const y = e.pageY - el.offsetTop
        el.style.setProperty('--x', `${ x }px`)
        el.style.setProperty('--y', `${ y }px`)
    }
    render() {
        const { tools,defaultValue } = this.props;
        return (
            <ul className="tools" onClick={this.onClick} >
                <li className="title">工具栏</li>
                <Search />
                {tools.map(tool => <li className={`tool ${defaultValue===tool.id?"selected":""}`} onMouseMove={this.onMouseMove} key={tool.id}><span>{tool.name}</span></li>)}
            </ul>
        );
    }
}

class Search extends React.PureComponent {
    render() {
        return (
            <li className="search">
                <input type="text" placeholder="search" />
            </li>
        );
    }
}

// reducer
const toolsOnChange = (state:any,action)=>produce(state,draft=>{
    switch (action.type){
        case "BASE_INPUT":
            draft.type="BASE_INPUT"
        return
    }
})