import Header from "../Components/Header";
import HeaderMobile from "../Components/HeaderMobile";
import HomeModal from "../Components/HomeModal";

export default function Home() {
  return (
    <div className="flex w-full h-screen flex-col gap-5">
      <div className="relative hidden bg-cover w-full h-full md:flex" style={{backgroundImage:'url(assets/cover.png)'}}>
        <div className="flex flex-col w-full max-w-6xl h-full mx-auto">
          <HomeModal/>
        </div>
      </div>
      <div className="relative flex flex-col bg-cover w-full h-full md:hidden" style={{backgroundImage:'url(assets/i.webp)'}}>
        <HomeModal/>
      </div>
    </div>
  )
}
