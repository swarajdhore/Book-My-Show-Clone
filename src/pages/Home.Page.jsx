import React from 'react'
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';

function HomePage() {

    const recommendedMovies =[
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
        
        /* "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODAlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00117102-gukaentnqs-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-uwreepnzec-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICAxN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-rhfsjjrlrc-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODAlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00117102-gukaentnqs-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-uwreepnzec-portrait.jpg", */
     ];

     const premiereMovies =[
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-cbwsbnggyc-portrait.jpg",
            title: "Godzilla vs. Kong",
            subtitle: "English",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-cbwsbnggyc-portrait.jpg",
            title: "Godzilla vs. Kong",
            subtitle: "English",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-cbwsbnggyc-portrait.jpg",
            title: "Godzilla vs. Kong",
            subtitle: "English",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-cbwsbnggyc-portrait.jpg",
            title: "Godzilla vs. Kong",
            subtitle: "English",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-cbwsbnggyc-portrait.jpg",
            title: "Godzilla vs. Kong",
            subtitle: "English",
        },
        
        /* "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODAlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00117102-gukaentnqs-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-uwreepnzec-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTMlICAxN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-rhfsjjrlrc-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODAlICA4ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00117102-gukaentnqs-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
        "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-uwreepnzec-portrait.jpg", */
     ];

     const onlineStreamEvents =[
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA4IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-xqqvejluju-portrait.jpg",
            title: "FrontRow Open Mics",
            subtitle: "Watch on Zoom",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA4IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313020-ftaexdrjyv-portrait.jpg",
            title: "FrontRow VIP : Story-Telling Workshop",
            subtitle: "Watch on Zoom",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA4IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-xqqvejluju-portrait.jpg",
            title: "FrontRow Open Mics",
            subtitle: "Watch on Zoom",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA4IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313020-ftaexdrjyv-portrait.jpg",
            title: "FrontRow VIP : Story-Telling Workshop",
            subtitle: "Watch on Zoom",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA4IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-xqqvejluju-portrait.jpg",
            title: "FrontRow Open Mics",
            subtitle: "Watch on Zoom",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA4IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313020-ftaexdrjyv-portrait.jpg",
            title: "FrontRow VIP : Story-Telling Workshop",
            subtitle: "Watch on Zoom",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA4IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-xqqvejluju-portrait.jpg",
            title: "FrontRow Open Mics",
            subtitle: "Watch on Zoom",
        },
        {
            src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA4IFNlcCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313020-ftaexdrjyv-portrait.jpg",
            title: "FrontRow VIP : Story-Telling Workshop",
            subtitle: "Watch on Zoom",
        },
    ];
 

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