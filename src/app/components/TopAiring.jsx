import Image from "next/image";

export const TopAiring = (props) => {
  const { bigTitle, name, image, ccepisode, translate } = props;

  return (
    <>
      <article className="flex ">
        <div className="flex flex-col items-center self-end justify-center">
          <div className="relative flex">
            <Image
              className="mt-[24px] ml-[30px]"
              src={image}
              alt={bigTitle}
              width={80}
              height={100}
            />{" "}
            <div className="flex ">
              <div className="mt-[90px]">
                <div>
                  <div className="mb-[20px]">
                    <span className="text-[#fff] font-[600] text-[15px] w-15 pl-2">
                      {name}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#111111] font-[600] text-[13px] bg-[#B0E3AF] h-5 w-12 pl-2 mt-[60px]">
                      {ccepisode}
                    </span>
                    <span className="text-[#111111] font-[600] text-[13px] bg-[#E3B5CD] h-5 w-12 pl-2 ">
                      {translate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <hr className="mt-[20px] w-[300px]" />
      <article className="flex ">
        <div className="flex flex-col items-center self-end justify-center">
          <div className="relative flex">
            <Image
              className="mt-[24px] ml-[30px]"
              src={image}
              alt={bigTitle}
              width={80}
              height={100}
            />{" "}
            <div className="flex ">
              <div className="mt-[90px]">
                <div>
                  <div className="mb-[20px]">
                    <span className="text-[#fff] font-[600] text-[15px] w-15 pl-2">
                      {name}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#111111] font-[600] text-[13px] bg-[#B0E3AF] h-5 w-12 pl-2 mt-[60px]">
                      {ccepisode}
                    </span>
                    <span className="text-[#111111] font-[600] text-[13px] bg-[#E3B5CD] h-5 w-12 pl-2 ">
                      {translate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <hr className="mt-[20px] w-[300px]" />
      <article className="flex ">
        <div className="flex flex-col items-center self-end justify-center">
          <div className="relative flex">
            <Image
              className="mt-[24px] ml-[30px]"
              src={image}
              alt={bigTitle}
              width={80}
              height={100}
            />{" "}
            <div className="flex ">
              <div className="mt-[90px]">
                <div>
                  <div className="mb-[20px]">
                    <span className="text-[#fff] font-[600] text-[15px] w-15 pl-2">
                      {name}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#111111] font-[600] text-[13px] bg-[#B0E3AF] h-5 w-12 pl-2 mt-[60px]">
                      {ccepisode}
                    </span>
                    <span className="text-[#111111] font-[600] text-[13px] bg-[#E3B5CD] h-5 w-12 pl-2 ">
                      {translate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <hr className="mt-[20px] w-[300px]" />
      <article className="flex ">
        <div className="flex flex-col items-center self-end justify-center">
          <div className="relative flex">
            <Image
              className="mt-[24px] ml-[30px]"
              src={image}
              alt={bigTitle}
              width={80}
              height={100}
            />{" "}
            <div className="flex ">
              <div className="mt-[90px]">
                <div>
                  <div className="mb-[20px]">
                    <span className="text-[#fff] font-[600] text-[15px] w-15 pl-2">
                      {name}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#111111] font-[600] text-[13px] bg-[#B0E3AF] h-5 w-12 pl-2 mt-[60px]">
                      {ccepisode}
                    </span>
                    <span className="text-[#111111] font-[600] text-[13px] bg-[#E3B5CD] h-5 w-12 pl-2 ">
                      {translate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <hr className="mt-[20px] w-[300px]" />
    </>
  );
};
