function Hero () {
    return (
        <>

        // Positioning could be have been done dynamically

      <div className="absolute w-full bg-black h-full bgimg">
        <div className="absolute overflow-hidden flex flex-row items-center justify-start">
        </div>
        <div className="absolute overflow-hidden flex flex-row items-center justify-start gap-[1.25rem]">
        </div>
        <div className="absolute top-[-248px] left-[0px] w-[1360px] h-[1000px] overflow-hidden">
          <div className="absolute top-[289px] left-[0px] w-[1366px] h-[692px] overflow-hidden">
            <div className="absolute top-[-277px] left-[0px] w-[1366px] h-full">
              <div className="absolute top-[0px] left-[0px] w-[1366px] h-full overflow-hidden flex flex-row items-start justify-start">
              </div>
            </div>

            // Phone section

            <div className="relative w-full h-[694px] overflow-hidden text-center text-[12.5rem] text-light-white  font-bold font-sans items-stretch">
            <div className="absolute h-[43.77%] w-[52.05%] top-[20.87%] left-[23.72%] tracking-[0.5px] leading-[10.38rem] uppercase flex items-center justify-center text-stretch">
              CASH
            </div>
            <img
              className="absolute h-[65.47%] w-[27.09%] top-[20.81%] right-[36.46%] bottom-[13.72%] left-[36.46%] max-w-full overflow-hidden max-h-full object-cover ml-2"
              alt=""
              src={require("./utils/intro-phone.png")}
            />
            <div className="absolute h-[43.77%] w-[52.05%] top-[31.45%] left-[23.72%] tracking-[0.5px] leading-[10.38rem] uppercase flex items-center">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">&nbsp;</p>
                <p className="m-0">APP</p>
              </span>
            </div>
            </div>

            // Rest of the images section
            <img
              className=" top-32 left-48 absolute animate-float"
              src={require("./utils/intro-cube.png")}
              alt=""
            />
            <img
              className="top-32 right-32 absolute animate-float"
              src={require("./utils/intro-stairs.png")}
              alt=""
            />
            <img
              src={require("./utils/intro-cubes.png")}
              className="bottom-32 left-32 absolute animate-float"
              alt=""
            />
            <img
              className=" -bottom-24 right-24 absolute animate-float"
              src={require("./utils/intro-pillar.png")}
              alt=""
            />
       </div>
      </div>
     </div>
    <div/>
    </>
    )
}

export default Hero;