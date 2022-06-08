import './App.css';
import Header from './components/header/Header';
import banner from './banner.jpeg';
import SimpleImageSlider from 'react-simple-image-slider';
import {useEffect, useState} from 'react';
import Quote from './components/quote/Quote';
import ProfileRow from './components/profile_row/ProfileRow';
import Promotion from './components/Promotion/Promotion';
import Footer from './components/Footer/Footer';

const bannerImages = [banner, banner, banner];

const profiles = [
    {
        image: banner,
        name: '정우창',
        position: '원장님',
        sbak: 3,
        ksia: 3,
    },
    {
        image: banner,
        name: '하진석',
        position: '강사님',
        sbak: 3,
        ksia: 3,
    },
    {
        image: banner,
        name: '신현준',
        position: '강사님',
        sbak: 2,
        ksia: 2,
    },
    {
        image: banner,
        name: '유한동',
        position: '강사님',
        sbak: 2,
        ksia: 1,
    },
    {
        image: banner,
        name: '강혜인',
        position: '강사님',
        sbak: 1,
        ksia: 1,
    },
    {
        image: banner,
        name: '정선욱',
        position: '강사님',
        sbak: 1,
        ksia: 1,
    },
];

function App() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function onResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    });

    return (
        <div className="App">
            <Header/>
            <SimpleImageSlider
                width={width}
                height={512}
                images={bannerImages}
                showNavs={false}
                showBullets={true}
                autoPlay={true}
                autoPlayDelay={5.0}
            />
            <Quote/>
            <ProfileRow profiles={profiles} />
            <Promotion />
            <Footer />
        </div>
    );
}

export default App;
