import React from 'react'
import {Outlet} from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { Navbar, SmallSidebar } from '../components'
import BigSideBar from '../components/BigSideBar'
import { useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import { checkDefaultTheme } from '../App'


const DashboardContext = createContext()



const DashboardLayout = () => {
  
  // temp
  const user = {name:'Chinmay'}
  const [showSidebar,setShowSidebar] =  useState(false)
  const [isDarkTheme,setisDarkTheme] =  useState(checkDefaultTheme())


  const toggleDarkTheme = ()=>{
    const newDarkTheme = !isDarkTheme
    setisDarkTheme(newDarkTheme)
    document.body.classList.toggle('dark-theme',newDarkTheme)
    localStorage.setItem('darkTheme',newDarkTheme)
  }

  const toggleSidebar = ()=>{
    setShowSidebar(!showSidebar);
  }

  const logoutUser = async ()=>{
    console.log('logout user')
  }


  return (
    <DashboardContext.Provider value={{user,showSidebar,isDarkTheme,toggleDarkTheme,toggleSidebar,logoutUser}}>
    <Wrapper>
    <main className="dashboard">
      <SmallSidebar/>
      <BigSideBar/>
      <div>
        <Navbar/>
        <div className="dashboard-page">
          <Outlet/>
        </div>
      </div>
    </main>
      
    </Wrapper>
    </DashboardContext.Provider>
  )
}

export const userDashboardContext = ()=>useContext(DashboardContext)

export default DashboardLayout
