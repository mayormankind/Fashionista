import HomeModal from "../Components/HomeModal";

export default function Home() {
  return (
    <div className="flex w-full h-screen" id="home">
      {/* Desktop hero */}
      <div className="relative hidden bg-cover bg-center w-full h-full md:flex" style={{backgroundImage:'url(assets/cover.png)'}}>
        <div className="flex flex-col justify-end pb-16 w-full max-w-6xl h-full mx-auto">
          <HomeModal/>
        </div>
      </div>
      {/* Mobile hero */}
      <div className="relative flex flex-col justify-end bg-cover bg-center w-full h-full md:hidden" style={{backgroundImage:'url(assets/i.webp)'}}>
        <HomeModal/>
      </div>
    </div>
  )
}
