import './Slider.scss'

import GitHubSVG from '/icons/github.svg'
import JavaScriptSVG from '/icons/javascript.svg'
import ReactSVG from '/icons/react.svg'
import GitSVG from '/icons/git.svg'
import HtmlSVG from '/icons/html.svg'
import NpmSVG from '/icons/npm.svg'
import NotionSVG from '/icons/notion.svg'
import FigmaSVG from '/icons/figma.svg'
import CssSVG from '/icons/css.svg'
import ViteSVG from '/icons/vite.svg'
import SassSVG from '/icons/sass.svg'

export const Slider = () => {
    return (
        <>
            <section className="Slider">
                <ul className="Slider--track">
                    <li className="Slider--item">
                        <img className="Slider--img" src={JavaScriptSVG} alt="" />
                        <p className="Slider--p">JavaScript</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={HtmlSVG} alt="" />
                        <p className="Slider--p">HTML</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={CssSVG} alt="" />
                        <p className="Slider--p">CSS</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={NotionSVG} alt="" />
                        <p className="Slider--p">Notion</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={FigmaSVG} alt="" />
                        <p className="Slider--p">Figma</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={GitSVG} alt="" />
                        <p className="Slider--p">Git</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={GitHubSVG} alt="" />
                        <p className="Slider--p">GitHub</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={NpmSVG} alt="" />
                        <p className="Slider--p">npm</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={ReactSVG} alt="" />
                        <p className="Slider--p">React.js</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={ViteSVG} alt="" />
                        <p className="Slider--p">Vite.js</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={SassSVG} alt="" />
                        <p className="Slider--p">Sass</p>
                    </li>

                    {/* mitad */}

                    <li className="Slider--item">
                        <img className="Slider--img" src={JavaScriptSVG} alt="" />
                        <p className="Slider--p">JavaScript</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={HtmlSVG} alt="" />
                        <p className="Slider--p">HTML</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={CssSVG} alt="" />
                        <p className="Slider--p">CSS</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={NotionSVG} alt="" />
                        <p className="Slider--p">Notion</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={FigmaSVG} alt="" />
                        <p className="Slider--p">Figma</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={GitSVG} alt="" />
                        <p className="Slider--p">Git</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={GitHubSVG} alt="" />
                        <p className="Slider--p">GitHub</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={NpmSVG} alt="" />
                        <p className="Slider--p">npm</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={ReactSVG} alt="" />
                        <p className="Slider--p">React.js</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={ViteSVG} alt="" />
                        <p className="Slider--p">Vite.js</p>
                    </li>

                    <li className="Slider--item">
                        <img className="Slider--img" src={SassSVG} alt="" />
                        <p className="Slider--p">Sass</p>
                    </li>

                </ul>
            </section>
        </>
    )
}