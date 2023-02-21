import { Link, useLocation } from 'react-router-dom'

const NoMatch = () => {
  let location = useLocation();

  return (
    <div className='flex flex-col justify-center items-center'>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <Link to="/">
        <button className='bg-white text-black p-1 rounded'>to Home</button>
      </Link>
    </div>
  );
}

export default NoMatch