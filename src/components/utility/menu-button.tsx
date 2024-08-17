import { motion } from 'framer-motion';
import { classNames } from "@/utility/classNames";

export interface MenuLogoProps {
     open: boolean;
     toggle: () => void;
  }

const MenuButton:React.FC<MenuLogoProps> = ({ open, toggle }) => {
  const lineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 },
  };

  return (
    <button
      aria-label="Toggle menu"
      onClick={toggle}
      className={classNames(
        "relative z-50 flex h-12 w-12 items-center justify-center transition-colors duration-300 md:hidden",
      )}
    >
      <motion.div
        className="flex flex-col items-center justify-center w-6 h-6"
        animate={open ? "open" : "closed"}
      >
        <motion.span
          className="w-6 h-0.5 bg-gray-800 rounded-full mb-1.5"
          variants={topLineVariants}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-gray-800 rounded-full mb-1.5"
          variants={lineVariants}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-6 h-0.5 bg-gray-800 rounded-full"
          variants={bottomLineVariants}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </button>
  );
};

export default MenuButton;