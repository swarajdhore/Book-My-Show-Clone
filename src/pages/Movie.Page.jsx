import React from "react";
import MovieHero from '../components/MovieHero/MovieHero.Component';
import {FaCcApplePay, FaCcVisa} from 'react-icons/fa'
import Slider from 'react-slick'
import Cast from '../components/Cast/Cast.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'

const MoviePage = () =>{

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

                const settingsCast = {
                    infinite: false,
                    speed: 500,
                    slidesToShow: 6,
                    slidesToScroll: 4,
                    initialSlide: 0,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 3,
                                infinite: true,
                            },
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 2,
                                initialSlide: 2,
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            },
                        },
                    ],
                };

                const similarMovies =[
                    {
                        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICAxN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-rhfsjjrlrc-portrait.jpg",
                        title: "Fast and Furious 9",
                        subtitle: "Action/ Adventure/ Crime/ Thriller",
                    },
                    {
                        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICAxN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-rhfsjjrlrc-portrait.jpg",
                        title: "Fast and Furious 9",
                        subtitle: "Action/ Adventure/ Crime/ Thriller",
                    },
                    {
                        src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICAxN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-rhfsjjrlrc-portrait.jpg",
                        title: "Fast and Furious 9",
                        subtitle: "Action/ Adventure/ Crime/ Thriller",
                    },
                ];    

                const cast = [
                    {
                        profile_path: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vin-diesel-5007-22-12-2017-10-17-23.jpg",
                        original_name: "Vin Diesel",
                        character: "Dominic Toretto",
                    },
                    {
                        profile_path: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vin-diesel-5007-22-12-2017-10-17-23.jpg",
                        original_name: "Vin Diesel",
                        character: "Dominic Toretto",
                    },
                    {
                        profile_path: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vin-diesel-5007-22-12-2017-10-17-23.jpg",
                        original_name: "Vin Diesel",
                        character: "Dominic Toretto",
                    },
                    {
                        profile_path: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vin-diesel-5007-22-12-2017-10-17-23.jpg",
                        original_name: "Vin Diesel",
                        character: "Dominic Toretto",
                    },
                    {
                        profile_path: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vin-diesel-5007-22-12-2017-10-17-23.jpg",
                        original_name: "Vin Diesel",
                        character: "Dominic Toretto",
                    },
                    {
                        profile_path: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vin-diesel-5007-22-12-2017-10-17-23.jpg",
                        original_name: "Vin Diesel",
                        character: "Dominic Toretto",
                    },
                    {
                        profile_path: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vin-diesel-5007-22-12-2017-10-17-23.jpg",
                        original_name: "Vin Diesel",
                        character: "Dominic Toretto",
                    },
                ];

    

    return(<>
        <MovieHero/>
        <div className='my-12 container px-4 lg:ml-20 lg:w-2/3'>
            <div className='flex flex-col item-start gap-3'>
                <h1 className='text-gray-800 font-bold text-2xl'>About the Movie</h1>
                <p>Dom`s peaceful life with his wife Letty and son Brian is shattered when Dom`s past catches up to him. The gang is up against the most skilled assassin and high-performance driver - his little brother Jakob.</p>
            </div>
        
        <div className='my-8'>
            <hr/>
        </div>
        <div className='my-8'>
            <h2 className='text-gray-800 font-bold text-2xl mb-3'>
                Applicable Offers
            </h2>
            <div className='flex flex-col gap-3 lg:flex-row'>
            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-4000 border-dashed border-2 rounded-md'>
                <div className= 'w-8 h-8'>
                    <FaCcVisa className='w-full h-full'/>
                </div>
                <div className='flex flex-col item-start'>
                    <h3 className='text-gray-700 text-xl font-bold'>
                        Visa Stream Offer
                    </h3>
                    <p className='text-gray-600'>
                        Get 50% OFF upto INR 150 on all RuPay Card* on BookMyShow Stream.
                    </p>
                </div>
            </div>
            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-4000 border-dashed border-2 rounded-md'>
                <div className= 'w-8 h-8'>
                    <FaCcApplePay className='w-full h-full'/>
                </div>
                <div className='flex flex-col item-start'>
                    <h3 className='text-gray-700 text-xl font-bold'>
                        Filmy Pass
                    </h3>
                    <p className='text-gray-600'>
                        Get 50% OFF upto INR 150 on all RuPay Card* on BookMyShow Stream.
                    </p>
                </div>
            </div>
            </div>
            
        </div>
        <div className='my-8'>
            <hr/>
        </div>
        <div className='my-8'>
            <h2 className='text-gray-800 font-bold text-2xl mb-4'>
                Cast and Crew
            </h2>
            <Slider {...settingsCast}>
                 {cast.map((castData) => (
                    <Cast image={castData.profile_path} castName={castData.original_name} role={castData.character}/>
                ))} 
            </Slider>
        </div>
        <div className='my-8'>
            <hr/>
        </div>
        <div className='my-8'>
            <PosterSlider config={settings} title='Recommended Movies' posters={similarMovies} isDark={false}/>
        </div>
        <div className='my-8'>
            <hr/>
        </div>
        <div className='my-8'>
            <PosterSlider config={settings} title='BMS Exclusive' posters={similarMovies} isDark={false}/>
        </div>
        </div>
    </>);
}

export default MoviePage;   