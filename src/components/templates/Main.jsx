import "./Main.css"
import React from "react"
import Hearder from "./Header"

export default props => {
    return <React.Fragment>
        <Hearder {...props}/>
        <main className="content">
            Conteudo
    </main>
    </React.Fragment>
}