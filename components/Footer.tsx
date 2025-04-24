import React, { Fragment } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
const Footer = () => {
	const { t } = useTranslation(["home"]);
	return (
		<footer className="w-full relative bg-dark text-white ">
			<div className="w-full container sm:mx-auto  md:px-10 px-6 py-16 lg:pt-10 flex flex-col items-center">
				<div className="flex flex-row  items-center py-4 space-x-4">
					<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
						<i className="icon-github text-white text-xs"></i>
					</div>
					<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
						<i className="icon-linkedin text-white text-xs"></i>
					</div>
					<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
						<i className="icon-stackoverflow text-white text-xs flex justify-center items-center"></i>
					</div>
					<div className="h-8 w-8 bg-secondary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
						<i className="icon-skype text-white text-xs"></i>
					</div>
				</div>
				<div className="text-xxs text-primary-tint tracking-widest font-light">
					Jamaoui  Abeer<span>&copy;</span> 2025 All rights reserved
				</div>
			</div>
		</footer>
	);
};

export default Footer;
