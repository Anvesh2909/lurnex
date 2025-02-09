import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between px-6 py-3 bg-white shadow-md">
            <Link href="/">
                <Image src="/logo.png" alt="Lurnex Logo" width={150} height={50} />
            </Link>
        </nav>
    );
};

export default Navbar;
