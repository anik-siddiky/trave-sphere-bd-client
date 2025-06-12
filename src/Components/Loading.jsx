import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-100px)] bg-base-100">
            <motion.div
                className="relative w-28 h-28"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}>

                <div className="w-full h-full rounded-full border-[10px] border-t-primary border-b-secondary border-l-transparent border-r-transparent"></div>

                <motion.div
                    className="absolute top-1/2 left-1/2 text-primary"
                    style={{ transform: 'translate(-50%, -50%)' }}
                    animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}>
                    <Plane size={28} strokeWidth={2.5} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Loading;
