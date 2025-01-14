import resume from '../assets/resume.pdf';
import image from '../assets/png/IMG-20241002-WA0005~3.jpg';

export const headerData = {
    name: 'Surya Kumar',
    title: 'DevOps Engineer',
    description: 'I am now eager to leverage my experience and skills to tackle challenging tech projects.',
    Img: image,
    resumePdf: resume
};

// Google Analytics Integration
if (typeof window !== 'undefined') {
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-PVJTEEJ880';
    document.head.appendChild(gtagScript);

    gtagScript.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-PVJTEEJ880');
    };
}
