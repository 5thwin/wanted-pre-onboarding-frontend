import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
export default function Home() {
  return <div className='pt-56 flex flex-col justify-center'>
    <h1 className='text-7xl text-center font-bold text-primary'>Todo List</h1>
    <p className='text-2xl text-center font-bold text-secondary'>Wanted Pre-Onboarding Assignment</p>
    <Link to={'/todo'} className='mt-5 flex justify-center items-baseline'>
      <button className='text-8xl font-bold text-secondary'>Go</button>
      <FaArrowRight className='text-6xl font-bold text-secondary animate-bounce-right' />
    </Link>
  </div>;
}
