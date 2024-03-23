import { motion } from 'framer-motion';

const Header = () => {

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
            <div className="navbar bg-[#FA8072] shadow-md">
                <h2 className="font-bold lg:text-5xl md:text-3xl text-xl text-white">Welcome to Saree Bazar</h2>
            </div>
        </motion.div>
    );
};

export default Header;