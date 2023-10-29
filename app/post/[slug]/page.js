import cardData from '@/app/dummyData';
import Navbar from '@/app/components/Navbar';
import Comment from '../Comment';


export default function page({ params }) {
  return (
    <div>
      <Navbar />
      <div className=' w-full mt-5 flex justify-center items-center'>
        <div className='w-9/12 h-5/6 bg-base-300 p-6 shadow-lg rounded-xl'>
          <h3 className=' text-2xl font-bold'>hello world</h3>
          <div className='mt-4'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <Comment/>
      
    </div>
  );
}
