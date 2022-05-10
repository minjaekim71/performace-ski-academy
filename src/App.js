import './App.css';
import Header from './components/header/Header';
import banner from './banner.jpeg';
import SimpleImageSlider from 'react-simple-image-slider';
import {useEffect, useState} from 'react';
import Quote from './components/quote/Quote';
import Profile from './components/profile/Profile';

const bannerImages = [banner, banner, banner];

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
            <Profile
                image={banner}
                name="정우창"
                position="원장님"
                sbak={3}
                ksia={3}
            />
        </div>
    );
}

export default App;
