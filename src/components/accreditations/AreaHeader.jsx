
const AreaHeader = ({ code, title }) => {
  return (
    <header className="flex flex-col gap-1 border-b-2 border-yellow-900 pb-5">
      <p className="text-sm font-medium text-yellow-900">{code}</p>
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
    </header>
  );
};

export default AreaHeader;
