import  { useEffect, useState } from 'react';
import SareeCard from '../SareeCard/SareeCard';

const Products = () => {

    const [sareeData, setSareeData] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setSareeData(data))
    },[])

    return (
        <div className='my-4'>
            <h2 className='text-3xl font-bold text-center text-[#FA8072]'>Our Products</h2>
            <p className='text-center my-4'>Check our products and choose your favourite one</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    sareeData.map(saree =><SareeCard
                    key={saree.id}
                    saree={saree}
                    ></SareeCard>)
                }
            </div>
        </div>
    );
};

export default Products;