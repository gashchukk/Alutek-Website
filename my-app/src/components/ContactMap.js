import React, { useEffect, useRef } from 'react';

const ContactMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        // Initialize the Google Maps API
        const initMap = () => {
            const locations = [
                { lat: 49.839683, lng: 24.029717, address: 'м.Львів, вул. Промислова, 45' },
                { lat: 49.816031, lng: 24.035733, address: 'м.Львів, вул. Луганська, 6 (в приміщенні ТЦ "Гуцулівка")' },
                { lat: 49.813276, lng: 24.033835, address: 'м.Львів, вул. Гнєздовського, 2 (в приміщенні "Сучасного Дизайну")' },
                { lat: 49.06902, lng: 23.742431, address: 'м.Івано-Франківськ, вул. Ребета, 6е' },
            ];

            const map = new window.google.maps.Map(mapRef.current, {
                zoom: 12,
                center: { lat: 49.839683, lng: 24.029717 }, // Center on Lviv
            });

            // Add markers for each location
            locations.forEach((location) => {
                const marker = new window.google.maps.Marker({
                    position: { lat: location.lat, lng: location.lng },
                    map: map,
                    title: location.address,
                });

                const infoWindow = new window.google.maps.InfoWindow({
                    content: `<div>${location.address}</div>`,
                });

                marker.addListener('click', () => {
                    infoWindow.open(map, marker);
                });
            });
        };

        // Load the Google Maps API script
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
        script.async = true;
        document.body.appendChild(script);

        // Clean up the script tag when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div ref={mapRef} style={{ height: '500px' }} />;
};

export default ContactMap;