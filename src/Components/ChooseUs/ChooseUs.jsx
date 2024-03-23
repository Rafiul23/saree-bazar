import woman from '../../assets/saree/undraw_Woman_ffrd.png';
import SectionTitle from '../SectionTitle/SectionTitle';
const ChooseUs = () => {
    return (
        <div className='my-4'>
            <SectionTitle
            title='Why Choose Us!'
            ></SectionTitle>
            <div className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row">
                <img src={woman} className="md:w-1/2 w-full rounded-lg" />
                <div className='md:w-1/2 w-full md:ml-5'>
                    <h1 className="text-5xl font-bold">We provide you</h1>
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
    );
};

export default ChooseUs;