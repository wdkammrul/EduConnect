/* eslint-disable react/prop-types */

// step-4 
const Service = ({service}) => {

    console.log(service.name)

    const { name, id, image, price, description,button } = service

    return (
        <div>
            {/* step-5  */}
            <div className="card card-compact w-full h-[320px] bg-base-100 shadow-xl">
                <figure><img className="w-full h-60" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary">{button}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;