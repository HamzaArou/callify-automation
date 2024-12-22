import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-2"
    >
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg transform rotate-45"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">S</div>
      </div>
      <span className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Stepwell
      </span>
    </motion.div>
  );
};

export default Logo;