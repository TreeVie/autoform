import React from 'react'

export type paneltype = 'baseinput'|'time'|'select'|'radio'|'checkbox';
interface PanelPorps{
    type:paneltype;
    options?:any;
}

export default class Panel extends React.Component<PanelPorps>{
    render(){
        return (
            <div className="panel">

            </div>
        )
    }
}