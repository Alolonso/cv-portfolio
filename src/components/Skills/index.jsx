import './Skills.scss'

export const Skills = () => {
    return (
        <>
            <section id='Skills' className='Skills'>
                <h2 className='Skills--title'>Skills</h2>

                <div className='Skills--container'>
                    <div className='Skills--card'>
                        <div>
                            <h3 id='SoftSkills' className='Skills--h3'>Soft Skills</h3>
                            <ul className='Skills--list'>
                                <li className='Skills--li'>- Teamwork</li>
                                <li className='Skills--li'>- Time management</li>
                                <li className='Skills--li'>- Self-starter</li>
                                <li className='Skills--li'>- Communication skills</li>
                                <li className='Skills--li'>- Adaptability</li>
                                <li className='Skills--li'>- Collaboration</li>
                                <li className='Skills--li'>- Responsibility</li>
                            </ul>
                        </div>
                    </div>

                    <div className='Skills--card'>
                        <div>
                            <h3 id='Technologies' className='Skills--h3'>Technologies</h3>
                            <ul className='Skills--list'>
                                <li className='Skills--li'>- React.js</li>
                                <li className='Skills--li'>- Vite.js</li>
                                <li className='Skills--li'>- Sass</li>
                            </ul>
                        </div>
                    </div>

                    <div className='Skills--card'>
                        <div>
                            <h3 id='Languages' className='Skills--h3'>Languages</h3>
                            <ul className='Skills--list'>
                                <li className='Skills--li'>- Native Spanish</li>
                                <li className='Skills--li'>- English B1</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}