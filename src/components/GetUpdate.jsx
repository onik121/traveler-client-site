import img from '../assets/update.png'

const GetUpdate = () => {

    return (
        <div className='update-container rounded-3xl bg-[#f7f8fa] overflow-hidden'>
            <div>
                <img src={img}></img>
            </div>
            <div className='flex items-center justify-center text-center'>
                <div>
                    <h1 className='text-4xl font-semibold text-black mb-4'>Get Updates & More</h1>
                    <h4 className='text-lg font-medium'>Thoughtful thoughts to your inbox</h4>
                    <div className='mt-5 flex gap-2'>
                        <input type="email" name="" id="" />
                        <button className='subscribe'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default GetUpdate;