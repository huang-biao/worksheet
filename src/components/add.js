import React from 'react'
import { Drawer, Button,Icon } from 'antd';
import Tag from './tags'
import InfoForm from './addfrom'

export default class Add extends React.Component{
    
    state = { visible: false}
    onClose = () => {
        this.setState({
          visible: false,
        })
      }
    showDrawer = () => {
          this.setState({
            visible: true,
          });
        }

    
      render() {
  
          return (
            <div>
              <Button type="primary" onClick={this.showDrawer}>
                人员添加
              </Button>
              <Drawer
                title="值班人员添加"
                width={520}
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
              >
         <div
                  style={{
                    width: '100%',
                    borderBottom: '1px dashed #e8e8e8',
                    borderRadius: '0 0 4px 4px',
                  }}
                >      
              <InfoForm></InfoForm> 
                </div>
                  <Tag/>
    
            <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    borderTop: '1px solid #e8e8e8',
                    padding: '10px 16px',
                    left: 0,
                    background: '#fff',
                    borderRadius: '0 0 4px 4px',
                  }}
                >               
                  <Button
                    style={{
                      marginRight: 8,
                    }}
                    onClick={this.onClose}
                  >  
                  <Icon type="left" />返回
                  </Button>
                </div>
              </Drawer>
            </div>
          );
        }
      
}


