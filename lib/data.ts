export interface Article {
    id: string;
    title: string;
    summary: string;
    content: string;
    image: string;
    category: string;
    publishedAt: string;
    author: string;
}

export const articles: Article[] = [
    {
        id: '1',
        title: 'India Wins Cricket World Cup in Thrilling Final',
        summary: 'In a match that will be remembered for decades, India defeated Australia by 20 runs to lift the World Cup trophy.',
        content: 'The Narendra Modi Stadium in Ahmedabad erupted in joy as India clinched their third World Cup title. Virat Kohli scored a magnificent century, while Jasprit Bumrah took 4 crucial wickets. The match went down to the last over, with nerves of steel shown by the Indian bowlers. "This is for the fans," said Rohit Sharma in the post-match presentation.',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'Cricket',
        publishedAt: '2023-11-19T22:30:00Z',
        author: 'Sports Desk'
    },
    {
        id: '2',
        title: 'Government Announces New Digital India Initiative',
        summary: 'The Prime Minister launched a new scheme to provide high-speed internet to every village in the country by 2025.',
        content: 'In a bid to bridge the digital divide, the government has allocated ₹50,000 crore for the "Digital Gram" project. This initiative aims to connect over 2 lakh villages with optical fiber networks. "Internet is a basic right," the PM stated during the launch event in New Delhi.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'Nation',
        publishedAt: '2023-11-20T10:00:00Z',
        author: 'Politics Bureau'
    },
    {
        id: '3',
        title: 'Global Stock Markets Rally on Tech Earnings',
        summary: 'Major indices hit record highs as tech giants report better-than-expected quarterly earnings.',
        content: 'Wall Street and Asian markets saw a significant surge today. Companies like Apple, Google, and Microsoft reported double-digit growth, fueling investor optimism. Analysts predict this bull run could continue into the next quarter.',
        image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'Business',
        publishedAt: '2023-11-21T09:15:00Z',
        author: 'Finance Team'
    },
    {
        id: '4',
        title: 'New Space Mission to Mars Announced by ISRO',
        summary: 'ISRO chief confirms plans for Mangalyaan-2, aiming for a soft landing on the Red Planet.',
        content: 'Following the success of Chandrayaan-3, ISRO is setting its sights on Mars again. The new mission will carry advanced scientific payloads to study the Martian atmosphere and surface geology. Launch is expected in 2026.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'Science',
        publishedAt: '2023-11-22T14:45:00Z',
        author: 'Science Editor'
    },
    {
        id: '5',
        title: 'Heavy Rains Lash Mumbai, Schools Closed',
        summary: 'Monsoon fury continues in Maharashtra as Mumbai receives record rainfall in 24 hours.',
        content: 'Life in the financial capital came to a standstill as torrential rains caused waterlogging in several low-lying areas. Local trains are running late, and the BMC has declared a holiday for schools and colleges. Citizens are advised to stay indoors.',
        image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'Nation',
        publishedAt: '2023-11-23T08:00:00Z',
        author: 'City Reporter'
    },
    {
        id: '6',
        title: 'Review: The Latest Smartphone is a Game Changer',
        summary: 'We tested the new flagship phone and it redefines mobile photography and performance.',
        content: 'With a 200MP camera and the latest Snapdragon processor, this phone is a beast. The battery life is impressive, lasting over a day of heavy use. However, the price tag might be a deterrent for some.',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'Tech',
        publishedAt: '2023-11-24T12:30:00Z',
        author: 'Tech Guru'
    }
];

export const getArticles = () => articles;

export const getArticleById = (id: string) => articles.find((article) => article.id === id);

export const getTopNews = () => articles[0]; // Simulating top news as the first one
