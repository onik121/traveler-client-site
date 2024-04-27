
import { Link } from 'react-router-dom';
import img from '../assets/404.png'

const Error = () => {
    return (
        <div className='max-w-[1440px] mx-auto px-5 flex items-center justify-center h-screen'>
            <div className='text-center'>
                <div className='flex justify-center'>
                    <img src={img}></img>
                </div>
                <h1 className='text-5xl text-black font-medium mt-4 mb-3'>Opps! Page Not Found</h1>
                <Link to={'/'}><button className='go-back mt-5'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default Error;