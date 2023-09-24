'use client'

import Typewriter from 'typewriter-effect'
import Image from 'next/image'
import './style.css'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'
export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const strings = ["Hey there,I'm Pratik... "]
  return (
    <section
      ref={ref}
      id="home"
      className="p-4 max-w-screen-xl  mx-auto text-center flex flex-col items-center justify-between"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full mb-12">
        {/* Image part */}
        <motion.div
          className="flex items-center justify-center w-full sm:w-1/2"
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'tween',
            duration: 1,
          }}
        >
          <div className="relative">
            <Image
              src="/profile.jpeg"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-96 w-96 rounded-lg object-cover border-[0.35rem] border-white shadow-xl"
            />
            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
        </motion.div>

        {/* Text part */}
        <div className="w-full sm:w-1/2 text-left sm:pl-10">
          <div className="text-2xl">
            <span style={{ whiteSpace: 'nowrap' }}>
              <Typewriter
                options={{
                  strings: strings,
                  autoStart: true,
                  loop: true,
                  delay: 200,
                }}
              />
            </span>
          </div>

          <ul className="list-disc list-inside mt-4">
            <li className="font">Full-Stack Developer</li>
            <li className="font">2+ years of experience</li>
            <li className="font">Learning more about Cloud ,ML and AI.</li>
            <li className="font">
              Enjoys building <span className="italic">sites & apps</span>
            </li>

            <li className="">
              Loves working on{' '}
              <span className="font-bold">TypeScript & Next.js</span>
            </li>
            <li className="">
              Exprienced{' '}
              <span className="font-bold">in Springboot & Node.js </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact me content */}
      <motion.div
        className="md:mt-18 flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium w-full"
        initial={{ y: 1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 1,
        }}
      >
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition"
            onClick={() => {
              setActiveSection('Contact')
              setTimeOfLastClick(Date.now())
            }}
          >
            Contact me{' '}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          {/* <a
            className="group bg-white px-7 py-3 flex items-center gap-4 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/CV.pdf"
            download
          >
            Download CV{' '}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a> */}
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/pratikupreti/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/pratikupreti7"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
