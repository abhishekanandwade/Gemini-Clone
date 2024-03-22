import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../../assets/assets'
import { Context } from '../../../context/context';

const Main = () => {

    const { onSent, recentPromt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className='main'>
            <div className='nav'>
                <p>My GPT</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className='main-container'>

                {!showResult ?
                    <>
                        <div className='greet'>
                            <p><span>Hello, Abhi.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className='cards'>
                            <div className='card'>
                                <p>Suggest beautiful places to see on upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className='card'>
                                <p>Briefly summarize the concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className='card'>
                                <p>Brainstorm tem bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className='card'>
                                <p>Improve the reliability of the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </> :
                    <div className='result'>
                        <div className='result-title'>
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPromt}</p>
                        </div>
                        <div className='result-data'>
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div> :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>

                    </div>
                }

                <div className='main-bottom'>
                    <div className='search-box'>
                        <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className='bottom-info'>GPT may display inaccurate info, including about people, so doublecheck its responses, Your privacy and GET Apps</p>
                </div>
            </div>

        </div>
    )
}

export default Main