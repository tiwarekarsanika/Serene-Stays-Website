import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleMapReact from 'google-map-react';

function Footer() {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    const [hover, setHover] = React.useState(false);

    return (
        <div className="mb-4 bg-black pt-4 pl-6 pr-6">
            <div className="flex flex-col md:flex-row justify-between mb-6">
                <div className="flex flex-col pl-12 items-start gap-4">
                    <div className="flex flex-row items-center space-x-6 mt-6">
                        <h4 className="font-bold text-xl">Logo</h4>
                        <h1 className="text-4xl font-bold">Serene Stays</h1>
                    </div>
                    <div className="mt-4 flex flex-row space-x-4 justify-center items-center">
                        <InstagramIcon className={`text-2.5rem cursor-pointer ${hover ? "text-[var(--color-primary)]" : "text-white"}`}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        />
                        <span className="text-xl font-body">Lets Stay Connected !</span>
                    </div>
                    <div className="mt-10 flex flex-row space-x-8 font-navigation">
                        <span className="cursor-pointer hover:text-[var(--color-primary)]">About</span>
                        <span className="cursor-pointer hover:text-[var(--color-primary)]">Contact Us</span>
                        <span className="cursor-pointer hover:text-[var(--color-primary)]">FAQs & Booking Policy</span>
                    </div>
                </div>

                <div className="flex flex-row justify-around space-x-6 pr-12">
                    <div className="h-250px w-450px">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_KEY" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={19.228927657371145}
                                lng={72.84031501022369}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>

            <hr className="border-t border-[var(--color-primary)] my-4" />
            <div className="text-center font-navigation pb-4 text-[var(--color-primary)]">
                Copyright <CopyrightIcon className="inline-block text-sm" /> 2024 Serene Stays | Made with ❤ by Sanika
            </div>
        </div>
    );
}

export default Footer;
