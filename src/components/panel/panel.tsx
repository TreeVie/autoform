import React from 'react'
import "./panel.less"

export type paneltype = 'baseinput'|'time'|'select'|'radio'|'checkbox';
interface PanelPorps{
    type:paneltype;
    options?:PanelOptions;
}

export default class Panel extends React.Component<PanelPorps>{
    defauleProps = {
        type:"baseinput",
        options:{}
    }
    render(){
        return (
            <ul className="panel">
                <Item name={NameOptions.label} required/>
                <Item name={NameOptions.key} required/>
                <Item name={NameOptions.prefix}/>
                <Item name={NameOptions.suffix}/>
            </ul>
        )
    }
}

function Item({name,required=false}){
    return (
        <li className="options">
            <label htmlFor="labelname" className={required?"required":""}>{name}</label>
            <input id="labelname"/>
        </li>
    )
}



// 配置所有的可用项

interface PanelOptions{
    // 表单的名称
    label:String,
    // 前缀的文案
    prefix?:String,
    // 后缀的文案
    suffix?:String,
    // 是否必选 默认是false
    required?:Boolean,
    rules:Rule[],
}

enum NameOptions{
    label="名称",
    prefix="前缀",
    suffix="后缀",
    required="必须",
    rules="应用规则",
    key="键值"
}

enum Rule{
    string,
    number,
    object,
    date,
    float,
    int,
    mail,
    url,
    hex
}