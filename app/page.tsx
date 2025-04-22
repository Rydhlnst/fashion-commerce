

import dbConnect from "@/lib/mongodb";
import Image from "next/image";

export default async function Home() {
  try {
    await dbConnect();
    console.log("Connect Mang")
  } catch (error) {
    console.log(error)
  }
  return (
    <div>
      <h1>Haii</h1>
    </div>
  );
}
