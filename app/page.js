import Image from 'next/image';
import Navbar from './components/Navbar';
import 'material-icons/iconfont/material-icons.css';
import Content from './components/Content';
export default function Home() {
  return (
    <main className=''>
      <Navbar />
      <Content/>
    </main>
  );
}
