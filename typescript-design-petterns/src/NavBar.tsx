import { Link } from "react-router-dom"

function NavBar() { 
    return (
        // things we need on the nav bar:
        // Logo Icon, home, about, patterns as a drop down? 
        <nav className="flex space-x-1.5 text-3xl border-2 border-gray-500 p-3.5 m-1 rounded-lg font-bold bg-blue-400 justify-between">
            <Link to="/" >
                Home
            </Link>
            <div> About </div>
            {/* patterns will be its own component eventually just need to stub out the navbar for now */}
            <div> Patterns </div>
         </nav>
    )
}

export { NavBar }