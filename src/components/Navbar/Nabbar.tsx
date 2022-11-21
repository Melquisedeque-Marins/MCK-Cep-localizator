const Navbar = () => {
    return (
        <nav className="navbar bg-light">

            <div className="container-fluid">
                <a className="navbar-brand">CEP Localizator</a>
                <form className="d-flex" role="search">
                    <input type="search" className="form-control me-2" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;