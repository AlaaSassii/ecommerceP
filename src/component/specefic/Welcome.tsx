import Shop from '../../assets/shop.webp'
const Welcome = () => {
    return (
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-80%] w-[80%] h-[200px]'>
            <div className='welcome flex items-center'>
                <div className='basis-[70%]'>
                    <h1 className='text-6xl font-bold bg-gradient-to-r to-blue-500 from-violet-600 text-transparent bg-clip-text'>Welcome to our Website</h1>
                    <p className='mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A provident nam laudantium nisi beatae tempore!</p>
                    <p className='mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ab magnam natus pariatur facere repudiandae consequuntur architecto, cupiditate quaerat aperiam vero ad veniam quod. Perferendis.</p>
                    <p className='mt-1' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsam.</p>
                    <button className=' mt-2 w-[100px] h-[30px] bg-red-700 rounded text-white bg-gradient-to-r from-blue-500 to-green-500 '>check it out</button>
                </div>
                <div className=' hidden sm:block flex-1 bg-black '>
                    <img src={Shop} alt="" className='w-[100%] h-[400px]' />
                </div>
            </div>
        </div>
    )
}

export default Welcome