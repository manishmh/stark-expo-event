'use client'
import Banner from "@/components/Banner";
import Timeline from "@/components/Timeline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiMenuAltRight } from 'react-icons/bi'

const OFFSET = 66

const index = () => { 
  const [navbar, setNavbar] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= OFFSET) {
        setShowBackground(true);
      } else setShowBackground(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return(
  <>
    <nav className={`flex justify-between w-full fixed top-0 z-10 items-center py-2 sm:py-1 px-2 md:px-8 ${showBackground ? "backdrop-blur-md" : ""}`}>
      <div className="flex gap-2 items-center">
        <Image
          src="https://s3-alpha-sig.figma.com/img/abdc/bb2c/6ff9fdad39957f13fc106d1b18f97bbc?Expires=1693180800&Signature=puJkfSvbjNW1L-t4fXMTGFDgv0SPuIlwenLlkYka79vNt~nebu7A8GtSFHhU~w1C3r5t6hu7d1t8xRc2SagHmGzSJ-wL8vKW-3JsQ0O6fRf17-hZUFruwImKvIPy19weRXqvrFAQwxF1qcDSdZwuVUA6hcaUd--MW0v08TcMYqXC~fgGBmWofUj4K8~iyXQ0Ubq6vDgG8nhdrT4czFtN0XKCnGEn6u1wvt004fUgYXdDP6u~kZ2ljD04Vnp8qh0pM1RJNo7ciTAFURtUWyiRBHtQt0iVpqf3aADjyfy4ety4A5mn4dFlODqZFR6f19F7zRTeEc4BCg6HIwPw~Pk3Cg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="mlsa logo"
          width={66}
          height={58}
          quality={100}
        ></Image>
        <Link href="/">
          <div className="font-bold text-2xl bg-mlsa bg-clip-text text-transparent">MLSA</div>
        </Link>
      </div>
      <BiMenuAltRight  className="md:hidden text-white text-end text-2xl mr-4"  onClick={() => setNavbar((prev) => !prev)}/>
      <div className={`flex-col md:flex-row absolute md:static right-6 top-16 py-6 rounded-md px-3 bg-blue-800 md:bg-transparent gap-2 sm:gap-8 items-center text-white ${navbar ? "flex" : "hidden md:flex"}`}>
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="#aboutDiv" className="hover:text-blue-400">About</Link>
        <Link href="#timelineDiv" className="hover:text-blue-400">Timeline</Link>
        <Link href="https://mlsa.unknownclub.me/" target="_blank">
          <button className="bg-button rounded-full text-white px-2 sm:px-4 py-0.5 md:py-1">Register Now</button>
        </Link>
      </div>
    </nav>
    <div className="flex flex-col items-center mt-[100px]">
      <div className="max-w-[450px] md:max-w-[80vw] pb-2 w-full flex px-4 flex-row justify-center items-end gap-2">
        <span className="border-b-2 border-blue-400 w-full border-dashed"></span>
        <span className="text-3xl font-bold md:text-6xl flex-shrink-0 bg-heroText text-transparent bg-clip-text heroText pb-2">MLSA Brings You</span>
        <span className="border-b-2 border-blue-400 w-full border-dashed"></span>
      </div>
      <div className="text-4xl md:text-6xl mt-4 text-white ">Stark Expo : </div>
      <p className="px-6 md:px-0 md:w-9/12 mt-6 text-white text-center">Your Portal to Marvel-Infused Tech Exploration! Here, you'll learn about various technical domains from experts, connect with like-minded peers and craft meaningful solutions by participating in our challenging ideathon providing you with an immersive experience that kindles your passion for innovation and propels you towards a future of limitless possibilities. And this is not all! The best ideas will be selected and awarded with exciting prizes and certificates!</p>
    </div>
   <Banner /> 
    <div id="aboutDiv" className="h-8 w-full"></div>
  <div className="text-white mt-16 mx-4 md:mx-10 relative shadow-aboutBanner bg-[#d9d9d9]/10 rounded-xl border-4 text-center border-[#0070C5]" id="aboutDiv">
    <h1 className="mt-8 text-3xl font-semibold">ABOUT</h1>
    <p className="mx-4 text-xl md:mx-28 my-8 md:my-16 md:text-3xl">Stark Expo brings together technology and the Marvel universe in an exciting blend of innovation. This ideathon guides participants through an exciting journey, exploring various tech domains of their choice guided by our comprehensive roadmap, taking a step beyond. A unique facet of this journey includes the introduction to prompt engineering—a strategic guide that navigates tech challenges to unlock the full potential of ChatGPT! </p>
    <p className="mx-4 text-xl md:mx-28 my-8 md:my-16 md:text-3xl z-2">Participants will receive a problem statement and the task will be to ideate smart solutions that address the given challenge effectively using a PPT. Our event is designed to be inclusive and accessible with no prerequisites required. Join us for an engaging and fun experience!
    </p>
    <div className="flex justify-between absolute bottom-0 w-full">
    <Image 
      src="https://s3-alpha-sig.figma.com/img/950c/efb8/b29110e7447f30073b13ee8d40256348?Expires=1693180800&Signature=TgYBJXE0WxsG2Hlz6hq5SgTGhvVC5CieSEhcyN3EPjavfMRfj0qTYZQfUEce3JOiN8DNd97ll1lCKMGZYY50IR02k1WL3Q6tGIj39SxunmTa7B2tQKGf1aRuru4JnSm-eyi-bOIlCE-REz3ljS9zLtP-8ij-u~PZDb~1zigc2y5-v4RAOW1ia3N1XcCmWnPPhWY63LbRTeJAmNgypOD7NSo-3UimV8LLEg-AmaGvRrzMcA-G1Hm9KJ3yEE~~3IT1ozrBP9zlyLa5EDZi4Te~Q~8RYtFplaKKRvtlykAViY-qv10TQhQhlk4qMzwytiUHtCRwTZqkYq-HB81Oaef1Jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
      alt="footer of about"
      width={111}
      height={197}
      className="z-[-1]"
    ></Image>
    <Image 
      src="https://s3-alpha-sig.figma.com/img/036d/7e1e/e6d9dc2fb57b6b493ebc663cd55a625e?Expires=1693180800&Signature=Set~HA1hrphmqP-LDx2In~I5leafNzrJZTlXkQxK2X7-bcu4AnR0n8if8b0oPiX2f-3N1r2mYhainrBXDKjLSrd8hKpVntfVuqkWZ~y87EO5C4DlbXm6SV16QmZX2n2L8sGBj2CYJ-TKculOHnaZ5jAU~4W8qO4D3ie71j-3m1PuSLLcV57bghUMpOp-QtAeLK1lqTIu8r1xcAKToyZ2Lf4c9hw1TMWYmMmHmcxevxK0O~zXyWi8pHULMbPmcUbHczH8fgJuhD2COsMSJ2xMaXTa8opuB040cZmH1v-YXDM3YwAFOQgn71XRiGOdOQ7N5d7ElWPbXLFN5l9dhTVy2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      alt="footer of about"
      width={111}
      height={197}
      className="z-[-1]"
    ></Image>
    </div>
  </div>
  <div id="timelineDiv" className="h-8 w-full"></div>
  <div  className="px-8 py-12 border-4 border-[#0070C5] mt-16 mb-48 md:mt-32 flex flex-col justify-center items-center shadow-aboutBanner rounded-xl mx-4 md:mx-10">
    <div className="md:flex block justify-center text-center items-center">
      <span className="text-3xl  font-bold md:text-6xl flex-shrink-0 bg-heroText text-transparent bg-clip-text">TIMELINE</span>
      <h2 className="text-white absolute right-1/2 mt-2 md:mt-0 translate-x-1/2 md:translate-x-0 md:right-[60px] lg:right-[100px] lg:text-xl xl:text-2xl 2xl:text-3xl">Join Us At<br/>campus-14 seminar hall</h2>
    </div>
    <h3 className="text-white mt-24 text-xl md:text-2xl xl:text-3xl text-center">join us in this extraordinary journey the brand new event From<br/> MLSA and explore various domains of your interest</h3>
    <Timeline />
    <Link href="https://mlsa.unknownclub.me/" target="_blank">
      <button className="text-white mt-8 md:mt-[200px] text-3xl bg-[#06174f] px-10 py-2 rounded-tr-3xl rounded-bl-3xl">REGISTER</button>
    </Link>
  </div>
  </>
  )
}

export default index;
