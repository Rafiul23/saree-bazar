import woman from '../../assets/saree/undraw_Woman_ffrd.png';
import SectionTitle from '../SectionTitle/SectionTitle';
import {motion} from 'framer-motion';


const ChooseUs = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      };
    return (
        <motion.div 
        variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className='my-4'>
            <SectionTitle
            title='Why Choose Us!'
            ></SectionTitle>
            <div className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row">
                <img src={woman} className="md:w-1/2 w-full rounded-lg" />
                <div className='md:w-1/2 w-full md:ml-5'>
                    <h1 className="lg:text-5xl md:text-3xl text-xl font-bold">We provide you</h1>
                    <ul className='my-5 ml-4 space-y-2 list-disc'>
                        <li>Quality Products.</li>
                        <li>Comfortable Saree.</li>
                        <li>Various Types of Saree in one platform.</li>
                        <li>World class design.</li>
                        <li>Fashionable Saree.</li>
                        <li>Cheap in price.</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        </motion.div>
    );
};

export default ChooseUs;