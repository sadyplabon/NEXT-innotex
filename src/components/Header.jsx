import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Image src={"/logo.png"} height={100} width={100} alt="logo" />
      </div>
      <div>
        <Link href={"/"}>Home</Link>
        <Link href={"/heat-transfer"}>Heat Transfer</Link>
        <Link href={"/heat-presses"}>Heat Presses</Link>
        <Link href={"/watch"}>Watch</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/about-us"}>About Us</Link>
        <Link href={"/contact-us"}>Contact Us</Link>
      </div>
      <div>EN</div>
    </header>
  );
}
