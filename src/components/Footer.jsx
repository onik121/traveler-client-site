import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <div>
            <footer className="footer pt-10 pb-14 max-w-[1440px] mx-auto px-5">
                <aside className='max-w-[300px]'>
                    <img src={logo}></img>
                    <p className='mt-3 text-base font-semibold'>Discover a place to call your own where dreams come home.</p>
                </aside>
                <nav>
                    <h6 className="text-2xl text-black font-semibold mb-2">Explore</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="text-2xl text-black font-semibold mb-2">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="text-2xl text-black font-semibold mb-2">Follow</h6>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Twitter</a>
                </nav>
            </footer>
            <footer className="footer footer-center py-4 bg-[#31323c] text-white">
                <p className="text-base">Copyright © 2024 - All right reserved by My Home Industries Ltd.</p>
            </footer>
        </div>
    );
};

export default Footer;