import React from 'react';
import BannerItem from './BannerItem';
// import img1 from 'https://ibb.co/D4gLn65';
// import img2 from 'https://ibb.co/2M414d6'
// import img3 from 'https://ibb.co/xSQRKjK'
// import img4 from 'https://ibb.co/090tmyk'
// import img5 from 'https://ibb.co/KmZDq2C'
// import img6 from 'https://ibb.co/XDJFb03';
import './Banner.css'



const bannerData = [
    {
        image: 'https://i.ibb.co/d2PgZgL/1.jpg',
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: 'https://i.ibb.co/mcmtCF5/2.jpg',
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: 'https://i.ibb.co/wBxrfmS/3.jpg' , 
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: 'https://i.ibb.co/pWnDt50/4.jpg',
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: 'https://i.ibb.co/PMpG5w2/5.jpg' , 
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: 'https://i.ibb.co/QpwDf3T/6.jpg',
        prev: 5,
        id: 6,
        next: 1
    }
]
const Banner = () => {
    return (
        <div className="carousel w-full py-10">            

            {
                bannerData.map( slide => <BannerItem  slide={slide}></BannerItem>)
            }
       

      </div>
    );
};

export default Banner;