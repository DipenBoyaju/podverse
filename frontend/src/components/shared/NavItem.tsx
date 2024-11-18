type Props = {
  title: string;
};

const NavItem = ({ title }: Props) => {
  return (
    <div className="relative group overflow-hidden">
      <div className="transform transition-transform duration-300 group-hover:-translate-y-[22px] relative cursor-pointer md:text-[16px]">
        <div>{title}</div>
        <div className="absolute inset-0 transition-opacity opacity-0 translate-y-[22px] group-hover:opacity-100">
          {title}
        </div>
      </div>
    </div>
  );
};

export default NavItem;
