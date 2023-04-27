import { useCallback, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, m, type Variants } from "framer-motion";
import { navLinks, sideBarNavLinks } from "site-data";

import { cn } from "@lib/clsx";

import { Button } from "@components/button";

const sidebarVariants: Variants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.15,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.15,
      ease: "easeInOut",
    },
  },
};

const NavBar: React.FC = (): JSX.Element => {
  const router = useRouter();

  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);

  const toggleSideMenu = useCallback(() => {
    setSideMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[200] flex h-18 flex-row items-center justify-between bg-white py-3 px-2 shadow-md sm:px-3 md:px-4 md:py-2 lg:h-20 lg:py-3 lg:px-6 xl:px-9 2xl:px-16">
        <Link
          href="/"
          className="h-full w-[169px] no-underline outline-offset-8 outline-primary-400 focus-visible:outline focus-visible:outline-2 "
        >
          <svg
            className="h-12 lg:h-14"
            viewBox="0 0 204 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 58.5638H1.78492V66.8075H5.81992V68.6419H0V58.5638ZM14.3118 58.5638H16.1075V68.6419H14.3118V58.5638ZM27.5635 68.6419L24.5886 58.6178H26.5358L28.6993 66.3328L30.8629 58.6178H32.8101L29.846 68.6419H27.5635ZM41.3019 58.6178H43.0869V68.6419H41.3019V58.6178ZM53.9046 62.0383V68.6419H52.1088V58.5638H54.1642L57.4095 64.9085V58.5638H59.1944V68.6419H57.2472L53.9046 62.0383ZM72.0566 68.6419C71.4892 68.6532 70.9278 68.5234 70.4232 68.2642C69.9155 68.0051 69.4721 67.6365 69.125 67.1852C68.7686 66.682 68.488 66.1294 68.2921 65.5451C68.0988 64.894 68.0076 64.217 68.0216 63.5381C67.9996 62.8091 68.0908 62.0812 68.2921 61.3801C68.4311 60.788 68.6887 60.2301 69.0493 59.7399C69.4024 59.2945 69.8445 58.927 70.3474 58.6609C70.8861 58.427 71.4693 58.3128 72.0566 58.3264C72.7583 58.3064 73.4538 58.4622 74.0795 58.7796C74.7206 59.149 75.2481 59.6863 75.6048 60.3334L73.8848 61.6067C73.7036 61.2359 73.4275 60.9196 73.0843 60.6895C72.7655 60.4723 72.3886 60.3558 72.0025 60.355C70.5638 60.355 69.839 61.434 69.839 63.5921C69.8267 64.0287 69.8777 64.4648 69.9904 64.8869C70.072 65.2668 70.2145 65.6312 70.4123 65.9659C70.6199 66.2223 70.8599 66.4508 71.1263 66.6457C71.3942 66.7946 71.6959 66.8726 72.0025 66.8723C72.4601 66.8923 72.9106 66.7552 73.279 66.4838C73.6288 66.1554 73.8446 65.7096 73.8848 65.2322H72.0566V63.387H75.9835V64.1855C76.0111 64.7548 75.9227 65.3237 75.7238 65.858C75.5354 66.3792 75.2652 66.8672 74.9233 67.3039C74.5813 67.7181 74.1532 68.0531 73.6685 68.2858C73.1889 68.5493 72.6472 68.6798 72.0999 68.6635L72.0566 68.6419ZM97.7919 60.3334V68.6419H95.8556V60.355H93.3026V58.5638H100.302V60.355L97.7919 60.3334ZM114.159 64.3258H110.773V68.6419H108.988V58.5638H110.773V62.5562H114.159V58.5638H115.955V68.6419H114.159V64.3258ZM124.977 58.553H130.494V60.3442H126.762V62.5022H129.087V64.3258H126.762V66.8075H130.494V68.6419H124.977V58.553ZM148.267 58.553H150.063V66.8075H154.098V68.6419H148.267V58.553ZM162.579 58.553H164.429V68.6419H162.633L162.579 58.553ZM175.247 60.355V62.513H177.637V64.3258H175.247V68.6419H173.451V58.5638H178.968V60.355H175.247ZM187.503 58.5638H193.02V60.355H189.31V62.513H191.635V64.3258H189.31V66.8075H193.042V68.6419H187.525L187.503 58.5638ZM202.821 68.6419C202.688 68.6423 202.556 68.6124 202.436 68.5545C202.316 68.4965 202.211 68.412 202.129 68.3074C201.958 68.06 201.867 67.7662 201.869 67.4657C201.869 67.1789 201.96 66.8994 202.129 66.6673C202.211 66.5627 202.316 66.4781 202.436 66.4202C202.556 66.3622 202.688 66.3323 202.821 66.3328C202.953 66.3323 203.083 66.3623 203.201 66.4203C203.319 66.4784 203.422 66.5629 203.502 66.6673C203.703 66.8845 203.811 67.1706 203.805 67.4657C203.813 67.7741 203.705 68.0741 203.502 68.3074C203.422 68.4118 203.319 68.4963 203.201 68.5543C203.083 68.6123 202.953 68.6423 202.821 68.6419ZM202.399 65.6854L201.945 62.8367V58.5638H203.697V62.7396L203.373 65.6314L202.399 65.6854Z"
              fill="#ED1F26"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.58545 0.663574H44.6879C47.1383 0.672105 49.4859 1.64683 51.2186 3.37513C52.9513 5.10343 53.9285 7.44505 53.937 9.88922V34.383C53.9342 36.8289 52.9588 39.1739 51.2249 40.9034C49.4909 42.6329 47.14 43.6058 44.6879 43.6087H2.58545C1.89491 43.6001 1.23572 43.3198 0.751462 42.8287C0.267206 42.3376 -0.00288347 41.6755 2.32204e-05 40.9866V33.9298H42.8273C43.2012 33.927 43.5589 33.7768 43.8223 33.512C44.0858 33.2473 44.2336 32.8893 44.2336 32.5163V11.7559C44.2251 11.3885 44.0736 11.0389 43.8111 10.781C43.5485 10.5232 43.1957 10.3775 42.8273 10.3748H2.32204e-05V3.2856C-0.00288347 2.59676 0.267206 1.93468 0.751462 1.44357C1.23572 0.952462 1.89491 0.672107 2.58545 0.663574V0.663574Z"
              fill="#ED1F26"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M157.938 1.462H201.339C201.686 1.45916 202.031 1.5248 202.353 1.65516C202.675 1.78553 202.968 1.97804 203.215 2.22166C203.463 2.46528 203.659 2.75521 203.794 3.0748C203.929 3.3944 203.999 3.73737 204 4.08403V7.99009C203.999 8.33675 203.929 8.67972 203.794 8.99931C203.659 9.31891 203.463 9.60884 203.215 9.85246C202.968 10.0961 202.675 10.2886 202.353 10.419C202.031 10.5493 201.686 10.615 201.339 10.6121H157.938C157.238 10.6122 156.566 10.337 156.068 9.84614C155.57 9.35532 155.286 8.68845 155.277 7.99009V4.08403C155.286 3.38566 155.57 2.71879 156.068 2.22798C156.566 1.73716 157.238 1.46195 157.938 1.462Z"
              fill="#ED1F26"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M157.938 17.9278H201.339C201.686 17.925 202.031 17.9906 202.353 18.121C202.675 18.2513 202.968 18.4439 203.215 18.6875C203.463 18.9311 203.659 19.221 203.794 19.5406C203.929 19.8602 203.999 20.2032 204 20.5498V24.4559C203.999 24.8026 203.929 25.1455 203.794 25.4651C203.659 25.7847 203.463 26.0747 203.215 26.3183C202.968 26.5619 202.675 26.7544 202.353 26.8848C202.031 27.0151 201.686 27.0808 201.339 27.0779H157.938C157.238 27.078 156.566 26.8028 156.068 26.312C155.57 25.8211 155.286 25.1543 155.277 24.4559V20.5606C155.283 19.8604 155.566 19.1908 156.064 18.6976C156.563 18.2045 157.236 17.9278 157.938 17.9278Z"
              fill="#ED1F26"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M157.938 34.4155H201.339C201.69 34.4141 202.037 34.4821 202.361 34.6157C202.686 34.7493 202.98 34.9457 203.228 35.1936C203.475 35.4415 203.671 35.736 203.803 36.0599C203.936 36.3839 204.003 36.7308 204 37.0807V40.9544C203.997 41.6575 203.716 42.331 203.217 42.8282C202.719 43.3254 202.044 43.606 201.339 43.6088H157.938C157.235 43.6004 156.563 43.3181 156.066 42.8221C155.569 42.3261 155.286 41.6558 155.277 40.9544V37.0807C155.277 36.3757 155.557 35.6995 156.056 35.2C156.555 34.7005 157.231 34.4184 157.938 34.4155Z"
              fill="#ED1F26"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M75.6049 39.6592L99.8148 2.71348C100.237 2.11837 100.852 1.68748 101.556 1.49419C102.012 1.43141 102.471 1.40615 102.93 1.41866H106.89C107.36 1.40495 107.83 1.43021 108.296 1.49419C108.998 1.68006 109.609 2.11317 110.016 2.71348L134.226 39.6592C134.584 40.1433 134.765 40.7357 134.737 41.3369C134.71 41.9381 134.476 42.5116 134.074 42.961C133.772 43.2296 133.412 43.4271 133.023 43.5391C132.634 43.6511 132.224 43.6748 131.824 43.6084H126.762C125.053 43.6084 124.934 43.6084 123.679 41.7417L104.932 13.0829L86.1413 41.7417C84.9297 43.6408 84.8107 43.6084 83.1015 43.6084H78.0388C77.629 43.681 77.208 43.6605 76.8072 43.5484C76.4064 43.4363 76.0361 43.2355 75.7239 42.961C75.3368 42.5045 75.112 41.9331 75.0846 41.3358C75.0572 40.7386 75.2287 40.1491 75.5724 39.6592H75.6049Z"
              fill="#ED1F26"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M63.6838 34.1133H68.595C69.21 34.1133 69.7999 34.3562 70.2358 34.7889C70.6717 35.2217 70.918 35.809 70.9208 36.4224V41.3212C70.918 41.9356 70.672 42.524 70.2365 42.9584C69.8009 43.3929 69.211 43.6382 68.595 43.6411H63.6838C63.0745 43.6297 62.4939 43.3803 62.0671 42.9465C61.6402 42.5126 61.4011 41.929 61.4012 41.3212V36.39C61.4096 35.7888 61.6528 35.2146 62.0791 34.7894C62.5053 34.3642 63.081 34.1217 63.6838 34.1133Z"
              fill="#ED1F26"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M141.452 34.1133H146.363C146.978 34.1133 147.568 34.3562 148.004 34.7889C148.44 35.2217 148.686 35.809 148.689 36.4224V41.3212C148.686 41.9356 148.44 42.524 148.005 42.9584C147.569 43.3929 146.979 43.6382 146.363 43.6411H141.452C140.84 43.6299 140.256 43.3816 139.824 42.9486C139.392 42.5156 139.145 41.932 139.137 41.3212V36.39C139.154 35.7859 139.404 35.2116 139.836 34.7872C140.267 34.3629 140.846 34.1214 141.452 34.1133Z"
              fill="#ED1F26"
            />
          </svg>
        </Link>
        <div className="grid h-full grid-cols-[repeat(2,_max-content)] grid-rows-[1fr] items-center justify-end gap-x-2 sm:gap-x-4 md:gap-x-8 lg:gap-x-9 xl:gap-x-12">
          <div className="hidden flex-row items-center justify-end gap-x-8 sm:flex md:gap-x-9 xl:gap-x-12">
            <div className="hidden flex-row items-center justify-end gap-x-12 xl:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.route}
                  href={link.route}
                  className={cn(
                    "relative font-sans text-xs font-bold uppercase leading-snug tracking-[0.2em] text-black-800 no-underline outline-offset-2 outline-primary-400 transition-[color] duration-200 ease-in-out hover:text-primary focus-visible:outline focus-visible:outline-2",
                    {
                      "after:absolute after:top-full after:left-0 after:right-0 after:block after:h-[2px] after:w-full after:bg-black-600 after:transition-colors after:duration-200 after:ease-in-out hover:after:bg-primary":
                        router.pathname.startsWith(link.route),
                    }
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Button route="/inquiries" type="route" intent="primary">
              Reserve Now
            </Button>
          </div>

          <button
            className="flex aspect-square h-12 w-12 items-center justify-center  p-1 outline-primary-400 focus-visible:outline focus-visible:outline-2 lg:h-14 lg:w-14 lg:p-2"
            onClick={toggleSideMenu}
          >
            <svg
              viewBox="0 0 33 20"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 fill-black-700"
            >
              <rect x="0.215088" y="0.258789" width="32" height="1.5" />
              <rect x="16.2151" y="9.25879" width="16" height="1.5" />
              <rect x="0.215088" y="18.2588" width="32" height="1.5" />
            </svg>
          </button>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {sideMenuOpen && (
          <m.div
            variants={sidebarVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={cn(
              "fixed top-0 right-0 bottom-0 z-[210]  w-[min(30rem,100%)] bg-white"
            )}
          >
            <div className="grid h-screen w-full grid-cols-1 grid-rows-[min-content_1fr_min-content] gap-y-6 bg-white p-2 shadow-md will-change-transform supports-[height:1svh]:h-[100svh] lg:px-4 lg:py-3">
              <div className="grid h-16 grid-cols-[minmax(min-content,_1fr)_min-content] ">
                <Link
                  href="/"
                  className="h-18 w-[185px] p-2 no-underline outline-primary-400 focus-visible:outline focus-visible:outline-2"
                >
                  <svg
                    viewBox="0 0 204 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 58.5638H1.78492V66.8075H5.81992V68.6419H0V58.5638ZM14.3118 58.5638H16.1075V68.6419H14.3118V58.5638ZM27.5635 68.6419L24.5886 58.6178H26.5358L28.6993 66.3328L30.8629 58.6178H32.8101L29.846 68.6419H27.5635ZM41.3019 58.6178H43.0869V68.6419H41.3019V58.6178ZM53.9046 62.0383V68.6419H52.1088V58.5638H54.1642L57.4095 64.9085V58.5638H59.1944V68.6419H57.2472L53.9046 62.0383ZM72.0566 68.6419C71.4892 68.6532 70.9278 68.5234 70.4232 68.2642C69.9155 68.0051 69.4721 67.6365 69.125 67.1852C68.7686 66.682 68.488 66.1294 68.2921 65.5451C68.0988 64.894 68.0076 64.217 68.0216 63.5381C67.9996 62.8091 68.0908 62.0812 68.2921 61.3801C68.4311 60.788 68.6887 60.2301 69.0493 59.7399C69.4024 59.2945 69.8445 58.927 70.3474 58.6609C70.8861 58.427 71.4693 58.3128 72.0566 58.3264C72.7583 58.3064 73.4538 58.4622 74.0795 58.7796C74.7206 59.149 75.2481 59.6863 75.6048 60.3334L73.8848 61.6067C73.7036 61.2359 73.4275 60.9196 73.0843 60.6895C72.7655 60.4723 72.3886 60.3558 72.0025 60.355C70.5638 60.355 69.839 61.434 69.839 63.5921C69.8267 64.0287 69.8777 64.4648 69.9904 64.8869C70.072 65.2668 70.2145 65.6312 70.4123 65.9659C70.6199 66.2223 70.8599 66.4508 71.1263 66.6457C71.3942 66.7946 71.6959 66.8726 72.0025 66.8723C72.4601 66.8923 72.9106 66.7552 73.279 66.4838C73.6288 66.1554 73.8446 65.7096 73.8848 65.2322H72.0566V63.387H75.9835V64.1855C76.0111 64.7548 75.9227 65.3237 75.7238 65.858C75.5354 66.3792 75.2652 66.8672 74.9233 67.3039C74.5813 67.7181 74.1532 68.0531 73.6685 68.2858C73.1889 68.5493 72.6472 68.6798 72.0999 68.6635L72.0566 68.6419ZM97.7919 60.3334V68.6419H95.8556V60.355H93.3026V58.5638H100.302V60.355L97.7919 60.3334ZM114.159 64.3258H110.773V68.6419H108.988V58.5638H110.773V62.5562H114.159V58.5638H115.955V68.6419H114.159V64.3258ZM124.977 58.553H130.494V60.3442H126.762V62.5022H129.087V64.3258H126.762V66.8075H130.494V68.6419H124.977V58.553ZM148.267 58.553H150.063V66.8075H154.098V68.6419H148.267V58.553ZM162.579 58.553H164.429V68.6419H162.633L162.579 58.553ZM175.247 60.355V62.513H177.637V64.3258H175.247V68.6419H173.451V58.5638H178.968V60.355H175.247ZM187.503 58.5638H193.02V60.355H189.31V62.513H191.635V64.3258H189.31V66.8075H193.042V68.6419H187.525L187.503 58.5638ZM202.821 68.6419C202.688 68.6423 202.556 68.6124 202.436 68.5545C202.316 68.4965 202.211 68.412 202.129 68.3074C201.958 68.06 201.867 67.7662 201.869 67.4657C201.869 67.1789 201.96 66.8994 202.129 66.6673C202.211 66.5627 202.316 66.4781 202.436 66.4202C202.556 66.3622 202.688 66.3323 202.821 66.3328C202.953 66.3323 203.083 66.3623 203.201 66.4203C203.319 66.4784 203.422 66.5629 203.502 66.6673C203.703 66.8845 203.811 67.1706 203.805 67.4657C203.813 67.7741 203.705 68.0741 203.502 68.3074C203.422 68.4118 203.319 68.4963 203.201 68.5543C203.083 68.6123 202.953 68.6423 202.821 68.6419ZM202.399 65.6854L201.945 62.8367V58.5638H203.697V62.7396L203.373 65.6314L202.399 65.6854Z"
                      fill="#ED1F26"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.58545 0.663574H44.6879C47.1383 0.672105 49.4859 1.64683 51.2186 3.37513C52.9513 5.10343 53.9285 7.44505 53.937 9.88922V34.383C53.9342 36.8289 52.9588 39.1739 51.2249 40.9034C49.4909 42.6329 47.14 43.6058 44.6879 43.6087H2.58545C1.89491 43.6001 1.23572 43.3198 0.751462 42.8287C0.267206 42.3376 -0.00288347 41.6755 2.32204e-05 40.9866V33.9298H42.8273C43.2012 33.927 43.5589 33.7768 43.8223 33.512C44.0858 33.2473 44.2336 32.8893 44.2336 32.5163V11.7559C44.2251 11.3885 44.0736 11.0389 43.8111 10.781C43.5485 10.5232 43.1957 10.3775 42.8273 10.3748H2.32204e-05V3.2856C-0.00288347 2.59676 0.267206 1.93468 0.751462 1.44357C1.23572 0.952462 1.89491 0.672107 2.58545 0.663574V0.663574Z"
                      fill="#ED1F26"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M157.938 1.462H201.339C201.686 1.45916 202.031 1.5248 202.353 1.65516C202.675 1.78553 202.968 1.97804 203.215 2.22166C203.463 2.46528 203.659 2.75521 203.794 3.0748C203.929 3.3944 203.999 3.73737 204 4.08403V7.99009C203.999 8.33675 203.929 8.67972 203.794 8.99931C203.659 9.31891 203.463 9.60884 203.215 9.85246C202.968 10.0961 202.675 10.2886 202.353 10.419C202.031 10.5493 201.686 10.615 201.339 10.6121H157.938C157.238 10.6122 156.566 10.337 156.068 9.84614C155.57 9.35532 155.286 8.68845 155.277 7.99009V4.08403C155.286 3.38566 155.57 2.71879 156.068 2.22798C156.566 1.73716 157.238 1.46195 157.938 1.462Z"
                      fill="#ED1F26"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M157.938 17.9278H201.339C201.686 17.925 202.031 17.9906 202.353 18.121C202.675 18.2513 202.968 18.4439 203.215 18.6875C203.463 18.9311 203.659 19.221 203.794 19.5406C203.929 19.8602 203.999 20.2032 204 20.5498V24.4559C203.999 24.8026 203.929 25.1455 203.794 25.4651C203.659 25.7847 203.463 26.0747 203.215 26.3183C202.968 26.5619 202.675 26.7544 202.353 26.8848C202.031 27.0151 201.686 27.0808 201.339 27.0779H157.938C157.238 27.078 156.566 26.8028 156.068 26.312C155.57 25.8211 155.286 25.1543 155.277 24.4559V20.5606C155.283 19.8604 155.566 19.1908 156.064 18.6976C156.563 18.2045 157.236 17.9278 157.938 17.9278Z"
                      fill="#ED1F26"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M157.938 34.4155H201.339C201.69 34.4141 202.037 34.4821 202.361 34.6157C202.686 34.7493 202.98 34.9457 203.228 35.1936C203.475 35.4415 203.671 35.736 203.803 36.0599C203.936 36.3839 204.003 36.7308 204 37.0807V40.9544C203.997 41.6575 203.716 42.331 203.217 42.8282C202.719 43.3254 202.044 43.606 201.339 43.6088H157.938C157.235 43.6004 156.563 43.3181 156.066 42.8221C155.569 42.3261 155.286 41.6558 155.277 40.9544V37.0807C155.277 36.3757 155.557 35.6995 156.056 35.2C156.555 34.7005 157.231 34.4184 157.938 34.4155Z"
                      fill="#ED1F26"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M75.6049 39.6592L99.8148 2.71348C100.237 2.11837 100.852 1.68748 101.556 1.49419C102.012 1.43141 102.471 1.40615 102.93 1.41866H106.89C107.36 1.40495 107.83 1.43021 108.296 1.49419C108.998 1.68006 109.609 2.11317 110.016 2.71348L134.226 39.6592C134.584 40.1433 134.765 40.7357 134.737 41.3369C134.71 41.9381 134.476 42.5116 134.074 42.961C133.772 43.2296 133.412 43.4271 133.023 43.5391C132.634 43.6511 132.224 43.6748 131.824 43.6084H126.762C125.053 43.6084 124.934 43.6084 123.679 41.7417L104.932 13.0829L86.1413 41.7417C84.9297 43.6408 84.8107 43.6084 83.1015 43.6084H78.0388C77.629 43.681 77.208 43.6605 76.8072 43.5484C76.4064 43.4363 76.0361 43.2355 75.7239 42.961C75.3368 42.5045 75.112 41.9331 75.0846 41.3358C75.0572 40.7386 75.2287 40.1491 75.5724 39.6592H75.6049Z"
                      fill="#ED1F26"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M63.6838 34.1133H68.595C69.21 34.1133 69.7999 34.3562 70.2358 34.7889C70.6717 35.2217 70.918 35.809 70.9208 36.4224V41.3212C70.918 41.9356 70.672 42.524 70.2365 42.9584C69.8009 43.3929 69.211 43.6382 68.595 43.6411H63.6838C63.0745 43.6297 62.4939 43.3803 62.0671 42.9465C61.6402 42.5126 61.4011 41.929 61.4012 41.3212V36.39C61.4096 35.7888 61.6528 35.2146 62.0791 34.7894C62.5053 34.3642 63.081 34.1217 63.6838 34.1133Z"
                      fill="#ED1F26"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M141.452 34.1133H146.363C146.978 34.1133 147.568 34.3562 148.004 34.7889C148.44 35.2217 148.686 35.809 148.689 36.4224V41.3212C148.686 41.9356 148.44 42.524 148.005 42.9584C147.569 43.3929 146.979 43.6382 146.363 43.6411H141.452C140.84 43.6299 140.256 43.3816 139.824 42.9486C139.392 42.5156 139.145 41.932 139.137 41.3212V36.39C139.154 35.7859 139.404 35.2116 139.836 34.7872C140.267 34.3629 140.846 34.1214 141.452 34.1133Z"
                      fill="#ED1F26"
                    />
                  </svg>
                </Link>
                <button
                  onClick={toggleSideMenu}
                  className="flex h-14 w-14 items-center justify-center border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-400 "
                >
                  <svg className="aspect-square w-12 fill-black-700 p-2">
                    <use xlinkHref="/assets/svg/sprites.svg#icon-close" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-stretch justify-start gap-y-1 overflow-y-auto overflow-x-hidden md:gap-y-2 lg:gap-y-3">
                {sideBarNavLinks.map((link) =>
                  link.external ? (
                    <a
                      className="rounded-lg bg-transparent px-6 py-4 text-right text-xl font-bold tracking-wider text-black-800 outline-primary-400 transition-colors duration-200 ease-in-out hover:bg-primary-100 hover:text-primary focus-visible:outline focus-visible:outline-2"
                      key={link.route}
                      href={link.route}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.route}
                      key={link.route}
                      className={cn(
                        "rounded-lg px-6 py-4 text-right text-xl font-bold tracking-wider text-black-800 outline-primary-400 hover:bg-primary-100 hover:text-primary focus-visible:outline focus-visible:outline-2 lg:px-6 lg:py-4 lg:text-xl",
                        "bg-transparent transition-colors duration-200 ease-in-out",
                        {
                          "bg-white-300": router.pathname.startsWith(
                            link.route
                          ),
                        }
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
              <div>
                <Button
                  route="/inquiries"
                  type="route"
                  intent="primary"
                  withArrow
                  fullWidth
                >
                  Reserve
                </Button>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { NavBar };
