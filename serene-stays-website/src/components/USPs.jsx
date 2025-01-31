import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import PolicyIcon from '@mui/icons-material/Policy';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import PoolIcon from '@mui/icons-material/Pool';

function USPs() {
    const timelineContainerStyle = {
        marginRight: '10rems',
        marginLeft: '10rems',
    };

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
            description: "With over 20 years of experience in hospitality, our team ensures handles every detail of your stay with care & precision.",
            icon: <HomeIcon />
        },
        {
            title: "Flexible Cancellation Policies",
            description: "We understand the importance of flexibility. Our hassle-free cancellation policies help you adjust your plans with ease.",
            icon: <PolicyIcon />
        }
    ];

    return (
        <div>
            <h1 className="text-6xl text-center mt-30 mb-20" sx={{ fontFamily: "var(--font-header" }}>Why Choose Us?</h1>
            <div style={timelineContainerStyle}>
                <VerticalTimeline lineColor="var(--color--secondary)">
                    {timelineData.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: 'transparent',
                                color: 'var(--color--text)',
                                boxShadow: 'none',
                                textAlign: index % 2 === 0 ? 'right' : 'left',
                                padding: 0,
                                margin: 0,
                                minHeight: '2rem',  // Added to ensure consistent height
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}
                            contentArrowStyle={{
                                display: 'none'
                            }}
                            iconStyle={{
                                background: 'var(--color--secondary)',
                                color: 'var(--color--text)', 
                            }}
                            icon={item.icon}
                        >
                            <h3 style={{
                                fontFamily: 'var(--font-header)',
                            }} className="text-4xl mt-0">
                                {item.title}
                            </h3>
                            <p style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '1.1rem'
                            }}>
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    ))}
                    <div
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        style={{ cursor: 'pointer' }}
                    >
                        <VerticalTimelineElement
                            iconStyle={{
                                background: 'var(--color--secondary)',
                                color: 'var(--color--text)',
                                cursor: 'pointer'
                            }}
                            icon={<KeyboardDoubleArrowUpIcon />}
                        />
                    </div>
                </VerticalTimeline>
            </div>
        </div >
    );
}

export default USPs;

