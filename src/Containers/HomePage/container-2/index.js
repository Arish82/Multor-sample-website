import React from 'react'
import AppointmentForm from '../../../Components/homepage/appointment-form/AppointmentForm'

function HomePageContainerTwo() {
    const cards=[
        {
            "image": `fa-solid fa-tv`,
            "title": "Benefit 1",
            "subtitle": "Highlight the benefits of signing up for an appointment, online class, or video consultation."
        },
        {
            "image": `fa-regular fa-heart`,
            "title": "Benefit 1",
            "subtitle": "Highlight the benefits of signing up for an appointment, online class, or video consultation."
        },
        {
            "image": `fa-solid fa-award`,
            "title": "Benefit 1",
            "subtitle": "Highlight the benefits of signing up for an appointment, online class, or video consultation."
        }
    ]
    return (
        <>
            <div className="container-2">
                <div className="content">
                    <div className="content-left">
                        {
                            cards.map((card, index)=>{
                                return (
                                    <React.Fragment key={index}>
                                        <div className="card">
                                            <i className={card.image} ></i>
                                            <div className="text-content">
                                                <div className="title">
                                                    {card.title}
                                                </div>
                                                <div className='subtitle' >
                                                    {card.subtitle}
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                    <div className="content-right-container-2">
                        <AppointmentForm/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePageContainerTwo
