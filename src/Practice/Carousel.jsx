import { useEffect, useState } from "react";

const images = [
    {
        "id": 1,
        "imageName": "Mountain Sunrise",
        "image": "https://picsum.photos/id/1018/800/400"
    },
    {
        "id": 2,
        "imageName": "City Night Lights",
        "image": "https://picsum.photos/id/1015/800/400"
    },
    {
        "id": 3,
        "imageName": "Forest Pathway",
        "image": "https://picsum.photos/id/1020/800/400"
    },
    {
        "id": 4,
        "imageName": "Beach Sunset",
        "image": "https://picsum.photos/id/1003/800/400"
    },
    {
        "id": 5,
        "imageName": "Snowy Mountains",
        "image": "https://picsum.photos/id/1032/800/400"
    },
    {
        "id": 6,
        "imageName": "Desert Dunes",
        "image": "https://picsum.photos/id/1011/800/400"
    },
    {
        "id": 7,
        "imageName": "River Bridge",
        "image": "https://picsum.photos/id/1043/800/400"
    },
    {
        "id": 8,
        "imageName": "Starry Sky",
        "image": "https://picsum.photos/id/1050/800/400"
    },
    {
        "id": 9,
        "imageName": "Autumn Leaves",
        "image": "https://picsum.photos/id/1060/800/400"
    },
    {
        "id": 10,
        "imageName": "Ocean Waves",
        "image": "https://picsum.photos/id/1074/800/400"
    },
];


export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const getImages = () => {
        return [
            images[(currentIndex % images.length)],
            images[(currentIndex + 1) % images.length],
            images[(currentIndex + 2) % images.length],
        ]
    }
    useEffect(()=>{
        console.log('currentindex', currentIndex);
    }, [currentIndex])
    const increment = ()=>{
        setCurrentIndex(prev=> (prev + 3) % images.length);
    }
    const decrement = ()=>{
        setCurrentIndex(prev=> (prev - 3 + images.length) % images.length);
    }
    return <>
        {/* <div style={{display: 'flex', gap: '1rem'}}> */}
        <div style={{ padding: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={decrement} style={{ alignItems: 'center', height: 'fit-content' }}>Prev</button>
            {getImages().map((details) => {
                return <>
                    {/* <img width={'200'} src={details.image} /> */}
                    <label>{details?.id}</label>
                </>
            })}
            <button onClick={increment} style={{ alignItems: 'center', height: 'fit-content' }}>Next</button>
        </div>
        {/* </div> */}
    </>
} 