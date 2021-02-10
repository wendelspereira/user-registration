import "./Logo.css"
import logo from '../../assets/images/logo.png'

export default props => {
    return <aside className="logo">
        <a href="/">
            <img src={logo} alt="logo"/>
        </a>
    </aside>
}