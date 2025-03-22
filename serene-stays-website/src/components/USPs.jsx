import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import PoolIcon from '@mui/icons-material/Pool';

function USPs() {
    const timelineData = [
        {
            title: "State of the Art Amenities",
            description: "From private pools to expansive lawns, our villas boast amenities designed to elevate your stay.",
            icon: <PoolIcon />
        },
        {
            title: "Prime Locations Everywhere",
            description: "Our villas are strategically located in the most sought-after destinations, ensuring a stunning and memorable stay.",
            icon: <LocationOnIcon />
        },
        {
            title: "Perfect for All Occasions",
            description: "Whether it's a friendly vacation or a family function, our resorts offer the perfect setting for all types of occasions.",
            icon: <Diversity1Icon />
        },
        {
            title: "Rich Heritage in Hospitality",
            description: "With 20 years of experience in hospitality, our team ensures handles every detail of your stay with care & precision.",
            icon: <HomeIcon />
        }
    ];

    return (
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-6xl text-center mt-10 md:mt-20 mb-10 md:mb-20 font-header">
                Why Choose Us?
            </h1>
            <VerticalTimeline 
                className="left-timeline"
                lineColor="var(--color-primary)"
            >
                {timelineData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: 'transparent',
                            color: 'var(--color-text)',
                            boxShadow: 'none',
                            textAlign: 'left',
                            padding: '10px'
                        }}
                        contentArrowStyle={{ display: 'none' }}
                        iconStyle={{
                            background: 'var(--color-primary)',
                            color: 'var(--color-text)',
                        }}
                        icon={item.icon}
                    >
                        <h3 className="text-xl md:text-4xl font-header">{item.title}</h3>
                        <p className="font-body text-sm md:text-lg mt-2">{item.description}</p>
                    </VerticalTimelineElement>
                ))}
                <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer">
                    <VerticalTimelineElement
                        iconStyle={{
                            background: 'var(--color-primary)',
                            color: 'var(--color-text)',
                            cursor: 'pointer'
                        }}
                        icon={<KeyboardDoubleArrowUpIcon />}
                    />
                </div>
            </VerticalTimeline>
        </div>
    );
}

export default USPs;

