import { memo, useState } from "react";
import { motion } from "framer-motion"

type PROJECTDETAILS = {
    id?: number,
    title: string,
    description: string,
    src: string,
    url?: string,
    color?: string,
    tech: string[],
    tags: string[],
    githubLink?: string,
    img: string,
    index?: number,
}

const ProjectDetails = memo(({ title, description, url, tech, githubLink, img }: PROJECTDETAILS) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='w-full flex items-center justify-center py-10'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h1>{title}</h1>
            <div> part 1 </div>
            <div> part 2 </div>
            
        </div>
    );
});

ProjectDetails.displayName = 'ProjectDetails';

export default ProjectDetails;
