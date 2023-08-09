import './Academic.scss'

export const Academic = () => {
    return (
        <section className='Academic'>
            <h2 className='Academic--title'>Academic</h2>

            <ul className='Academic--list'>
                <li className='Academic--item'>
                    <figure>
                        <img className='Academic--image' src="https://i.imgur.com/TBAabF6.png" alt="" />
                    </figure>
                    <div className='Academic--description'>
                        <figure>
                            <img className='Academic--icon' src="https://i.imgur.com/dAKmMiD.png" alt="" />
                        </figure>
                        <p className='Academic--text'>Bachiller en educación media</p>
                    </div>
                </li>

                <li className='Academic--item'>
                    <figure>
                        <img className='Academic--image' src="https://i.imgur.com/qz9l4xy.jpg" alt="" />
                    </figure>
                    <div className='Academic--description'>
                        <figure>
                            <img className='Academic--icon' src="https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png" alt="" />
                        </figure>
                        <p className='Academic--text'>Bachiller en educación media</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}