import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import ReactDom from 'react-dom'

import Main from '../components/templates/Main'
import Nav from '../components/templates/Nav'
import Footer from '../components/templates/Footer'
import Logo from '../components/templates/Logo'

export default props => {
    return <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Início"
            subtitle="Projeto Cadastro."/>
        <Footer />
    </div>
}
