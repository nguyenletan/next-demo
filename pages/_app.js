import React from 'react'
import App, { Container } from 'next/app'
import Head from "next/head";
import Footer from '../components/Footer'
import SideBar from  "../components/Sidebar"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import "../static/azia.css"
import "../static/typicons-font/typicons.css"
import "../static/ionicons/css/ionicons.min.css"


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowSidebar: true}
  }
  
  toggleSidebar() {
    this.setState({isShowSidebar: !this.state.isShowSidebar })
  }
  
  getSideBarClass() {
    if(window.matchMedia('(min-width: 992px)').matches) {
      return "az-sidebar-hide"
    } else {
      return "az-sidebar-show"
    }
  }
  render () {
    const { children } = this.props
    return (
      <>
        <Head>
        <title>EVOLUTION WELLNESS</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Responsive Bootstrap 4 Dashboard Template" />
        <meta name="author" content="nguyenletan" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Raleway:400,500,600,700,800" rel="stylesheet"/>
      </Head>
        <div className={`az-body az-body-sidebar ${this.state.isShowSidebar ? '' : this.getSideBarClass()}`}>
          <SideBar/>
          <div className="az-content az-content-dashboard-two">
            <Header toggleSidebarHandler={() => {this.toggleSidebar()}}/>
            {children}
            <Footer/>
          </div>
        </div>
      </>
    )
  }
}

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
