import { motion } from "framer-motion";
import Backdrop from "../backdrop/Backdrop";

const dropIn = {
    hidden: {

      opacity: 0,
    },
    visible: {

      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {

      opacity: 0,
    },
  };

const AnimateModal = ({ handleClose, children }) => {
    return (
      <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal orange-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <span className="close" onClick={handleClose}>&times;</span>
                {children}
            </motion.div>
      </Backdrop>
    );
};

export default AnimateModal;
