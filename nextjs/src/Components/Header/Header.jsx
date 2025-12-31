import NavLinks from "./NavLinks";
const Header = () => {
  const Navs = [
    {
      title: "S1",
      link: "/S1",
    },
    {
      title: "S2",
      link: "/S2",
    },
  ];
  return (
    <>
      <div className="w-full p-4 flex flex-row gap-10 justify-center">
        <ul>
          {Navs?.map((item, index) => {
            return <NavLinks key={index} item={item} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Header;
