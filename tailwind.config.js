module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        mlsa: "linear-gradient(88deg, #0070C5 0%, #3BABCF 100%)",
        heroText: "linear-gradient(88deg, #70CFFF 0%, #3BABCF 100%)",
        button: "linear-gradient(90deg, #0070C5 0%, #3BABCF 100%)",
        banner: "linear-gradient(133deg, #9A76E6 0%, #6237A7 41.13%, #5407A2 100%)"

      },
      boxShadow: {
        heroTextShadow: "0px 0px 24px rgba(255, 251, 251, 0.48)",
        bannerDate: "0px 4px 10px #0070C5",
        aboutBanner: "0px 4px 10px #70CFFF"
      },
      fontFamily: {
        Marvel: ['Marvel'], // 'sans' as a fallback
      },
    },
  },
};
