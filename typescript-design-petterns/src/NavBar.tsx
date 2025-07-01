function NavBar() { 
    return (
        // things we need on the nav bar:
        // Logo Icon, home, about, patterns as a drop down? 
        <nav>
            <div> Icon </div>
            <div> Home </div>
            <div> About </div>
            {/* patterns will be its own component eventually just need to stub out the navbar for now */}
            <div> Patterns </div> 
         </nav>
    )
}

export { NavBar }