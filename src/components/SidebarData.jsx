import React from 'react';
import { AiFillHome, AiOutlineLogout } from 'react-icons/ai';
import { IoMdPeople } from 'react-icons/io';
import { BsFillPersonFill } from "react-icons/bs"
import { BiFileFind } from "react-icons/bi"

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiFillHome />,
  },
  {
    title: 'Find People',
    path: '/home/findpeople',
    icon: <BiFileFind />,
  },
  {
    title: 'Connections',
    path: '/home/connections',
    icon: <IoMdPeople />,

  },
  {
    title: 'Professional Consultants',
    path: '/home/professionalconsultants',
    icon: <BsFillPersonFill />,

  },
  {
    title: 'Logout',
    path: '/login',
    icon: <AiOutlineLogout />,

  }
];