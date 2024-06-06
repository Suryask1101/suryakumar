import one from '../assets/svg/projects/host-record.svg'
import two from '../assets/svg/projects/surveillance-defense.svg'
import three from '../assets/svg/projects/touch-click.svg'
import eleven from '../assets/svg/projects/eleven.svg'
import ten from '../assets/svg/projects/ten.svg'



export const projectsData = [
    {
        id: 1,
        projectName: 'Automated ECS Task Scheduling with AWS Lambda',
        projectDesc: 'Automated ECS service start/stop using Lambda & CloudWatch Events. Cuts costs by scheduling tasks as needed.',
        tags: ['ECS', 'Lambda'],
        code: 'https://github.com/Suryask1101/ECS-start-stop-using-lambda',
        demo: 'https://medium.com/@suryask4530/how-to-schedule-ecs-stop-and-start-automatically-using-lambda-a3fa70e6e19f',
        image: eleven
    },
    {
        id: 2,
        projectName: 'CI/CD pipeline for reactjs using github actions',
        projectDesc: 'CI/CD pipeline with GitHub Actions automates EC2 builds & deployments for faster updates, minimal manual effort.',
        tags: ['CI/CD', 'Github-actions'],
        code: 'https://github.com/Suryask1101/CICD-Github-to-EC2',
        demo: 'https://medium.com/@suryask4530/setup-ci-cd-pipeline-using-github-actions-for-reactjs-application-hosted-on-aws-ec2-8aefd114fb21',
        image: ten
    },
    {
        id: 3,
        projectName: 'Automated Web Application',
        projectDesc: 'Automated Jenkins deployment for a web app on Tomcat, reducing deployment time to 15 minutes, ensuring a consistent, error-free process.',
        tags: ['Jenkins', 'Tomcat Server'],
        code: 'https://github.com/Suryask1101/Tomcat-server',
        demo: 'https://github.com/Suryask1101/Tomcat-server',
        image: one
    },
    {
        id: 4,
        projectName: 'Weapon Detection Through CCTV',
        projectDesc: 'The aim of the project is to detect weapons using a surveillance camera in real-time.',
        tags: ['PyQt5', 'OpenCV', 'Numpy'],
        code: 'https://github.com/Suryask1101/weapon-detection-camera',
        demo: 'https://github.com/Suryask1101/weapon-detection-camera',
        image: two
    },
    {
        id: 5,
        projectName: 'Audio Book Using Python ',
        projectDesc: 'Designed and implemented a Python-based audio book application, combining text-to-speech synthesis for an engaging and accessible reading experience. ',
        tags: ['PyPDF2', 'pyttsx3','textblob'],
        code: 'https://github.com/Suryask1101/Audio-book',
        demo: 'https://github.com/Suryask1101/Audio-book',
        image: three
    },
 
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
