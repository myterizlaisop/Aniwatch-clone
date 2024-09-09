import Image from "next/image";
import React from "react";
import { TrendingCard } from "./components/TrendingCard";



function AnimeCard() {
  return (
    <>
    <div className="">
      <div className="max-w-[1440px] bg-black mx-auto">
        <div className="max-w-[1440px] max-h-[70px] mx-auto flex bg-black ">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          className=" mb-[10px] mt-[10px]"
        />
        <Image
          src="/image (1).png"
          width={121.4}
          height={40}
          className="mb-[10px] mt-[10px]"
        />
        <div className="flex items-center rounded-full p-2 ml-[30px]">
          <input
            type="text"
            placeholder="Search anime..."
            className="bg-transparent  px-4 flex-grow  text-gray-700"
          />
          <button className="text-gray-600 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#9e9e9e"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </button>
        </div>
        <div className="flex gap-1 mt-[10px] ml-3">
          <div>
            <Image src="/discord.png" width={32} height={32} className=" " />
          </div>
          <div>
            <Image src="/shuudan.png" width={32} height={32} className=" " />
          </div>
          <div>
            <Image src="/robot.png" width={32} height={32} className=" " />
          </div>
          <div>
            <Image src="/twitter.png" width={32} height={32} className=" " />
          </div>
        </div>
        <div>
          <div className="bg-yellow-400 rounded-md w-[70px] h-[40px] flex content-center absolute right-80 mt-[10px]">
            <button className="ml-[10px]">Login</button>
          </div>
        </div>
      </div>

      <div className=" text-white p-6 max-w-[1440px]  mx-auto  w-full relative ">
        <Image
          src="/background.png"
          width={990}
          height={650}
          className="absolute w-[990px] h-[630px] right-0 bottom-0 "
        />
        <div className="flex">
          <div className=" pl-6">
            <h2 className="text-yellow-500 text-lg mb-2 mt-[200px]">
              #5 Spotlight
            </h2>
            <h1 className="text-4xl font-bold ">Pseudo Harem</h1>
            <div className="relative">
              <div className="flex items-center ">
                <span className="flex items-center space-x-2 mb-6 mt-6 ">
                  <span className="bg-gray-700 px-2 py-1 rounded">TV</span>
                  <span className="bg-gray-700 px-2 py-1 rounded">24m</span>
                  <span className="bg-gray-700 px-2 py-1 rounded">
                    Jul 5, 2024
                  </span>
                  <span className="bg-green-500 px-2 py-1 rounded">HD</span>
                  <span className="bg-gray-700 px-2 py-1 rounded">CC</span>
                  <span className="bg-gray-700 px-2 py-1 rounded">9</span>
                  <span className="bg-gray-700 px-2 py-1 rounded">12</span>
                </span>
              </div>
              <p className="text-sm w-[760px] mb-6 line-clamp-3">
                Eiji Kitahama, a second-year high school student, just wants to
                be popular. To help him realize this dream, Rin Nanakura, his
                junior in the drama club, uses her acting skills to create a
                harem of loving girls for him. Though the various “girls” all
                show fondness toward Eiji, the affection of the actress.
              </p>
            </div>

            <div className="flex space-x-4 ">
              <button className="bg-yellow-500 w-[150px] h-[50px] rounded-xl text-gray-900 px-4 py-2">
                Watch Now
                <Image
                  src="/watch.png"
                  width={16}
                  height={16}
                  className="absolute left-12 bottom-10 ml-2"
                />
              </button>
              <div className="flex px-4 py-2 rounded-xl w-[80px] h-[50px]">
                <button className="">Detail</button>
                <Image
                  src="/svg (2).png"
                  width={16}
                  height={8}
                  className="ml-[5px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-10 bottom-0">
          <Image
            src="/left.png"
            width={40}
            height={40}
            className=" mb-[10px] mt-[10px]"
          />
          <Image
            src="/right.png"
            width={40}
            height={40}
            className=" mb-[10px] mt-[10px]"
          />
        </div>
      </div>
      <div className="w-[1440px] mx-auto mt-10">
        <Image
          src="/image (2).png"
          width={728}
          height={90}
          className="mx-auto"
        />
      </div>

      <div className="container my-4 mx-auto max-w-[1440px] ">
        <p className="text-[#FFDD95] text-xl">Trending</p>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6">
          <div>
            <TrendingCard
              title="One piece"
              ranking={1}
              image="https://via.placeholder.com/100x200"
            />
          </div>
          <div>
            <TrendingCard
              title="One piece"
              ranking={1}
              image="https://via.placeholder.com/100x200"
            />
          </div>
          <div>
            <TrendingCard
              title="One piece"
              ranking={1}
              image="https://via.placeholder.com/100x200"
            />
          </div>
          <div>
            <TrendingCard
              title="One piece"
              ranking={1}
              image="https://via.placeholder.com/100x200"
            />
          </div>
          <div>
            <TrendingCard
              title="One piece"
              ranking={1}
              image="https://via.placeholder.com/100x200"
            />
          </div>
          <div>
            <TrendingCard
              title="One Piece" 
              ranking={1}
              image="https://via.placeholder.com/100x200"
            />
          </div>
        </div>
      </div>
    </div>
    
    </div>
    
    </>
  );
}

export default AnimeCard;
