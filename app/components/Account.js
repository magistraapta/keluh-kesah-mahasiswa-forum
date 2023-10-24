import Image from 'next/image';
import React from 'react';
import DefaultProfile from '../assets/default.jpg'
export default function Account() {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
            <Image
            src={DefaultProfile}
            alt='profile-pict'
            width={32}
            height={32}
            />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary-content rounded-box w-52 text-black">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  );
}
