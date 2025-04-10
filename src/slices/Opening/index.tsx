'use client'
import { FC, useEffect } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./Styles.module.scss";
import Lang from "../../components/lang"

export type OpeningProps = SliceComponentProps<Content.OpeningSlice>;

const Opening: FC<OpeningProps> = ({ slice }) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.KUTE) {
      let config = {
        shapes: [
          { fill: "#D5FF90", stroke: "" },
          { fill: "transparent", stroke: "#D5FF90" },
          { fill: "transparent", stroke: "#D5FF90" },
          { fill: "transparent", stroke: "#D5FF90" },
        ],
        shapes1: [
          { fill: "#FFBCF9", stroke: "" },
          { fill: "transparent", stroke: "#FFBCF9" },
          { fill: "transparent", stroke: "#FFBCF9" },
          { fill: "transparent", stroke: "#FFBCF9" },
        ],
        shapes2: [
          { fill: "#B7DFFF", stroke: "" },
          { fill: "transparent", stroke: "#B7DFFF" },
          { fill: "transparent", stroke: "#B7DFFF" },
          { fill: "transparent", stroke: "#B7DFFF" },
        ],
        shapes3: [
          { fill: "#FFA167", stroke: "" },
          { fill: "transparent", stroke: "#FFA167" },
          { fill: "transparent", stroke: "#FFA167" },
          { fill: "transparent", stroke: "#FFA167" },
        ],
        colors: ["#D5FF90", "#FFBCF9", "#B7DFFF", "#FFA167"],
        duration: 1200,
        morph: 60,
        easing: "easingQuinticInOut",
      };

      let paths = [
        "M709.498 158c-171.062 0-336.86 170.013-414.112 244.508-81.05 78.16-220.906 117.187-220.906 306.215 0 237.322 163.682 598.787 348.781 514.902 126.72-57.429 183.931-99.993 253.844-275.484 54.084-135.757 210.296-193.167 210.296-420.15C887.4 290.672 946.747 158 709.498 158z",
        "M819.183 84C603.326 84 394.11 298.645 296.628 392.697 194.353 491.375 17.873 540.649 17.873 779.3c0 299.624 206.546 755.983 440.117 650.075 159.903-72.505 232.096-126.243 320.318-347.805 68.246-171.396 265.365-243.877 265.365-530.448C1043.673 251.499 1118.56 84 819.183 84z",
        "M929.557 11C666.76 11 412.049 272.269 293.37 386.75 168.855 506.864-46 566.84-46 857.333c0 364.706 251.46 920.194 535.82 791.281 194.676-88.254 282.567-153.665 389.972-423.354 83.087-208.625 323.07-296.851 323.07-645.67C1202.862 214.883 1294.034 11 929.557 11z",
        "M1039.93 -50C730 -50 430 250 270 410C100 580 -70 620 -70 890c0 430 290 980 630 850 240-100 330-170 450-500 100-250 380-350 380-760C1390 130 1520 -50 1039.93 -50z",
      ];

      let updatePaths = (i: number) => {
        document.querySelector(`#heart-path-${i + 1}`)?.setAttribute("d", paths[i]);
      };

      let transform = (params: any) => {
        for (let i = 0; i < 4; i++) {
          window.KUTE.to(
            `#heart-path-${i + 1}`,
            {
              path: paths[i],
              svgTransform: params,
            },
            {
              duration: config.duration,
              easing: config.easing,
              morphIndex: config.morph,
              complete() {
                if (i === 3) {
                  params.callback();
                  updatePaths(i);
                }
              },
            }
          ).start();
        }
      };

      for (let i = 0; i < 4; i++) {
        updatePaths(i);
        let selector = document.querySelector(`#heart-path-${i + 1}`);
        if (selector) {
          selector.setAttribute("fill", config.shapes[i].fill);
          selector.setAttribute("stroke", config.shapes[i].stroke);
        }
      }

      const transformParams = [
        {
          translate: [-370, -500],
          rotate: 0,
          scale: 1.001,
          callback() {
            
            for (let i = 0; i < 4; i++) {
              updatePaths(i);
              let selector = document.querySelector(`#heart-path-${i + 1}`);
              if (selector) {
                selector.setAttribute("fill", config.shapes1[i].fill);
                selector.setAttribute("stroke", config.shapes1[i].stroke);
              }
            }
            transform(transformParams[1]);
          },
        },
        {
          translate: [-300, 500],
          rotate: 0,
          scale: 1.2,
          callback() {
            
            for (let i = 0; i < 4; i++) {
              updatePaths(i);
              let selector = document.querySelector(`#heart-path-${i + 1}`);
              if (selector) {
                selector.setAttribute("fill", config.shapes2[i].fill);
                selector.setAttribute("stroke", config.shapes2[i].stroke);
              }
            }
            transform(transformParams[2]);
          },
        },
        {
          translate: [1000, 500],
          rotate: 45,
          scale: 1.3,
          callback() {
           
            for (let i = 0; i < 4; i++) {
              updatePaths(i);
              let selector = document.querySelector(`#heart-path-${i + 1}`);
              if (selector) {
                selector.setAttribute("fill", config.shapes3[i].fill);
                selector.setAttribute("stroke", config.shapes3[i].stroke);
              }
            }
            transform(transformParams[3]);
          },
        },
        {
          translate: [1200, -800],
          rotate: 30,
          scale: 1.1,
          callback() {
            
            for (let i = 0; i < 4; i++) {
              updatePaths(i);
              let selector = document.querySelector(`#heart-path-${i + 1}`);
              if (selector) {
                selector.setAttribute("fill", config.shapes[i].fill);
                selector.setAttribute("stroke", config.shapes[i].stroke);
              }
            }
            transform(transformParams[0]);
          },
        },
      ];

      transform(transformParams[0]);
    }
  }, []);


  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <Lang/>
        <PrismicRichText field={slice.primary.title}/>
        <div className={styles.links}>
          {slice.primary.link.map((link:any, i) => (
            <a key={`link${i}`} href={`/${link.lang}/${link.uid}`}>{link.text}</a>
          ))}
        </div>
      </div>
      <div className={styles.heartWrap}>
        <svg className={styles.heart} id="heart" viewBox="0 0 1920 3000" xmlns="http://www.w3.org/2000/svg">
          <path id="heart-path-4" ></path>
          <path id="heart-path-3" ></path>
          <path id="heart-path-2" ></path>
          <path id="heart-path-1" ></path>
        </svg>
      </div>
      <div className={styles.footer}>
        <p>{slice.primary.footer}</p>
        <div className={styles.logo}></div>
        
      </div>
    </div>
  );
};

export default Opening;
