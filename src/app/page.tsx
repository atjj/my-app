import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <Link className="border cursor-pointer border-black p-1" href="/about">
        About
      </Link>
    </div>
  );
}
