import { motion } from 'framer-motion';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Services />
    </motion.div>
  );
};

export default ServicesPage;