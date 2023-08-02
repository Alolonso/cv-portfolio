
import { ReactComponent as GmailSVG } from "../../assets/gmail.svg";


import GmailSVG from '/gmail.svg'
import LinkedInSVG from '/linkedin.svg'
import GitHubSVG from '/github.svg'
import PlatziSVG from '/platzi.svg'

// import { ReactComponent as LinkedInSVG} from "../../assets/linkedin.svg";
// import { ReactComponent as GitHubSVG} from "../../assets/github.svg";
// import { ReactComponent as PlatziSVG} from "../../assets/platzi.svg";

const iconTypes = {
    "gmail": {GitHubSVG},
    "linkedin": {LinkedInSVG},
    "github": {GitHubSVG},
    "platzi": {PlatziSVG},
}




export const CvIcon = ({type}) => {
    return (
        <>
            {iconTypes[type]}
        </>
    )
}