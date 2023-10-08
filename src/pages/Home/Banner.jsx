import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero  bg-teal-200 rounded-lg mt-10">
            {/* <div className="hero-content flex-col lg:flex-row text-black">
                <img src="https://i.ibb.co/JR51ZT4/Learning.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold uppercase">Education Training</h1>
                    <p className="py-6 uppercase">We help you shape your career</p>
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div> */}


            <div className="hero h-[430px] rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/JR51ZT4/Learning.jpg)' }}>
                <div className="hero-overlay bg-opacity-75"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">Education Training</h1>
                        <p className="mb-5 text-2xl">We help you shape your career</p>
                        <Link to='/services'><button className="btn btn-secondary">Red More Services</button></Link>
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default Banner;