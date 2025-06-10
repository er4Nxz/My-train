import axios from "axios";
import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const JsonServer = () => {
  const [menu, setMenu] = useState(null);
  const fetchMenu = async () => {
    try {
      let url = await axios("http://localhost:3000/menu");
      setMenu(url.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <div className="w-[100%] p-2 bg-blue-950">
      <nav className="flex flex-row justify-center gap-x-10">
        {menu?.map((item) => {
          return item.dropdown.length === 0 ? (
            <a
              href={item.link}
              className="text-white capitalize hover:text-white/[0.5] transition"
              key={item.id}
            >
              {item.title}
            </a>
          ) : (
            <div className="dropdown">
              <div
                tabIndex={0}
                className="text-white cursor-pointer capitalize hover:text-white/[0.5] transition"
              >
                {item.title}<RiArrowDropDownLine className="inline-block" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-blue-300/[0.5] rounded-box z-1 w-52 p-2 shadow-lg"
              >
                {item.dropdown?.map((itemDrop) => {
                  return (
                    <li key={itemDrop.id}>
                      <a className="text-black capitalize" href={itemDrop.link}>
                        {itemDrop.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default JsonServer;
