
// TIPOGRAFIA 
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import "tailwindcss";
export default {
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
theme: {
  extend: {

    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },

    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
     
    },

     fontSize: {    
    text-xs: var(--text-xs); /* 0.75rem (12px) */ 
    text-sm: var(--text-sm); /* 0.875rem (14px) */ 
    text-xl: var(--text-xl); /* 1.25rem (20px) */ 
    text-2xl: var(--text-2xl); /* 1.5rem (24px) */ 
    text-3xl: var(--text-3xl); /* 1.875rem (30px) */ 
    text-4xl: var(--text-4xl); /* 2.25rem (36px) */ 
    text-5xl: var(--text-5xl); /* 3rem (48px) */ 
    text-6xl: var(--text-6xl); /* 3.75rem (60px) */ 
    text-7xl: var(--text-7xl); /* 4.5rem (72px) */ 
    text-8xl: var(--text-8xl); /* 6rem (96px) */ 
    text-9xl: var(--text-9xl); /* 8rem (128px) */ 
    },

    lineHeight: {
    XSline-height: var(--text-xs--line-height); /* calc(1 / 0.75) */
    SMline-height: var(--text-sm--line-height); /* calc(1.25 / 0.875) */
    BASEline-height: var(--text-base--line-height); /* calc(1.5 / 1) */
    LGline-height: var(--text-lg--line-height); /* calc(1.75 / 1.125) */
    XLline-height: var(--text-xl--line-height); /* calc(1.75 / 1.25) */
    2Xline-height: var(--text-2xl--line-height); /* calc(2 / 1.5) */
    3Xline-height: var(--text-3xl--line-height); /* calc(2.25 / 1.875) */
    4Xline-height: var(--text-4xl--line-height); /* calc(2.5 / 2.25) */
    5Xline-height: var(--text-5xl--line-height); /* 1 */
    6Xline-height: var(--text-6xl--line-height); /* 1 */
    7Xline-height: var(--text-7xl--line-height); /* 1 */
    8Xline-height: var(--text-8xl--line-height); /* 1 */
    9Xline-height: var(--text-9xl--line-height); /* 1 */
    }
  
  },
}
  
};

