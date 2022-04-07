import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className='flex justify-center p-6 w-screen h-screen bg-indigo-300 overflow-y-auto'>
            <div className='max-w-md'>
                <div className='flex items-center justify-center mb-4 text-xs 
                text-white-600 font-semibold uppercase tracking-wide'>
                    <Link className='mx-2 px-4 py-2 rounded-x1 hover:bg-pink-200 transition-all ease-in-out'
                        to="/Home">
                        Home
                    </Link>
                    <Link className='mx-2 px-4 py-2 rounded-x1 hover:bg-pink-200 transition-all ease-in-out'
                        to="/About">
                        About
                    </Link>
                </div>
            </div>
        </div>
    )
}