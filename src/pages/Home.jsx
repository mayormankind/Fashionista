import Header from "../Components/Header";

export default function Home() {
  return (
    <div className="flex w-screen h-screen flex-col gap-5">
      <div className="flex bg-cover w-full h-full relative" style={{backgroundImage:'url(assets/cover.png)'}}>
        <Header/>

      </div>
    </div>
  )
}
