import { motion } from "motion/react"
import { useState } from "react";
import Data from "./Data";

export function Image(children:Data) {
    const [start, setStart] = useState(false);
    const hoverAnimate = {
        active: { 
            width: '55%',
            transition:{ 
                delay: 0.1,
                duration: 0.3,
        }},
        inactive: { 
            width: '25%',
            transition:{ 
                duration: 0.3,
        }}
    };

    return(
        <motion.div
              className={"w-1/4 h-full cursor-pointer " + children.rounded}
              style={{ 
                backgroundImage: 'url(' + children.link + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              onMouseEnter={() => setStart(true)}
              onMouseLeave={() => setStart(false)}
              initial={{ width: '25%' }}
              animate={start ? hoverAnimate.active : hoverAnimate.inactive}
            >
              
        </motion.div>
    )
}
export default Image