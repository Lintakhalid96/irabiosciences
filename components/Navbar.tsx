import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <Link href="/">
        <Image 
          src="/logo.png" // UPDATED FILE NAME
          alt="Bioinformatics and Public Health"
          width={150} 
          height={50} 
          priority
        />
      </Link>
    </nav>
  );
};

export default Navbar;


