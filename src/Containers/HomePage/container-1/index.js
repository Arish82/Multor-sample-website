import React from 'react'

function HomePageContainerOne() {
    return (
        <>
            <div className="container-1">
                <img
                    className='homepage-image'
                    src="https://images.pexels.com/photos/3791274/pexels-photo-3791274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt='images'
                />
                <div className="homepage-image-overlay">
                        <div className="homepage-content-left">
                            <div className='logo'>
                                MULTOR
                            </div>
                            <h1 className="title">
                                Describe the value of booking an appointment
                            </h1>
                            <p className="subtitle">
                                No need to get clever. Tell people exactly what you're offering, then use this space to communicate your key value proposition.
                            </p>
                        </div>
                        <div className="homepage-content-right"></div>
                </div>
            </div>
        </>
    )
}

export default HomePageContainerOne
