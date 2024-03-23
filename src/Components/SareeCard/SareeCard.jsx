

const SareeCard = ({ saree }) => {

    const { image, product_name, product_description, price } = saree

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt={product_name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                <p>{product_description}</p>
                <p>Price: Tk. {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-[#fa8072] text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SareeCard;