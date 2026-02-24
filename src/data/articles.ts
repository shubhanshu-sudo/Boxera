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
];




