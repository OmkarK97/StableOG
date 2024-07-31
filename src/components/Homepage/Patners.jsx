import { motion } from "framer-motion";
import React from "react";
import { logo, mantra } from "../../assets";

const Patners = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      className="w-full bg-[#101010] py-12 lg:pb-[200px] lg:pt-[100px]"
      id="partners"
    >
      <div className="flex w-full flex-col items-center lg:container">
        <h2 className="mb-8 px-5 text-center text-[36px] font-medium leading-[44px] text-[#FFFFFF] lg:mb-12 lg:px-0 lg:text-[64px] lg:leading-[76px]">
          Strategic Partners
        </h2>
        <div className="mb-8 flex justify-center items-center gap-4 px-5 lg:gap-5 lg:px-0 lg:pb-12">
          <img src={mantra} alt="mantra" className="w-32" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 14"
            fill="none"
            className="size-[10px] lg:size-5"
          >
            <path
              d="M0.132324 13.4L4.74032 7.00001L0.132324 0.600006H2.45766L5.89232 5.40001L9.34832 0.600006H11.6523L7.04432 7.00001L11.6523 13.4H9.34832L5.89232 8.60001L2.45766 13.4H0.132324Z"
              fill="#B7B7B7"
            ></path>
          </svg>
          <img src={logo} alt="stableog" className="w-10 mr-10" />
        </div>
        <p className="max-w-[512px] px-5 text-center text-lg font-normal leading-[27px] text-[#CFCFCF] lg:px-0 lg:text-xl lg:leading-[30px]">
          SUSD empowers a network of businesses and builders around the world to
          move money in ways never thought possible by tackling the liquidity
          fragmentation market issue.
        </p>
        <motion.div
          className="mt-6 w-full bg-[url('https://stable0x.com/core.svg')] bg-[length:441px_441px] bg-top bg-no-repeat lg:mt-[50px] lg:bg-[length:774px_774px] lg:bg-center p-36"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={animationVariants}
        >
          <motion.div
            className="mt-[338px] grid grid-cols-1 gap-y-3 px-5 lg:mt-0 lg:auto-rows-fr lg:grid-cols-2 lg:gap-x-2 lg:gap-y-6 lg:px-0 lg:py-[65px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={animationVariants}
          >
            <motion.div
              className="flex w-full flex-col gap-4 rounded-[24px] bg-[#CBF48F] px-6 py-10 lg:max-w-[386px] lg:rounded-[32px] lg:px-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={animationVariants}
            >
              <h4 className="text-center text-2xl font-medium leading-7 text-[#101010] lg:text-[32px] lg:leading-[38px]">
                Interoperable
              </h4>
              <p className="text-center text-sm font-normal text-[#282828] lg:text-base">
                SwastikUSD utilizes the Inter Blockchain Communication (IBC)
                Protocol within the Cosmos ecosystem, facilitating seamless
                integration and transactions across multiple blockchain
                networks. This capability enhances liquidity and broadens the
                usability of SUSD across various platforms and chains
              </p>
            </motion.div>
            <motion.div
              className="flex w-full flex-col gap-4 rounded-[24px] bg-[#CBF48F] px-6 py-10 lg:max-w-[386px] lg:rounded-[32px] lg:px-8 justify-self-end"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={animationVariants}
            >
              <h4 className="text-center text-2xl font-medium leading-7 text-[#101010] lg:text-[32px] lg:leading-[38px]">
                Compliant
              </h4>
              <p className="text-center text-sm font-normal text-[#282828] lg:text-base">
                Built on Mantra Chain&apos;s regulation-ready infrastructure,
                SwastikUSD adheres to stringent compliance standards through
                modules designed to meet diverse regulatory requirements. This
                framework simplifies the regulatory process for issuing and
                managing stablecoins, ensuring legal and institutional
                alignment.
              </p>
            </motion.div>
            <motion.div
              className="flex w-full flex-col gap-4 rounded-[24px] bg-[#CBF48F] px-6 py-10 lg:max-w-[386px] lg:rounded-[32px] lg:px-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={animationVariants}
            >
              <h4 className="text-center text-2xl font-medium leading-7 text-[#101010] lg:text-[32px] lg:leading-[38px]">
                Scalable
              </h4>
              <p className="text-center text-sm font-normal text-[#282828] lg:text-base">
                Leveraging the Cosmos SDK, SwastikUSD benefits from a highly
                scalable architecture that supports large volumes of
                transactions with minimal latency. This scalability is crucial
                for accommodating growth and maintaining efficient operations as
                the user base expands.
              </p>
            </motion.div>
            <motion.div
              className="flex w-full flex-col gap-4 rounded-[24px] bg-[#CBF48F] px-6 py-10 lg:max-w-[386px] lg:rounded-[32px] lg:px-8 justify-self-end"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              variants={animationVariants}
            >
              <h4 className="text-center text-2xl font-medium leading-7 text-[#101010] lg:text-[32px] lg:leading-[38px]">
                Secure
              </h4>
              <p className="text-center text-sm font-normal text-[#282828] lg:text-base">
                SwastikUSD is secured by Mantra Chain&apos;s robust security
                measures. This infrastructure provides comprehensive protection
                against potential threats, ensuring the safety and integrity of
                the stablecoin.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Patners;
