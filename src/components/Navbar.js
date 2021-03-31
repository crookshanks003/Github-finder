function Navbar({title}) {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className="fab fa-github"/> {title}    
            </h1>                
        </nav>
    )
}

Navbar.defaultProps = {
    title: "Github Finder" 
};
export default Navbar
