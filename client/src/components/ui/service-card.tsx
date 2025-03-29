import { scrollToSection } from "@/lib/utils";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Extract the section ID from the link (remove the '#')
    const sectionId = link.replace('#', '');
    scrollToSection(sectionId);
  };

  return (
    <div className="service-card bg-white rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-primary-light/10 flex items-center justify-center mb-4">
        <i className={`${icon} text-2xl text-primary`}></i>
      </div>
      <h3 className="text-xl font-bold font-inter text-neutral-900 mb-3">{title}</h3>
      <p className="text-neutral-600 mb-4">
        {description}
      </p>
      <a 
        href={link} 
        onClick={handleClick}
        className="text-primary hover:text-primary-dark font-medium inline-flex items-center mt-auto cursor-pointer"
      >
        Learn more
        <i className="fas fa-arrow-right ml-2 text-sm"></i>
      </a>
    </div>
  );
};

export default ServiceCard;
