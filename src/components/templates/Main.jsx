import "./Main.css"
import React from "react"
import Hearder from "./Header"

export default props => {
    return <React.Fragment>
        <Hearder {...props}/>
        <main className="content container-fluid">
            <div className="p3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>
}