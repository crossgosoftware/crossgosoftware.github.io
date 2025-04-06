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
      <div className="w-16 h-16 rounded-full bg-primary-light/10 flex items-center justify-center mb-4 relative">
        {Array.isArray(icon) ? (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Main icon in the center */}
            <i className={`${icon[0]} text-2xl text-primary`}></i>

            {/* Additional icons positioned around the main icon */}
            {icon.length > 1 && (
              <>
                {icon.slice(1).map((iconClass, index) => {
                  // Calculate position for each additional icon
                  const angle = (index * (360 / (icon.length - 1))) * (Math.PI / 180);
                  const top = 50 + 35 * Math.sin(angle);
                  const left = 50 + 35 * Math.cos(angle);

                  return (
                    <i
                      key={index}
                      className={`${iconClass} text-sm text-primary absolute`}
                      style={{
                        top: `${top}%`,
                        left: `${left}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    ></i>
                  );
                })}
              </>
            )}
          </div>
        ) : (
          <i className={`${icon} text-2xl text-primary`}></i>
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
