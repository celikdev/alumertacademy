interface HeaderProps {
  pageTitle: string;
}

const Header = ({ pageTitle }: HeaderProps) => {
  return (
    <header className="bg-blue-400 h-16 flex items-center px-20">
      <h1 className="text-lg font-bold">{pageTitle}</h1>
    </header>
  );
};

export default Header;
