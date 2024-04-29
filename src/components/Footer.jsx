import logo from '../assets/logo.svg'
import facebook from '../assets/facebook1.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer pt-10 pb-14 max-w-[1440px] mx-auto px-5">
                <aside className='max-w-[300px]'>
                    <img src={logo}></img>
                    <p className='mt-3 text-base font-semibold'>Discover a place to call your own where dreams come home.</p>
                </aside>
                <nav>
                    <h6 className="text-2xl text-black font-semibold mb-2">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="text-2xl text-black font-semibold mb-2">Contact Us</h6>
                    <a className="link link-hover">Feni Sadar, Feni, Bangladesh</a>
                    <a className="link link-hover">+88 01608272038</a>
                    <a className="link link-hover">roam@qodeinteractive.com</a>
                </nav>
                <nav>
                    <h6 className="text-2xl text-black font-semibold mb-2">Follow Us</h6>
                    <div className='flex gap-4'>
                        <div className='w-[47px] h-[47px] rounded-full flex items-center justify-center social'>
                            <img src={instagram}></img>
                        </div>
                        <div className='w-[47px] h-[47px] rounded-full flex items-center justify-center social'>
                            <img src={facebook}></img>
                        </div>
                        <div className='w-[47px] h-[47px] rounded-full flex items-center justify-center social'>
                            <img src={twitter}></img>
                        </div>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center py-4 bg-[#f0f8ff] text-black font-medium">
                <p className="text-base">Copyright © 2024 - All right reserved by My Home Industries Ltd.</p>
            </footer>
        </div>
    );
};

export default Footer;