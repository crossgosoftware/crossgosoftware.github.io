import { Link } from "wouter";

interface Tag {
  label: string;
  color: string;
}

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: Tag[];
  link: string;
}

const ProjectCard = ({ image, title, description, tags, link }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className={`text-xs font-medium ${tag.color} rounded-full px-2 py-1`}
            >
              {tag.label}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold font-inter text-neutral-900 mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4">
          {description}
        </p>
        <Link href={link} className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
          View Case Study
          <i className="fas fa-arrow-right ml-2 text-sm"></i>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
