import { useState } from "react";
import Logo from "./Logo";

export default function Overlay() {
  const [show, setShow] = useState(true)
  if (!show) return null
  return (
    <div className="lg:hidden min-w-[375px] font-sf fixed top-0 bottom-0 left-0 right-0 bg-green">
      <div className="flex h-full flex-col justify-between px-6">
        <div className="mt-10 mb-6 lg:mt-14 lg:mb-12">
          <Logo fill="white" />
        </div>
        <div>
          <h1 className="text-white font-bold text-5xl leading-[48px] -tracking-[1px]">Treat</h1>
          <h1 className="text-white font-bold text-5xl leading-[48px] -tracking-[1px]">yourself.</h1>
          <p className="text-white text-[14px] leading-[21px] -tracking-[0.5px]">Find the best restaurants in your city </p>
          <p className="text-white text-[14px] leading-[21px] -tracking-[0.5px]">and get it delivered to your place!</p>
        </div>
        <button onClick={() => setShow(false)} className="rounded-lg w-[327px] border-[1px] py-5 mx-auto mb-10 font-bold text-[16px] leading-[16px] -tracking-[0.5px] text-white">
          Continue
        </button>
      </div>
    </div>
  )
}