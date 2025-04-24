import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
interface Props {
	children: ReactNode;
	hasFooter?: boolean;
	hasHeader?: boolean;
}
export default function Layout({
	children,
	hasFooter = true,
	hasHeader = true,
}: Props) {
	const router = useRouter();
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);
	return (
		<div className="relative">
			{hasHeader && <Header />}

			<>{children}</>

			{hasFooter && <Footer />}
		</div>
	);
}
