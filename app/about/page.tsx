import React from "react"
import Image from "next/image"
import Link from "next/link"
import { INTERESTS } from "../../utils/data"

export default function AboutPage() {
  return (
    <main className="mx-auto w-full flex  max-w-3xl flex-1">
      <div className="flex flex-col space-y-4 py-24 px-6 md:px-0  sm:py-28 md:space-y-0">
        <h1 className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent  md:pb-4 md:text-6xl text-center">
          About.
        </h1>
        <div className="flex flex-col space-y-5 items-center  md:flex-row md:space-y-0 md:space-x-4 ">
          <div className="md:mt-2 md:w-1/2">
            <Image
              src="/headshot.png"
              alt=""
              width={350}
              height={350}
              className="rounded-lg shadow-2xl "
            />
          </div>
          <div className="text-neutral-100 text-center md:text-left md:mt-2 md:w-1/2">
            <p className="text-lg leading-7 ">
              Hi, my name is <span className="font-semibold">Hosna Qasmei</span>
              ! I am a software engineer and developer based in{" "}
              <span className="font-semibold">Los Angeles, CA.</span>
            </p>
            <br />
            <p className="text-lg leading-7">
              I have a wide range of hobbies and passions that keep me busy.
              From making YouTube videos, reading, watching soccer and
              traveling. I am always seeking new experiences and learning new
              things. I believe that you should{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-lg font-semibold text-transparent">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do 🙂.
            </p>
            <br />
          </div>
        </div>

        <div className="text-neutral-100 pb-4">
          <h1 className="my-4 text-2xl font-bold">Interests</h1>

          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2  ">
            {INTERESTS?.map((post, idx) => {
              return (
                <Link key={idx} href={`about/${post.slug}`}>
                  <div className="mx-auto p-4 flex flex-row space-x-4 md:space-x-0 md:flex-col max-w-md rounded-lg bg-neutral-800 shadow hover:bg-neutral-700 text-left">
                    <div className="flex items-center justify-center md:justify-start">
                      {post.icon}
                    </div>
                    <div>{post.title}</div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
