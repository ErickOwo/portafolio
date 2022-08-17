import CardQuality from "@components/CardQuality";

//import images
import linuxIcon from "@images/linux-icon.svg";
import visualStudioCodeIcon from '@images/visual-studio-code-icon.svg';
import chromeIcon from "@images/chrome-icon.svg";
import gitIcon from "@images/git-icon.svg";

import figmaIcon from "@images/figma-icon.svg";
import gimpIcon from "@images/gimp-icon.svg";

import nextIcon from "@images/next-icon.svg";
import tailwindIcon from "@images/tailwind-icon.svg";
import motionIcon from "@images/motion-icon.webp";
import vercelIcon from "@images/vercel-icon.svg";

import javascriptIcon from "@images/javascript-icon.svg";
import reactIcon from "@images/react-icon.png";
import webpackIcon from "@images/webpack.svg";
import babelIcon from "@images/babel-icon.svg";
import githubIcon from "@images/github-octocat-icon.svg";
import npmIcon from "@images/npm-icon.svg";
import prettierIcon from "@images/prettier-icon.svg";
import eslintIcon from "@images/eslint-icon.svg";
import nodeIcon from "@images/node-js-2-icon.png";
import expressIcon from "@images/express-icon.png";
import mongoIcon from "@images/mongodb-icon.svg";

const Qualities = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-20">
      <div className="p-2 pt-8 w-max flex flex-col items-center border-b border-emerald-500">
        <h3 className="font-semibold text-xl">Aptitudes</h3>
        <span>¿Con qué tecnologías trabajo?</span>
      </div>
      <div>
        <h3 
          className="font-semibold text-lg text-stone-700 text-center" >
            Herramientas de desarrollo
        </h3>
        <div className="flex flex-wrap gap-4 justify-center p-4 my-6 border border-stone-500/20 rounded-lg">
          <CardQuality
            image={linuxIcon}
            description='Linux Terminal' />
          <CardQuality
            image={visualStudioCodeIcon}
            description='Visual Studio Code' />
          <CardQuality
            image={chromeIcon}
            description='Chrome Dev Tools' />
          <CardQuality
            image={gitIcon}
            description='Git' />
        </div>
      </div>
      <div>
        <h3 
          className="font-semibold text-lg text-stone-700 text-center" >
            Herramientas de diseño
        </h3>
        <div className="flex flex-wrap gap-4 justify-center p-4 my-6 border border-stone-500/20 rounded-lg">
          <CardQuality
            image={gimpIcon}
            description='Gimp' />
          <CardQuality
            image={figmaIcon}
            description='Figma' />
        </div>
      </div>
      <div>
        <h3 
          className="font-semibold text-lg text-stone-700 text-center" >
            Herramientas de maquetación web y deploy
        </h3>
        <div className="flex flex-wrap gap-4 justify-center p-4 my-6 border border-stone-500/20 rounded-lg">
          <CardQuality
            image={nextIcon}
            description='Next JS' />
          <CardQuality
            image={tailwindIcon}
            description='Tailwind'
            tailwind={true} />
          <CardQuality
            image={motionIcon}
            description='Framer Motion'
            motion={true} />
          <CardQuality
            image={vercelIcon}
            description='Vercel' />  
        </div>
      </div>
      <div>
        <h3 
          className="font-semibold text-lg text-stone-700 text-center" >
            Javascript
        </h3>
        <div className="flex flex-wrap gap-4 justify-center p-4 my-6 border border-stone-500/20 rounded-lg">
          <CardQuality
            image={javascriptIcon}
            description='Javascript' />
          <CardQuality
            image={reactIcon}
            description='React JS' />
          <CardQuality
            image={webpackIcon}
            description='Webpack' />
          <CardQuality
            image={babelIcon}
            description='Babel' />
          <CardQuality
            image={githubIcon}
            description='GitHub' />
          <CardQuality
            image={npmIcon}
            description='NPM' />
          <CardQuality
            image={prettierIcon}
            description='Prettier' />
          <CardQuality
            image={eslintIcon}
            description='esLint' />
          <CardQuality
            image={nodeIcon}
            description='Node JS' />
          <CardQuality
            image={expressIcon}
            description='Express JS' />
          <CardQuality
            image={mongoIcon}
            description='Mongo DB' />
        </div>
      </div>
    </div>
  )
}

export default Qualities