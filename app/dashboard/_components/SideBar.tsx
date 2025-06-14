"use client"
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaHome, FaWpexplorer } from "react-icons/fa";
import { GrSecure } from 'react-icons/gr';
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2';
interface MenuItem {
  id: number;
  name: string;
  icon: any;
  path: string;
}

const SideBar: React.FC = () => {
  const Menu: MenuItem[] = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome/>,
      path: '/dashboard',
    },
    {
      id: 2,
      name: 'Explore',
      icon: <HiOutlineSquare3Stack3D/>,
      path: '/dashboard/explore',
    },{
      id: 3,
      name: 'Upgrade',
      icon: <FaWpexplorer/>,
      path: '/dashboard/upgrade',
    },{
      id: 4,
      name: 'Logout',
      icon: <GrSecure/>,
      path: '/dashboard/logout',
    },
    // You can add more menu items here
  ];
  const path = usePathname();
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
      <Image alt='logo' src="/lgoog.svg" width={160} height={100} />
      <hr className='my-5' />

      {/* Render Menu Items */}
      <ul>
        {Menu.map((item) => (
            <Link href={`${item.path}`} key={item.id}>
                <div key={item.id} className={`gap-2 flex items-center text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-2 ${item.path==path&&"bg-gray-100 text-black"}`}>
                <div className='text-2xl'>{item.icon}</div>
                <h2>{item.name}</h2>
            </div>
            </Link>
        ))}
      </ul>
      <div className=' absolute bottom-10 w-[80%]'>
        <Progress value={33}/>
        <h2 className='text-sm my-2'>3 Out Of 5 Plans Created</h2>
        <h2 className='text-xs text-gray-500'>Upgrade your plan for unlimited Course</h2>
      </div>
    </div>
  );
};

export default SideBar;