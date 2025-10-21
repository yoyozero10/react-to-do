import './components/todo/todo.css'
import TodoDesc from './components/todo/TodoDesc'
import TodoInput from './components/todo/TodoInput'
import ReactLogo from './assets/react.svg'
import React from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { getUserInforAPI } from './services/api.service'
import { AuthContext } from './components/context/auth.context'
import { useContext } from 'react'
import { Spin } from 'antd';

const App = () => {

  const { setUser, isAppLoading,setIsAppLoading } = useContext(AuthContext);

  const fetchUserInfor = async () => {
    try {
      const res = await getUserInforAPI();
      if (res && res.data) {
        setUser(res.data);
      }
    } catch (error) {
      console.log("Error fetching user info:", error);
    } finally {
      setIsAppLoading(false);
    }
  }

  useEffect(() => {
    fetchUserInfor();
  }, []);

  return (
    <>
      {isAppLoading === true ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><Spin size="large"></Spin></div>
        :
        <>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
      }
    </>
  )
}

export default App
