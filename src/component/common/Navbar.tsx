import { BsSunFill } from 'react-icons/bs';
import { PiListDuotone } from 'react-icons/pi'
const Navbar = () => {
    return (
        <nav>
            <div className='border border-b-2 h-16 flex container justify-between items-center '>

                <h1>logo</h1>
                <div className='flex gap-2 items-center'>
                    <ul className='sm:flex hidden gap-2 cursor-pointer'>
                        <li>Home</li>
                        <li>Page1</li>
                        <li>Page2</li>
                        <li>Page3</li>
                    </ul>

                    <button className='p-2  h-8 flex items-center justify-center'>Sign in</button>
                    <button
                        className='border border-gray-1 w-[30px] h-[30px] flex items-center justify-center rounded'>
                        <BsSunFill />
                    </button>
                    <button className='border border-gray-1 w-[30px] h-[30px] flex items-center justify-center rounded'><PiListDuotone /></button>
                </div>
            </div>
            <ul className=' sm:flex hidden gap-2  cursor-pointer   '>
                <li>Home</li>
                <li>Page1</li>
                <li>Page2</li>
                <li>Page3</li>
            </ul>
        </nav>
    )
}

export default Navbar