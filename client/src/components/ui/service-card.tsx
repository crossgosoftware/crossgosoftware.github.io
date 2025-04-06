import { scrollToSection } from "@/lib/utils";

interface ServiceCardProps {
  icon: string | string[];
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
      <div className="w-32 h-32 bg-primary-light/10 rounded-lg mb-4 relative overflow-hidden">
        {Array.isArray(icon) ? (
          <div className="w-full h-full flex items-center justify-center">
            {/* Display two icons side by side */}
            <div className="flex space-x-4">
              {icon.slice(0, 2).map((iconClass, index) => (
                <div
                  key={index}
                  className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-sm"
                >
                  <i className={`${iconClass} text-3xl text-primary`}></i>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <i className={`${icon} text-4xl text-primary`}></i>
          </div>
        )}
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
