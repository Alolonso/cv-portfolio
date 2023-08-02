import './IndexContent.scss'

export const IndexContent = () => {
    return (
        <ul className='Index'>
            <a className='Index--a' href="#Contact">
                <li className='Index--li'>Contact information</li>
            </a>
            <a className='Index--a' href="#WorkExperience">
                <li className='Index--li'>Work Experience</li>
            </a>
            <a className='Index--a' href="#Skills">
                <li className='Index--li'>Skills</li>
            </a>
            <ul className='Index--ul'>
                <a className='Index--a' href="#SoftSkills">
                    <li className='Index--li__ul'>Soft Skills</li>
                </a>
                <a className='Index--a' href="#Technologies">
                    <li className='Index--li__ul'>Technologies</li>
                </a>
                <a className='Index--a' href="#Languages">
                    <li className='Index--li__ul'>Languages</li>
                </a>
            </ul>
            <a className='Index--a' href="#Studies">
                <li className='Index--li'>Studies</li>
            </a>
            <a className='Index--a' href="#">
                <li className='Index--li'>Certificates</li>
            </a>
            <ul className='Index--ul'>
                <a className='Index--a' href="#">
                    <li className='Index--li__ul'>Academic</li>
                </a>
                <a className='Index--a' href="#">
                    <li className='Index--li__ul'>Courses</li>
                </a>
            </ul>
            <a className='Index--a' href="#">
                <li className='Index--li'>Projects</li>
            </a>
        </ul>
    )
}