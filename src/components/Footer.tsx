

function Footer () {
    return(
        <>
        <footer>
            <div className="absolute w-[calc(100%_-_123px)] top-[685px] right-[63px] left-[60px] h-[65px] overflow-hidden text-left text-[0.63rem] text-silver font-body-1-regular-16-22-03px">
              <div className="absolute top-[calc(50%_-_24.5px)] left-[calc(50%_-_621.5px)] flex flex-col items-center justify-start">
                <div className="flex flex-row items-center justify-start gap-[1.25rem]">
                  <button className="cursor-pointer p-[1.56rem] bg-black rounded-6xs box-border w-[170px] h-[50px] flex flex-row items-center justify-between border-[1px] border-solid border-light-white">
                    <img
                      className="relative w-[19.22px] h-[22.82px]"
                      alt=""
                      src={require("./utils/apple.png")}
                    />
                    <div className="relative text-[0.75rem] tracking-[0.5px] leading-[1.13rem] uppercase font-hero-text text-light-white text-center">
                      APP STORE
                    </div>
                  </button>
                  <button className="cursor-pointer p-[0.75rem] bg-black rounded-6xs box-border w-[170px] h-[50px] flex flex-row items-center justify-between border-[1px] border-solid border-light-white">
                    <img
                      className="relative w-[19.45px] h-[21.22px]"
                      alt=""
                      src={require("./utils/android.png")}
                    />
                    <div className="relative text-[0.75rem] tracking-[0.5px] leading-[1.13rem] uppercase font-hero-text text-light-white  ">
                      GOOGLE PLAY
                    </div>
                  </button>
                </div>
              </div>
          <div className="absolute top-[0px] left-[calc(50%_+_96.5px)] flex flex-col items-center justify-start">
            <div className="relative leading-[0.81rem] inline-block w-[363px] text-light-white text-center">
              <p className="m-0">
                Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
              </p>
              <p className="m-0">
                See our BrokerCheck. Investing involves risk; you may lose money.
                Bitcoin trading offered by Cash App. Cash App Investing does not
                trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
                App facilitates banking services through Sutton Bank and Lincoln
                Savings Bank, Members FDIC.
              </p>
            </div>
          </div>
          <div className="absolute top-[21px] left-[calc(50%_+_495px)] flex flex-row items-center justify-start gap-[1.88rem]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6 overflow-hidden shrink-0">
              <img
                className="absolute h-full w-[95.52%] top-[0%] right-[2.24%] bottom-[0%] left-[2.24%] max-w-full overflow-hidden max-h-full"
                alt=""
                src={require("./utils/instagram.png")}
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[21px] h-[17px] overflow-hidden shrink-0">
              <img
                className="absolute h-[99.67%] w-[99.27%] top-[0%] right-[0.73%] bottom-[0.33%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src={require("./utils/twitter.png")}
              />
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[21px] h-[21px] overflow-hidden shrink-0">
              <img
                className="absolute h-[95.03%] w-[95.05%] top-[2.4%] right-[2.26%] bottom-[2.57%] left-[2.69%] max-w-full overflow-hidden max-h-full"
                alt=""
                src={require("./utils/discord.png")}
              />
            </button>
          </div>
          <img
            className="absolute h-[46.15%] w-[1.45%] top-[27.69%] right-[49.24%] bottom-[26.15%] left-[49.32%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={require("./utils/arrow.png")}
          />
        </div>
    </footer>
        </>
    )
}

export default Footer;