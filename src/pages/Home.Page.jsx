import axios from 'axios';
import React,{useState,useEffect} from 'react'
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';

function HomePage() {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premiereMovies, setPremiereMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
    
    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get('/movie/popular');
            setRecommendedMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get('/movie/top_rated');
            setPremiereMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    }, []);

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get('/movie/upcoming');
            setOnlineStreamEvents(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    }, []);

    return <div>
        <HeroCarousel/>
        <div className='container mx-auto px-12 my-8'>
            <h1 className='text-2xl font-bold text-gray-800 my-3'>The Best of Entertainment</h1>
            <EntertainmentCardSlider/>

        </div>
        <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider 
        title="Recommended Movies" 
        subtitle="List of Recommended Movies"
        posters={recommendedMovies}
        isDark = {false}
        />
        </div>

        <div className='bg-premiere-800 py-12'>
            <div className='container mx-auto px-4 flex flex-col gap-3'>
                <div className='hidden md:flex'>
                    <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png' alt='Rupay' className='w-full h-full'/>
                </div>
                <PosterSlider 
                title="Premiers" 
                subtitle="Brand New Releases Every Friday"
                posters={premiereMovies}
                isDark = {true}
                />
            </div>
        </div>

        <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider 
        title="Online Streaming Events" 
        subtitle=""
        posters={onlineStreamEvents}
        isDark = {false}
        />
        </div>
        
        
    </div>
}
export default HomePage;