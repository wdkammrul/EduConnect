import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero w-[400px] md:w-[740px] lg:w-full mx-auto bg-teal-200 rounded-lg mt-10">
          
            <div className="hero h-[230px] md:h-[430px] rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/JR51ZT4/Learning.jpg)' }}>
                <div className="hero-overlay bg-opacity-75"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">Education Training</h1>
                        <p className="mb-5 text-2xl">We help you shape your career</p>
                        <Link to='/services'><button className="btn btn-primary">Red More Services</button></Link>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default Banner;