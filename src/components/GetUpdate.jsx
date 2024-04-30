import img from '../assets/update.png'

const GetUpdate = () => {

    return (
        <div className='update-container rounded-3xl bg-2 overflow-hidden'>
            <div>
                <img src={img}></img>
            </div>
            <div className='flex items-center justify-center text-center p-5 update-text-div'>
                <div>
                    <h1 className='text-4xl font-semibold mb-4 title text-color'>Get Updates & More</h1>
                    <h4 className='text-lg font-medium sub-title text-color'>Thoughtful thoughts to your inbox</h4>
                    <div className='mt-5 flex flex-wrap items-center justify-center gap-2'>
                        <input type="email" className='input' name="" id="" />
                        <button className='subscribe'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default GetUpdate;