import {AiOutlinePieChart,AiOutlineSchedule} from 'react-icons/ai'
import {BsTagsFill,BiUserCircle,IoSettingsOutline} from 'react-icons/all'

const SideNavBar = () => {
  return (
    <div className="bg-black text-white p-6 px-14 w-fit rounded-2xl mr-12 flex flex-col">
        <div className="font-bold text-4xl mb-4">Board.</div>
        <ul className="pt-6 text-xl">
            <li className='mb-6'><AiOutlinePieChart className='inline mr-2'/> <span>Dashboard</span> </li>
            <li className='mb-6'><BsTagsFill className='inline mr-2'/> Transactions</li>
            <li className='mb-6'><AiOutlineSchedule className='inline mr-4'/>Schedules</li>
            <li className='mb-6'><BiUserCircle className='inline mr-4'/>Users</li>
            <li className='mb-6'><IoSettingsOutline className='inline mr-4' />Settings</li>
        </ul>
        <a href="" className="block mt-auto">Help</a>
        <a href="" className=" inline-block">Contact us</a>
    </div>
  )
}

export default SideNavBar