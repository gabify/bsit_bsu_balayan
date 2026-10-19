const SectionTitle = ({
  icon: Icon,
  children,
  as: Tag = "h2",
  className = "text-base",
}) => {
  return (
    <Tag
      className={`flex items-center gap-2 font-semibold text-yellow-900 ${className}`}
    >
      {Icon && <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />}
      {children}
    </Tag>
  );
};

export default SectionTitle;
