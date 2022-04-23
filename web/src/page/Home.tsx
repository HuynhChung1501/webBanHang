import React, { useEffect, useState } from 'react'
import productApi from '../api/productApi'
import Product from '../component/Product'

import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

interface menu{
  items: Items[],
}

interface Items{
  key:any,
  icon:any,
  label:any,
}

const Home = () => {
  const [products, setProducts] = useState<any>()
  const [collapsed, setCollapsed] = useState<any>()

  useEffect(()=> {
    const main = async () => {
      try {
        const  res = await productApi.getAll()
        setProducts(res)
      } catch (error) {
          console.log("failed to fetch api", error);
      }
    }  
    main()
  }
  ,[])  

  const toggle = () => {
    setCollapsed(!collapsed)
  };


  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            // items={[
            //   {
            //     key: '1',
            //     icon: <UserOutlined />,
            //     label: 'nav 1',
            //   },
            //   {
            //     key: '2',
            //     icon: <VideoCameraOutlined />,
            //     label: 'nav 2',
            //   },
            //   {
            //     key: '3',
            //     icon: <UploadOutlined />,
            //     label: 'nav 3',
            //   },
            // ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Product products={products}/>
          </Content>
        </Layout>
      </Layout>
      
    </div>
  )
}

export default Home