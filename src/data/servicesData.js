
import { FaAws, FaCog, FaTools } from "react-icons/fa";
import {
    SiGooglecloud,
    SiLinux,
    SiDocker,
    SiKubernetes,
    SiGit,
    SiJenkins,
    SiGrafana
} from "react-icons/si";

export const servicesData = [
    {
        id: 1,
        title: 'AWS',
        icon: <FaAws />
    },
    {
        id: 2,
        title: 'Google Cloud Platform',
        icon: <SiGooglecloud />
    },
    {
        id: 3,
        title: 'Linux Administration',
        icon: <SiLinux />
    },
    {
        id: 4,
        title: 'Docker',
        icon: <SiDocker />
    },
    {
        id: 5,
        title: 'Kubernetes',
        icon: <SiKubernetes />
    },
    {
        id: 6,
        title: 'CI/CD Pipelines',
        icon: <SiJenkins />
    },
    {
        id: 7,
        title: 'Infrastructure Automation',
        icon: <FaCog />
    },
    {
        id: 8,
        title: 'Version Control',
        icon: <SiGit />
    },
    {
        id: 9,
        title: 'Monitoring & Logging',
        icon: <SiGrafana />
    }
]
