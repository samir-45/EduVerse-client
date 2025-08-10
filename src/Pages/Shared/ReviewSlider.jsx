import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import reviewTop from '../../../assets/customer-top.png'

const reviews =
    [
        {
            "id": 1,
            "name": "Ayesha Rahman",
            "profession": "Software Engineer",
            "avatar": "https://i.pravatar.cc/150?img=47",
            "review": "This tech blog site has completely changed the way I stay updated on the latest trends. Their in-depth analyses and insightful articles are absolutely top-notch!"
        },
        {
            "id": 2,
            "name": "Raihan Kabir",
            "profession": "Tech Startup Founder",
            "avatar": "https://i.pravatar.cc/150?img=33",
            "review": "From comprehensive reviews to breaking news, this is by far the most reliable tech blog I've followed. Highly recommended for anyone in the industry."
        },
        {
            "id": 3,
            "name": "Maliha Chowdhury",
            "profession": "UI/UX Designer",
            "avatar": "https://i.pravatar.cc/150?img=25",
            "review": "The tutorials and practical guides on this site are incredibly helpful. The content is always fresh, and the user experience is excellent. A must-read!"
        },
        {
            "id": 4,
            "name": "Tanvir Hasan",
            "profession": "Freelance Tech Writer",
            "avatar": "https://i.pravatar.cc/150?img=12",
            "review": "I needed a go-to source for accurate tech information and this blog delivered in every way. Their expert opinions are a game-changer for my research!"
        },
        {
            "id": 5,
            "name": "Sumaiya Islam",
            "profession": "Digital Marketing Specialist",
            "avatar": "https://i.pravatar.cc/150?img=64",
            "review": "Their articles on emerging technologies are always insightful and well-researched. This blog is a dependable source for staying ahead in the digital world."
        },
        {
            "id": 6,
            "name": "Arif Mahmood",
            "profession": "IT Consultant",
            "avatar": "https://i.pravatar.cc/150?img=29",
            "review": "We rely on this tech blog for valuable industry insights. Their analyses of enterprise solutions and cybersecurity trends have been consistently flawless."
        },
        {
            "id": 7,
            "name": "Nusrat Jahan",
            "profession": "Game Developer",
            "avatar": "https://i.pravatar.cc/150?img=50",
            "review": "Thanks to this tech blog, I can now explore new programming languages and development tools with full confidence. Their coding tips are excellent!"
        },
        {
            "id": 8,
            "name": "Samiul Haque",
            "profession": "Online Gadget Retailer",
            "avatar": "https://i.pravatar.cc/150?img=17",
            "review": "I’ve read several tech blogs, and this one beats them all in comprehensive gadget reviews and unbiased product comparisons."
        },
        {
            "id": 9,
            "name": "Lubna Sultana",
            "profession": "Cybersecurity Analyst",
            "avatar": "https://i.pravatar.cc/150?img=38",
            "review": "Whether it's the latest data breaches or privacy concerns, this blog handles complex cybersecurity topics with great clarity and expertise."
        },
        {
            "id": 10,
            "name": "Mehedi Hasan",
            "profession": "Small Business Owner",
            "avatar": "https://i.pravatar.cc/150?img=15",
            "review": "The practical advice on business tech solutions and digital transformation is incredibly valuable. This tech blog is now my go-to for all things tech-related for my business."
        }
    ]


const ReviewSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null); // <- track swiper instance

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            swiperRef.current.params.navigation
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <section className="py-20">
            <div className='flex flex-col items-center justify-center gap-5'>
                {/* <div>
                    <img src={reviewTop} alt="" />
                </div> */}
                <h1 className='text-4xl font-bold text-center'>What our users are sayings</h1>
                <p className='text-center'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
            </div>

            <div className="relative max-w-7xl mx-auto">
                <Swiper
                    modules={[Navigation]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    loop={true}
                    centeredSlides={true}
                    // slidesPerView={}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}

                    spaceBetween={0}
                    grabCursor={true}
                    className="pb-14"
                >
                    {reviews.map((review, index) => {
                        const total = reviews.length;
                        const realIndex = (index - activeIndex + total) % total;

                        let cardStyle = "scale-90 opacity-40 translate-y-4";

                        if (realIndex === 0) {
                            cardStyle = "scale-100 opacity-100 translate-y-0";
                        } else if (realIndex === 1 || realIndex === total - 1) {
                            cardStyle = "scale-85 opacity-20 translate-y-2";
                        } else if (realIndex === 2 || realIndex === total - 2) {
                            cardStyle = "scale-75 opacity-15 translate-y-4";
                        }


                        return (
                            <SwiperSlide className='py-10' key={review.id}>
                                <div
                                    className={`transition-all duration-500 ${cardStyle} bg-base-200 p-6 min-w-64 h-72 rounded-xl shadow-xl`}
                                >
                                    <FaQuoteLeft className="text-3xl text-primary mb-4" />
                                    <p className="text-base-content/70 text-sm mb-6">{review.review}</p>
                                    {/* Dashed line */}
                                    <div className='flex justify-center items-center'>
                                        <div className="hidden md:block bg-dotted h-2 w-full border-b-[1.5px] border-dashed border-gray-500"></div>
                                    </div>

                                    <div className="flex gap-5 my-5 items-center">
                                        <div>
                                            <img
                                                src={review.avatar}
                                                alt={review.name}
                                                className="w-14 h-14 rounded-full object-cover"
                                            />
                                        </div>

                                        <div>
                                            <h4 className="text-base-content font-semibold">{review.name}</h4>
                                            <p className="text-xs text-base-content/50">{review.profession}</p>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                {/* Working Navigation Arrows */}
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        ref={prevRef}
                        className="btn btn-circle bg-base-200 shadow text-primary hover:bg-primary hover:text-white transition-all"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        ref={nextRef}
                        className="btn btn-circle bg-base-200 shadow text-primary hover:bg-primary hover:text-white transition-all"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ReviewSlider;
