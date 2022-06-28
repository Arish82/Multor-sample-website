import React, { useEffect, useRef, useState } from 'react'

function HomePageContainerThree() {
    const [vwidth, setvwidth] = useState('100%');
    const [height, setheight] = useState('100%');
    const myref = useRef(null)
    const hRef = useRef(null)
    setTimeout(() => {
        let width=myref.current.offsetWidth;
        setvwidth(width);
        let total=myref.current.offsetTop-hRef.current.offsetTop;
        setheight(total+(0.5625*myref.current.offsetWidth/2));
        console.log(total);
    }, 100);
    return (
        <>
            <div className="container-3"
                style={{"height": height+"px","marginBottom": ((0.5625*vwidth/2)+100)+'px'}}
                ref={hRef}
            >
                <div className='container-3-content-up'>
                    <h1 className="container-3-heading">
                        Show visitors what they're signing up for
                    </h1>
                    <p>
                        Include a video or photo from one of your sessions to help people understand your service (or just to hype ‘em up).
                    </p>
                </div>
                <div ref={myref} className="container-3-content-down" >
                    <iframe 
                    className='videoplayer'
                        width={vwidth} 
                        height={(vwidth==='100%'? '315px' : (0.5625*vwidth) )}
                        src="https://www.youtube-nocookie.com/embed/Kr7fR18nA8Q" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    >

                    </iframe>
                </div>
            </div>
        </>
    )
}

export default HomePageContainerThree
