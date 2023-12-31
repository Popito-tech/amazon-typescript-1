import {LuMenu} from 'react-icons/lu'

const BottonHeader = () => {
  return (
    <div className='w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center'>
        <p className='flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>
            <LuMenu className='text-xl'/>ALL
        </p>
        <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>Todays Deals</p>
        <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>Customer Service</p>
        <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>Registry</p>
        <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>Gift Cards</p>
        <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300'>Sell</p>
        <p className='hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 text-amazon_yellow hover:text-red-400 cursor-pointer duration-300'>Sign Out</p>
    </div>
  )
}

export default BottonHeader