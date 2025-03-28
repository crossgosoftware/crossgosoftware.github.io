interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-primary/30 transition-colors">
      <div className="w-12 h-12 rounded-full bg-primary-light/10 flex items-center justify-center mb-4">
        <i className={`${icon} text-xl text-primary`}></i>
      </div>
      <h3 className="text-xl font-semibold font-inter text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
