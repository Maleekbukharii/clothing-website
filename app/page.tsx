import Image from "next/image";
import Navbar from "@/components/Navbar";
import Slideshow from "@/components/slideshow";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Slideshow/>
      <div className="flex flex-wrap justify-center space-x-0 lg:space-x-4">
        <Link href='/Men'>
  <div className="card bg-base-100 image-full w-full sm:w-80 md:w-96 shadow-xl m-2">
    <figure>
      <img src="sakunatee.jpeg" alt="sakuna-tee" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">MEN</h2>
      <p>Game up your fashion game</p>
      <div className="card-actions justify-end"></div>
    </div>
  </div>
  </Link>
  <Link href='/Women'>
  <div className="card bg-base-100 image-full w-full sm:w-80 md:w-96 shadow-xl m-2">
    <figure>
      <img src="solo.jpeg" alt="soloLeveling-tee" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Women</h2>
      <p>Game up your fashion game ladies</p>
      <div className="card-actions justify-end"></div>
    </div>
  </div>
  </Link>
  <Link href='/unisex'>

  <div className="card bg-base-100 image-full w-full sm:w-80 md:w-96 shadow-xl m-2">
    <figure>
      <img src="sugurutee.jpeg" alt="suguru-tee" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Unisex</h2>
      <p>Game up your fashion</p>
      <div className="card-actions justify-end"></div>
    </div>
  </div>
</Link>
</div>

      <Footer/>
    </main>
  );
}
