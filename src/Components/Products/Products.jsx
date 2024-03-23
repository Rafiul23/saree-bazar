import { useEffect, useState } from 'react';
import SareeCard from '../SareeCard/SareeCard';
import SectionTitle from '../SectionTitle/SectionTitle';
import { motion } from 'framer-motion';

const Products = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      };

    const [sareeData, setSareeData] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setSareeData(data))
    },[])

    return (
        <motion.div
        variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className='my-10'>
            <SectionTitle
            title='Our Products'
            ></SectionTitle>
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
        </motion.div>
    );
};

export default Products;