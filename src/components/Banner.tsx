import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="w-full flex bg-banner mt-14  h-[290px] relative">
        <Image 
          src="https://s3-alpha-sig.figma.com/img/6075/a9b3/261dc3218e26a0d9750889db4e5f6ccd?Expires=1693180800&Signature=PhSVGYyQx9QDagPzTxKFkLLRqGLWTVZVieVOq6-qAB1bUm4rR9Lo6yZcg4GoB5HheFUH2DGj9gU7vw6RybUUhMuCMWBkJiUdPNMoNjrzXmZfwmtp2qbrzqYDc5WSGd1BvCwDh5v0U~yoobz6L16bE7TfdD2nHj1CzHgzmRrcTJ227CxCCJsqoSavdYuHPiRPhO4hIVQ4AllPwOemR6On0bHW95s6Y80MUags-gvIE6K-G6WbKSzs8ZF70J52IPrAP5dz1qq0-NvcXJWYKC3GOtMWtfWrX27qrs1TqIaPbmxHxe9jHfd36jh-9jYrf0MXmwSen8Yf6qQ6OQX9eTWFLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
          alt="banner spider web"
          width={184}
          height={400}
          quality={100}
          className="h-[200px] w-[140px] md:w-[184px] md:h-[222px] absolute left-0 top-0"
        ></Image>
      <div className="w-full justify-center flex h-full md:gap-16">
        <Image 
          src="https://s3-alpha-sig.figma.com/img/b176/0340/a6d90dda6bae6aed1dfd4a1fc20c72bc?Expires=1693180800&Signature=lDfF8BGpW~-9KRFN~i62zVY8Xxhe6flXMRvSAKrbeJ3i-j6XZKUX5EbBFsUXeA8XO-fi02njDxf12OtAIWTWhewlcDdvJlXNcmm8qmEPPm83GLiJpbR3Y2XwHJelox0Dpv4oPrS66CBuSxqkk57sj9nC6tcc6a4xDU5VFqINwasPy7TvxKPtKYVVd-t75epy3zTpDlEV0UVBJiiEvmdWoGlob5QU8XGtfD5LjPMCQ-2JFJ1onzahqdizG~yQJWGwJjjA8oCE-jk6oBfqa9YLwWUjVEmR5e7isY~hx9JgLuUrtAcIQTo5EGO9UPpPEq1MGva3-4lBOpNfVD~Z3pnKsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="miles"
          width={254}
          height={450}
          quality={100}
          className="h-[450px] hidden sm:block"
        ></Image>
        <div className="flex flex-col items-center gap-4 justify-center">
          <div className="text-center text-4xl md:text-5xl font-bold text-white bannerText">
            27 August 2023<br/>Stark Expo:
          </div>
          <Link href="https://registrations-mlsa.vercel.app/" target="_blank">
            <button className="bg-button rounded-full text-white px-2 sm:px-4 py-0.5 md:py-1">Register Now</button>
          </Link>
        </div>
        <div className="w-[254px] hidden xl:block h-full"></div>
      </div>
      <div className="flex flex-col items-end justify-between absolute right-0 h-full">
        <Image
          src="https://s3-alpha-sig.figma.com/img/5a0b/24c2/50e897f83824abb89d9a0021d662b642?Expires=1693180800&Signature=l7xshtQ63Pqp-W4FJNORutAUw2q2YtUKTwoXBZ1wAOFHuzi66IMifttK9lr3LzHRTr2ybbZLQHkmHGlx-46DQuKfDChl3dfCMt~yKlSYiIH4UM4KTHUkdSueL4FIzE8qAXaq7hf-SiapD5bfWjpw5IhlY0xr6dhZqBfugFU2fAQN40QNIz8WyIdD7JNPou~sn7v8YKEAUP7NU1hhdbkczvYr3gthrwNnpHcffxPRZDrKvwR-4VFoGN0yJDn6C1UBy8Qww1F2Kb44pw4~oOcZ4480wgz-~8RTF02rAgsMcaBpu4JiJX3Vgl0Sc4OBh0bHF74jYyEd~gGw0M-cZt~4cQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
          alt="red web small"
          width={82}
          height={84}
          className="rotate-90 w-16 md:w-[82px]"
        ></Image>
        <Image
          src="https://s3-alpha-sig.figma.com/img/5a0b/24c2/50e897f83824abb89d9a0021d662b642?Expires=1693180800&Signature=l7xshtQ63Pqp-W4FJNORutAUw2q2YtUKTwoXBZ1wAOFHuzi66IMifttK9lr3LzHRTr2ybbZLQHkmHGlx-46DQuKfDChl3dfCMt~yKlSYiIH4UM4KTHUkdSueL4FIzE8qAXaq7hf-SiapD5bfWjpw5IhlY0xr6dhZqBfugFU2fAQN40QNIz8WyIdD7JNPou~sn7v8YKEAUP7NU1hhdbkczvYr3gthrwNnpHcffxPRZDrKvwR-4VFoGN0yJDn6C1UBy8Qww1F2Kb44pw4~oOcZ4480wgz-~8RTF02rAgsMcaBpu4JiJX3Vgl0Sc4OBh0bHF74jYyEd~gGw0M-cZt~4cQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
          alt="red web big"
          width={188}
          height={196}
          className="rotate-180 w-[120px] md:w-[188px]"
        ></Image>
      </div>
    </div>
  )
};

export default Banner;
