import { useState, useEffect } from 'react';

interface Props {
    name: string;
    image: string;
    id: string;
    mapUrl: string;
    usage: number;
    temp: number;
    lat: number,
    lon: number,
    // optional prop
    contains?: string;
}

const FridgeCard = ({ name, image, id, mapUrl, temp, usage, contains = "Fridge & Pantry" }: Props) => {    
    const getTempColor = (temp: number) => {
        if (temp >= 45) {
            return "pink";
        } else if (temp <= 32) {
            return "lightblue";
        } else {
            return "lightgreen";
        }
    }

    return (
        <div className="collection-item-course w-dyn-item">
            <div className="div-course-card wider w-inline-block">
                <img src={image} alt={name} className="image-193" />
                <div className="div-course-element-name">
                    <div className="paragraph-l">{name}</div>
                </div>
                <div className="div-course-element-info">
                    <div className="div-chip">{contains}</div>
                    <a href={mapUrl} className="div-chip-directions">Directions</a>
                </div>
                <div className="div-course-element-info">
                    {usage > 0 || temp > 0 ? (
                        <>
                            <div className="div-chip-usage">
                                Usage: {usage}
                            </div>
                            <div className="div-chip-temp" style={{ backgroundColor: getTempColor(temp) }}>
                                Temperature: {`${Math.round(temp)}°F`}
                            </div>
                        </>
                    ) : null }
                </div>
            </div>
        </div>
    );
};

export default FridgeCard