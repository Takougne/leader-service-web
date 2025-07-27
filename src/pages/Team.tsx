import { motion } from 'framer-motion';
import Team from '../components/Team';

const TeamPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Team />
    </motion.div>
  );
};

export default TeamPage;