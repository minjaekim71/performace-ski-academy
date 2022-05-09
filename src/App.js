import './App.css';
import Header from './components/header/Header';
import banner from './banner.jpeg';
import SimpleImageSlider from 'react-simple-image-slider';

const bannerImages = [banner, banner, banner];

function App() {
    return (
        <div className="App">
            <Header/>
            <SimpleImageSlider
                width={1024}
                height={512}
                images={bannerImages}
                showNavs={false}
                showBullets={true}
                autoPlay={true}
                autoPlayDelay={5.0}
            />
        </div>
    );
}

export default App;
