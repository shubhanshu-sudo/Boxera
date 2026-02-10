export interface Article {
    id: string;
    source: string;
    sourceLogo?: string;
    brandColor?: string;
    headline: string;
    excerpt: string;
    year: string;
    link: string;
    category: "MEDIA" | "INTERVIEWS" | "COMMUNITY" | "TRANSFORMATION";
    image?: string;
}

export const articles: Article[] = [
    {
        id: "1",
        source: "LBB",
        sourceLogo: "https://logo.clearbit.com/lbb.in",
        brandColor: "#000000",
        headline: "Join Boxx Era Fitness Studio In South Delhi With Female Trainers",
        excerpt: "Experience high-performance training with a dedicated team of experts in the heart of South Delhi.",
        year: "2023",
        link: "https://lbb.in/delhi/join-Boxx-Era-fitness-studio-in-south-delhi-with-female-trainers/",
        category: "MEDIA",
    },
    {
        id: "2",
        source: "What's Hot",
        sourceLogo: "https://logo.clearbit.com/whatshot.in",
        brandColor: "#FFB300",
        headline: "Boxx Era Fitness Studio Is A New Workout Space In Hauz Khas",
        excerpt: "A fresh perspective on fitness arrives in Hauz Khas, offering a unique blend of intensity and wellness.",
        year: "2023",
        link: "https://www.whatshot.in/amp/delhi-ncr/boxx-era-fitness-studio-is-a-new-workout-space-in-hauz-khas-v-158230",
        category: "MEDIA",
    },
    {
        id: "3",
        source: "Mid-Day",
        sourceLogo: "https://logo.clearbit.com/mid-day.com",
        brandColor: "#000000",
        headline: "The Rise of Boxx Era: Breaking Barriers In The World Of Fitness",
        excerpt: "How Boxx Era is redefining the fitness landscape with its holistic and high-performance approach.",
        year: "2023",
        link: "https://www.mid-day.com/amp/brand-media/article/the-rise-of-boxx-era-breaking-barriers-in-the-world-of-fitness-23264290",
        category: "MEDIA",
    },
    {
        id: "4",
        source: "So City",
        sourceLogo: "https://logo.clearbit.com/so.city",
        brandColor: "#000000",
        headline: "This Posh New Gym In Hauz Khas Offers Dark Room Training & More",
        excerpt: "Discover the elite training experience that everyone in Delhi is talking about.",
        year: "2023",
        link: "https://so.city/amp/delhi/this-posh-new-gym-in-hauz-khas-offers-dark-room-training-more-for-the-fitness-freak-in-you.html",
        category: "MEDIA",
    },
    {
        id: "5",
        source: "LockerRoom",
        sourceLogo: "https://logo.clearbit.com/lockerroom.in",
        brandColor: "#000000",
        headline: "Boxx Era COVID Drive Delhi: Serving The Community",
        excerpt: "Beyond fitness, Boxx Era stands with the community during challenging times.",
        year: "2021",
        link: "https://lockerroom.in/blog/view/Boxx-Era-COVID-Drive-Delhi",
        category: "COMMUNITY",
    },
    {
        id: "6",
        source: "Zee News",
        sourceLogo: "https://www.exchange4media.com/media-tv-news/zee-news-unveils-new-look-and-brand-identity-125626.html",
        brandColor: "#DA2129",
        headline: "Boxx Era: The Ultimate Fitness Studio For Holistic Wellness",
        excerpt: "A deep dive into why Boxx Era is the go-to destination for those seeking a total transformation.",
        year: "2023",
        link: "https://zeenews.india.com/india/boxx-era-the-ultimate-fitness-studio-for-holistic-wellness-2583014.html/amp",
        category: "MEDIA",
    },
    {
        id: "7",
        source: "DNA India",
        sourceLogo: "https://logo.clearbit.com/dnaindia.com",
        brandColor: "#FFDE2F",
        headline: "Boxx Era By Jeeth Sanghavi: Influencing People To Choose Holistic Training",
        excerpt: "Founder Jeeth Sanghavi shares the vision behind the most intense fitness movement in India.",
        year: "2023",
        link: "https://www.dnaindia.com/india/report-boxx-era-by-jeeth-sanghavi-positively-influence-people-to-choose-holistic-training-and-fitness-3022267/amp",
        category: "TRANSFORMATION",
    },
    {
        id: "8",
        source: "IB Times",
        sourceLogo: "https://logo.clearbit.com/ibtimes.com",
        brandColor: "#005689",
        headline: "Holistic Fitness & Wellness Training Have New Meaning At Boxx Era",
        excerpt: "Reimagining what it means to be fit in the modern era with science-backed training protocols.",
        year: "2023",
        link: "https://www.ibtimes.sg/holistic-fitness-wellness-training-have-new-meaning-boxx-era-by-jeeth-sanghavi-68879",
        category: "MEDIA",
    },
    {
        id: "9",
        source: "Medium",
        sourceLogo: "https://logo.clearbit.com/medium.com",
        brandColor: "#1A8917",
        headline: "Finding Strength In The Storm: How Boxx Era Transforms Rainy Days",
        excerpt: "Personal stories of growth and resilience from the members of the Boxx Era community.",
        year: "2023",
        link: "https://medium.com/@jyotika0507/finding-strength-in-the-storm-boxx-era-transformed-rainy-day-into-empowering-moments-of-growth-29482641db4",
        category: "TRANSFORMATION",
    },
    {
        id: "10",
        source: "Business News This Week",
        sourceLogo: "https://logo.clearbit.com/businessnewsthisweek.com",
        brandColor: "#333333",
        headline: "A Life Transformed: Boxx Era's Coach Jeeth Turns Struggles Into Strength",
        excerpt: "The inspiring journey of Jeeth Sanghavi from adversity to becoming a transformational leader.",
        year: "2024",
        link: "https://businessnewsthisweek.com/health/a-life-transformed-boxx-eras-coach-jeeth-turns-struggles-into-strength/",
        category: "INTERVIEWS",
    },
    {
        id: "11",
        source: "Biz News Desk",
        sourceLogo: "https://logo.clearbit.com/biznewsdesk.com",
        brandColor: "#333333",
        headline: "Coach Jeeth's Journey: How Boxx Era Helped Turn Adversity Into Triumph",
        excerpt: "Exploring the resilient spirit behind Boxxera and how it shapes the training experience.",
        year: "2024",
        link: "https://biznewsdesk.com/health/coach-jeeths-journey-how-boxx-era-helped-turn-adversity-into-triumph/",
        category: "INTERVIEWS",
    },
    {
        id: "12",
        source: "Online Media Cafe",
        sourceLogo: "https://logo.clearbit.com/onlinemediacafe.com",
        brandColor: "#333333",
        headline: "A Story Of Resilience: Boxx Era's Coach Jeeth Overcomes Struggles To Lead",
        excerpt: "Detailed coverage of the philosophy that drives the elite transformation at Boxxera.",
        year: "2024",
        link: "https://onlinemediacafe.com/health/a-story-of-resilience-boxx-eras-coach-jeeth-overcomes-struggles-to-lead-with-strength/",
        category: "INTERVIEWS",
    },
    {
        id: "13",
        source: "Smart Business News",
        sourceLogo: "https://logo.clearbit.com/smartbusinesnews.com",
        brandColor: "#1a73e8",
        headline: "Transforming Challenges Into Power: The Inspiring Tale Of Boxx Era",
        excerpt: "How a vision for holistic fitness is changing lives across Delhi and Gurugram.",
        year: "2024",
        link: "https://smartbusinesnews.com/health/transforming-challenges-into-power-the-inspiring-tale-of-boxx-eras-coach-jeeth/",
        category: "INTERVIEWS",
    },
    {
        id: "14",
        source: "Content Media Solution",
        sourceLogo: "https://logo.clearbit.com/contentmediasolution.com",
        brandColor: "#333333",
        headline: "Boxx Era's Coach Jeeth: A Journey Of Struggles, Strength, And Transformation",
        excerpt: "The core values of discipline and resilience that define every workout at Boxxera.",
        year: "2024",
        link: "https://contentmediasolution.com/health/boxx-eras-coach-jeeth-a-journey-of-struggles-strength-and-transformation/",
        category: "INTERVIEWS",
    }
];



export const featuredArticle: Article = {
    id: "featured-1",
    source: "Boxx Era Official",
    sourceLogo: "https://logo.clearbit.com/boxxera.com", // Fallback to logo
    brandColor: "#4343D1",
    headline: "Meet Your Coach: Jeeth Sanghavi",
    excerpt: "Welcome to the heart of Boxx Era, where transformation begins! Meet Jeeth Sanghavi, the trailblazing Founder and Transformational Expert at our premier fitness studio in Delhi & Gurugram.\n\nWith over 15 years of dedicated experience in the fitness industry, Jeeth has made it her mission to empower individuals to elevate their physical, mental, and emotional well-being through holistic, science-backed methods. As a proud recipient of the Rashtriya Shiksha Ratan Award, her credentials speak volumes. A former international and national athlete, Jeeth has excelled in both lawn tennis and boxing, and even holds the title of advanced-level mountaineer.\n\nJeeth’s expertise is wide-ranging, from body transformation and rehabilitation to sports training, making her a trusted name among fitness enthusiasts. One of her most significant accomplishments includes training Bollywood superstar Priyanka Chopra for her role in the critically acclaimed film Mary Kom, where she expertly guided the actress to embody the grit and determination of an Olympic boxer.\n\nAt the heart of Boxx Era is a vibrant community committed to holistic transformation. Jeeth has cultivated an environment where personalized training, rehabilitation/prehabilitation programs, transformation coaching, and nutritional guidance come together to redefine the fitness experience in India.\n\nJoin us at Boxx Era and embark on your transformative journey with Coach Jeeth as your guide—where every step takes you closer to your ultimate self!",
    year: "2024",
    link: "/#coaches",
    category: "INTERVIEWS",
};

