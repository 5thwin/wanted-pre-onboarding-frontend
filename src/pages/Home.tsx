import { Link } from 'react-router-dom';

export default function Home() {
  return <div className='pt-56 flex flex-col justify-center'>
    <h1 className='text-7xl text-center font-bold text-primary'>Todo List</h1>
    <p className='text-2xl text-center font-bold text-secondary'>Wanted Pre-Onboarding Assignment</p>
    <Link to={'/todo'} className='mt-2 text-center'>
      <button className='text-6xl font-extrabold text-secondary'>Go</button>
    </Link>
  </div>;
}
