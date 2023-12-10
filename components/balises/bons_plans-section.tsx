import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const jobsSequence = [
    "CHANGER VOTRE VIE ?", 1000,
    "AUGMENTER VOTRE POUVOIR D'ACHAT ?", 1000,
    "PROFITER DES VACANCES DUREMENT MERITEES ?", 1000,
];


export default function bons_plans(){
    return (
      <div className="grid grid-cols-1 sm:grid-cols-12">
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
          <h6 className="text-black mb-4 sm:text-4xl lg:text-7xl lg:leading-normal font-bold">
              <span className='text-xl sm:text-4xl lg:text-7xl lg:leading-normal font-bold'>
              Voulez-vous : 
              </span>
              <br></br>
              <TypeAnimation
                  sequence={jobsSequence}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  style={{ fontSize: "0.64em" }}
              />
          </h6>
          <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
          Comment voyager à prix réduit ?
          </p>
          
      </motion.div>
     
  </div>  
);
}