import aboutImg from '../assets/img/aboutme-tile.jpg';
import alienLoungeImg from '../assets/img/mywork-tile.jpg';
import flyingBirdImg from '../assets/img/myart-tile.jpg';
import paintSmilesImg from '../assets/img/mycode-tile.jpg';

export const PHOTOS = [
    {
        id: 0,
        name: 'About Me',
        image: aboutImg,
        elevation: 1233,
        featured: false,
        description:
            'Software Developer, Digital Media Specialist, and Artist.'
    },
    {
        id: 1,
        name: 'My Work',
        image: alienLoungeImg,
        elevation: 877,
        featured: false,
        description:
            'Multimedia and social media content, logos, videos, books, and websites.'
    },
    {
        id: 2,
        name: 'My Art',
        image: flyingBirdImg,
        elevation: 2901,
        featured: false,
        description:
            'Hand-drawn, digital, and mixed art.'
    },
    {
        id: 3,
        name: 'My Code',
        image: paintSmilesImg,
        elevation: 42,
        featured: true,
        description:
            "Website development, applications, and programming."
    }
];
