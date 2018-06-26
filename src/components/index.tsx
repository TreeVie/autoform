import React from 'react'
import Layout from './layout/layout'
import Tools from './tools/index'
import Panel,{paneltype} from './panel/panel'
import 'css-doodle'

interface PanelState{
    panel:paneltype
}

export default class Main extends React.PureComponent<{},PanelState>{
    constructor(props){
        super(props)
        this.state={
            panel:'baseinput'
        }
    }
    render(){
        const {panel} = this.state;
        return (
            <Layout>
                {/* 左侧工具栏 */}
                <Layout.Sider>
                    <Tools/>
                </Layout.Sider>
                <Layout mode="horizon">
                    {/* 头部信息 */}
                    <Layout.Header>AutoForm</Layout.Header>
                    <Layout>
                        {/* 内容 */}
                        <Layout.Content></Layout.Content>
                        <Layout.Sider style={{boxShadow:'none'}}>
                            {/* 面板 */}
                            <Panel type={panel}/>
                        </Layout.Sider>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}