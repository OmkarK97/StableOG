import { motion } from "framer-motion";
import React from "react";

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
        <div className="mb-8 flex items-center gap-4 px-5 lg:gap-5 lg:px-0 lg:pb-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 111 26"
            fill="none"
            className="h-5 w-[88px] lg:h-[26px] lg:w-[110px]"
          >
            <g clipPath="url(#clip0_2650_21353)">
              <g filter="url(#filter0_d_2650_21353)">
                <path
                  d="M33.5096 10.9472L41.4902 3.01071L38.4627 0L31.9961 6.43095L25.5294 0L22.5018 3.01071L30.4823 10.9472C30.9003 11.3628 31.4481 11.5707 31.9959 11.5707C32.5438 11.5707 33.0916 11.363 33.5096 10.9472ZM45.0624 19.4256L38.5958 12.9946L45.0624 6.56352L42.0349 3.55281L34.0547 11.4893C33.2188 12.3207 33.2188 13.6686 34.0547 14.5L42.0349 22.4365L45.0624 19.4256ZM31.9849 19.5691L38.4514 26L41.4788 22.9893L33.4985 15.0528C32.6623 14.2214 31.3072 14.2214 30.471 15.0528L22.4908 22.9893L25.5183 26L31.9849 19.5691ZM29.9261 14.5109C30.3277 14.1115 30.5532 13.5702 30.5532 13.0055C30.5532 12.4409 30.3277 11.8994 29.9261 11.5002L21.9459 3.5637L18.9184 6.57441L25.385 13.0054L18.9184 19.4365L21.9459 22.4472L29.9263 14.5107L29.9261 14.5109ZM18.8104 24.9559H12.0992L11.616 21.9208H7.24058L6.71086 24.9559H0L5.77696 1.04431H13.7186L18.8107 24.9559H18.8104ZM10.8534 16.7945L10.4328 14.007C10.4213 13.9969 10.4016 13.8573 10.3702 13.5881C10.3497 13.3621 10.2406 12.4634 10.0434 10.8946C10.0223 10.7188 9.99686 10.479 9.96547 10.1743C9.93427 9.86965 9.89273 9.48449 9.84103 9.01976L9.63737 6.7596C9.61762 6.97674 9.58881 7.21917 9.55244 7.48763C9.51606 7.75609 9.47711 8.05004 9.43556 8.37057C9.36281 9.01034 9.31112 9.45458 9.27991 9.70218C9.24797 9.94904 9.22821 10.0995 9.21806 10.1516L8.76625 13.0463L8.11208 16.7947H10.853L10.8534 16.7945ZM58.921 24.9557V19.2109H53.3466V15.5554H58.3445V10.1516H53.3466V6.66728H58.921V1.04468H46.853V24.9557H58.921ZM71.6926 19.2109H66.8189V1.04468H60.3252V24.9557H71.6926V19.2109ZM91.6322 24.9559H84.9215L84.4378 21.9208H80.0624L79.5327 24.9559H72.8215L78.5988 1.04431H86.5406L91.6328 24.9559H91.6322ZM83.676 16.7945L83.2546 14.007C83.2439 13.9969 83.2234 13.8573 83.192 13.5881C83.1725 13.3621 83.0626 12.4634 82.8652 10.8946C82.8442 10.7188 82.8194 10.4788 82.7875 10.1741C82.7561 9.86946 82.7146 9.48431 82.6636 9.01957L82.4599 6.75942C82.4396 6.97655 82.4108 7.21898 82.3743 7.48744C82.3379 7.75591 82.2989 8.04967 82.2576 8.3702C82.185 9.00997 82.1331 9.45421 82.1017 9.70181C82.0705 9.94867 82.0502 10.0992 82.0406 10.1512L81.5881 13.046L80.9339 16.7943H83.6756L83.676 16.7945ZM110.132 24.9559H103.109L99.9025 16.4385C99.8713 16.2938 99.8158 16.1028 99.738 15.8654C99.6601 15.628 99.5643 15.3444 99.45 15.0137L99.4965 16.5934V24.9559H93.0342V1.04431H99.6835C102.611 1.04431 104.801 1.61798 106.255 2.76422C108.102 4.23024 109.027 6.31592 109.027 9.01957C109.027 11.9112 107.786 13.9092 105.305 15.0135L110.132 24.9559ZM102.58 9.09712C102.58 7.31185 101.64 6.41876 99.7615 6.41876H99.5279V12.1169H99.9638C100.711 12.1169 101.334 11.8338 101.832 11.2651C102.331 10.6983 102.58 9.97544 102.58 9.09712Z"
                  fill="#B7B7B7"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_2650_21353"
                x="-0.550591"
                y="-0.550591"
                width="111.233"
                height="27.1012"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="0.275295"></feGaussianBlur>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2650_21353"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2650_21353"
                  result="shape"
                ></feBlend>
              </filter>
              <clipPath id="clip0_2650_21353">
                <rect width="110.132" height="26" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 14"
            fill="none"
            className="size-[10px] lg:size-3"
          >
            <path
              d="M0.132324 13.4L4.74032 7.00001L0.132324 0.600006H2.45766L5.89232 5.40001L9.34832 0.600006H11.6523L7.04432 7.00001L11.6523 13.4H9.34832L5.89232 8.60001L2.45766 13.4H0.132324Z"
              fill="#B7B7B7"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 99 30"
            fill="none"
            className="h-6 w-[78px] lg:h-[30px] lg:w-[98px]"
          >
            <path
              d="M91.8664 25.2936C90.4334 25.2936 89.1991 24.9874 88.1638 24.375C87.1347 23.7563 86.3393 22.8883 85.7774 21.7709C85.2219 20.6471 84.9441 19.3308 84.9441 17.822C84.9441 16.3321 85.2219 15.019 85.7774 13.8826C86.3393 12.7462 87.1221 11.8592 88.1259 11.2216C89.136 10.584 90.3166 10.2652 91.6676 10.2652C92.4883 10.2652 93.2837 10.4009 94.0539 10.6724C94.8241 10.9438 95.5154 11.37 96.1278 11.9508C96.7402 12.5316 97.2231 13.286 97.5767 14.214C97.9302 15.1357 98.107 16.2563 98.107 17.5758V18.5796H86.5445V16.4583H95.3324C95.3324 15.7134 95.1808 15.0537 94.8778 14.4792C94.5748 13.8984 94.1486 13.4407 93.5994 13.1061C93.0565 12.7715 92.4188 12.6042 91.6865 12.6042C90.8911 12.6042 90.1966 12.7999 89.6032 13.1913C89.0161 13.5764 88.5615 14.0815 88.2395 14.7065C87.9239 15.3251 87.7661 15.9975 87.7661 16.7235V18.3807C87.7661 19.3529 87.9365 20.1799 88.2774 20.8618C88.6246 21.5436 89.1076 22.0644 89.7263 22.4243C90.345 22.7778 91.0678 22.9546 91.8948 22.9546C92.4315 22.9546 92.9207 22.8788 93.3627 22.7273C93.8046 22.5695 94.1865 22.3359 94.5085 22.0265C94.8305 21.7172 95.0767 21.3352 95.2471 20.8807L97.927 21.3637C97.7124 22.1528 97.3273 22.8441 96.7717 23.4375C96.2225 24.0246 95.5312 24.4823 94.6979 24.8106C93.8709 25.1326 92.927 25.2936 91.8664 25.2936Z"
              fill="#B7B7B7"
            ></path>
            <path
              d="M81.7882 5.60608V25H78.9568V5.60608H81.7882Z"
              fill="#B7B7B7"
            ></path>
            <path
              d="M68.0075 25.322C67.0858 25.322 66.2525 25.1515 65.5075 24.8106C64.7626 24.4634 64.1723 23.9615 63.7367 23.3049C63.3074 22.6484 63.0928 21.8435 63.0928 20.8902C63.0928 20.0695 63.2506 19.394 63.5663 18.8637C63.8819 18.3333 64.3081 17.9135 64.8447 17.6042C65.3813 17.2948 65.981 17.0613 66.6439 16.9034C67.3068 16.7456 67.9823 16.6256 68.6704 16.5436C69.5416 16.4426 70.2487 16.3605 70.7916 16.2974C71.3346 16.2279 71.7291 16.1174 71.9754 15.9659C72.2216 15.8144 72.3447 15.5682 72.3447 15.2273V15.161C72.3447 14.334 72.1111 13.6932 71.6439 13.2387C71.1831 12.7841 70.4949 12.5568 69.5795 12.5568C68.6262 12.5568 67.875 12.7683 67.3257 13.1913C66.7828 13.608 66.4072 14.072 66.1988 14.5833L63.5378 13.9773C63.8535 13.0934 64.3144 12.3801 64.9204 11.8371C65.5328 11.2879 66.2367 10.8902 67.0322 10.644C67.8276 10.3914 68.6641 10.2652 69.5416 10.2652C70.1224 10.2652 70.738 10.3346 71.3882 10.4735C72.0448 10.6061 72.6572 10.8523 73.2254 11.2121C73.7998 11.572 74.2702 12.0865 74.6363 12.7557C75.0025 13.4186 75.1856 14.2803 75.1856 15.3409V25H72.4204V23.0114H72.3068C72.1237 23.3775 71.8491 23.7374 71.4829 24.0909C71.1168 24.4445 70.6464 24.738 70.0719 24.9716C69.4974 25.2052 68.8093 25.322 68.0075 25.322ZM68.6231 23.0493C69.4059 23.0493 70.0751 22.8946 70.6307 22.5852C71.1925 22.2759 71.6187 21.8719 71.9091 21.3731C72.2058 20.8681 72.3541 20.3283 72.3541 19.7538V17.8788C72.2531 17.9798 72.0574 18.0745 71.767 18.1629C71.4829 18.245 71.1578 18.3176 70.7916 18.3807C70.4255 18.4375 70.0688 18.4912 69.7216 18.5417C69.3743 18.5859 69.0839 18.6238 68.8504 18.6553C68.3011 18.7248 67.7992 18.8416 67.3447 19.0057C66.8964 19.1698 66.5366 19.4066 66.2651 19.7159C66 20.019 65.8674 20.423 65.8674 20.928C65.8674 21.6288 66.1262 22.1591 66.6439 22.519C67.1616 22.8725 67.8213 23.0493 68.6231 23.0493Z"
              fill="#B7B7B7"
            ></path>
            <path
              d="M53.6704 25V10.4546H56.4072V12.7652H56.5587C56.8238 11.9823 57.291 11.3668 57.9602 10.9186C58.6357 10.464 59.3996 10.2368 60.2518 10.2368C60.4286 10.2368 60.637 10.2431 60.8769 10.2557C61.1231 10.2683 61.3156 10.2841 61.4545 10.303V13.0114C61.3409 12.9798 61.1388 12.9451 60.8484 12.9072C60.558 12.863 60.2676 12.8409 59.9772 12.8409C59.308 12.8409 58.7114 12.983 58.1875 13.2671C57.6698 13.5448 57.2594 13.9331 56.9564 14.4318C56.6534 14.9243 56.5018 15.4861 56.5018 16.1174V25H53.6704Z"
              fill="#B7B7B7"
            ></path>
            <path
              d="M36.4497 25V5.60608H43.552C44.9282 5.60608 46.0678 5.83335 46.9705 6.2879C47.8733 6.73613 48.5488 7.34535 48.9971 8.11555C49.4453 8.87944 49.6694 9.74118 49.6694 10.7008C49.6694 11.5089 49.521 12.1907 49.2243 12.7462C48.9276 13.2955 48.5299 13.7374 48.0311 14.072C47.5387 14.4003 46.9958 14.6402 46.4024 14.7917V14.9811C47.0463 15.0126 47.6745 15.221 48.2868 15.6061C48.9055 15.9849 49.4169 16.5246 49.8209 17.2254C50.225 17.9262 50.427 18.7784 50.427 19.7822C50.427 20.7734 50.1934 21.6635 49.7262 22.4527C49.2654 23.2355 48.552 23.8573 47.5861 24.3182C46.6202 24.7727 45.3859 25 43.8834 25H36.4497ZM39.3758 22.4906H43.5993C45.0008 22.4906 46.0046 22.2191 46.6107 21.6762C47.2168 21.1332 47.5198 20.4546 47.5198 19.6402C47.5198 19.0278 47.3651 18.4659 47.0558 17.9546C46.7464 17.4432 46.3045 17.036 45.73 16.733C45.1618 16.4299 44.4863 16.2784 43.7035 16.2784H39.3758V22.4906ZM39.3758 13.9962H43.2963C43.9529 13.9962 44.5431 13.87 45.0671 13.6174C45.5974 13.3649 46.0173 13.0114 46.3266 12.5568C46.6423 12.096 46.8001 11.553 46.8001 10.928C46.8001 10.1263 46.5192 9.45393 45.9573 8.911C45.3954 8.36807 44.5337 8.09661 43.3721 8.09661H39.3758V13.9962Z"
              fill="#B7B7B7"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.65234 28.6667V2H28.6523V28.6667H1.65234ZM8.40234 14V8.66669H11.1023V14H8.40234ZM13.8023 19.3334H16.5023V14H11.1023V16.6667H8.40234V22H13.8023V19.3334ZM13.8023 19.3334H11.1023L11.1023 16.6667H13.8023L13.8023 19.3334ZM14.0386 9.25335C14.1601 9.08669 14.3693 8.90002 14.5448 8.81335C14.7811 8.69335 14.9363 8.66002 15.2333 8.68002C15.5236 8.69335 15.6788 8.74669 15.9083 8.90002C16.0771 9.02002 16.2661 9.22669 16.3538 9.40002C16.4753 9.63335 16.5091 9.78669 16.4888 10.08C16.4753 10.3667 16.4213 10.52 16.2661 10.74C16.1513 10.8934 15.9286 11.0934 15.7598 11.1867C15.5168 11.3134 15.3751 11.34 15.0713 11.32C14.7811 11.3067 14.6258 11.2534 14.4031 11.1C14.2478 10.9867 14.0453 10.7667 13.9508 10.6C13.8226 10.36 13.7956 10.22 13.8158 9.92002C13.8293 9.63335 13.8833 9.48002 14.0386 9.25335ZM19.9448 8.81335C19.7761 8.90002 19.5533 9.08669 19.4521 9.23335C19.3306 9.40669 19.2428 9.62002 19.2226 9.83335C19.2023 10.0334 19.2226 10.2734 19.2766 10.4334C19.3238 10.58 19.4453 10.7867 19.5398 10.8934C19.6343 11 19.8301 11.1467 19.9786 11.2067C20.1271 11.2734 20.3836 11.3334 20.5523 11.3334C20.7211 11.3334 20.9776 11.2734 21.1261 11.2067C21.2746 11.1467 21.4703 11 21.5648 10.8934C21.6593 10.7867 21.7808 10.58 21.8281 10.4334C21.8821 10.2734 21.9023 10.0334 21.8821 9.83335C21.8618 9.62002 21.7808 9.40669 21.6526 9.24002C21.5513 9.09335 21.3286 8.90669 21.1598 8.82002C20.9708 8.72002 20.7413 8.66669 20.5523 8.66669C20.3701 8.66669 20.1271 8.72669 19.9448 8.81335ZM19.4386 14.5934C19.5533 14.44 19.7761 14.24 19.9448 14.1534C20.1878 14.02 20.3296 13.9934 20.6333 14.0134C20.9236 14.0267 21.0788 14.08 21.3083 14.2334C21.4771 14.3534 21.6661 14.56 21.7538 14.7334C21.8753 14.9667 21.9091 15.12 21.8888 15.4134C21.8753 15.7 21.8213 15.8534 21.6661 16.0734C21.5581 16.2267 21.3286 16.4267 21.1598 16.52C20.9168 16.6467 20.7751 16.6734 20.4713 16.6534C20.1811 16.64 20.0258 16.5867 19.8031 16.4334C19.6478 16.32 19.4453 16.1 19.3508 15.9334C19.2226 15.6934 19.1956 15.5534 19.2158 15.2534C19.2293 14.9667 19.2833 14.8134 19.4386 14.5934Z"
              fill="#B7B7B7"
            ></path>
          </svg>
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
                Axelar&apos;s programmable Web3 interoperability architecture
                goes cross-chain with full fungibility and functionality scaling
                the next generation of internet applications to billions of
                users.
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
                SUSD is a regulated stablecoin fully backed by cash, cash
                equivalents, and U.S. Treasuries held in U.S. financial
                institutions. Tokens are intended to be redeemable 1:1 for U.S.
                dollars.
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
                New blockchain connections span the network instantly via
                hub-and-spoke architecture, with zero new code. Now, anyone in
                the world can connect, interact and build across 50+
                blockchains.
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
                The largest, most decentralized validator set in cross-chain.
                Multi-layer security measures, designed by the world’s leading
                cryptography and consensus experts where all key smart contracts
                are audited and certified.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Patners;
