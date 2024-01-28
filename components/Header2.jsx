import React, { useState } from "react";

const Header2 = () => {
  const [list, setList] = useState([
    {
      name: "Banglore",
      subItem: [
        "Koramangala",
        "Mg Road",
        "Rajaji Nagar",
        "Indiranagar",
        "Jayanagar",
        "Madiwala",
        "Majestic",
        "Yesvantpur Railway Station",
        "Marathahalli",
        "Hsr Layout",
        "All of Bangalore",
      ],
      active: false,
    },
    {
      name: "Culkatta",
      subItem: [
        "Chennai Central Railway Station",
        "T Nagar",
        "Ecr East Coast Road",
        "Koyambedu",
        "Mount Road",
        "Ramapuram",
        "Porur",
        " hennai Egmore Railway Station",
        "Anna Nagar",
        "Velachery",
        "All of Chennai",
      ],
      active: false,
    },
    {
      name: "Mumbai",
      subItem: [
        "Paharganj",
        "Karol Bagh",
        "Janakpuri",
        "Dwarka, New Delhi",
        "Mahipalpur",
        "Indira Gandhi International Airport",
        "Saket",
        "Lajpat Nagar",
        "New Delhi Railway Station",
        "Rohini",
        "All of Delhi",
      ],
      active: false,
    },
    {
      name: "Hydrabad",
      subItem: [
        "Paharganj",
        "Karol Bagh",
        "Janakpuri",
        "Dwarka, New Delhi",
        "Mahipalpur",
        "Indira Gandhi International Airport",
        "Saket",
        "Lajpat Nagar",
        "New Delhi Railway Station",
        "Rohini",
        "All of Delhi",
      ],
      active: false,
    },
    {
      name: "Delhi",
      subItem: [
        "Howrah Railway Station",
        "Kolkata International Airport",
        "Chinar Park",
        "Park Street",
        "Near Acropolis Mall",
        "Esplanade Metro Station",
        "Dum Dum Airport 1 No. Gate",
        "Barasat",
        "New Town",
        "Salt Lake City",
        "All of Kolkata",
      ],
      active: false,
    },
    {
      name: "Manali",
      subItem: [
        "Howrah Railway Station",
        "Kolkata International Airport",
        "Chinar Park",
        "Park Street",
        "Near Acropolis Mall",
        "Esplanade Metro Station",
        "Dum Dum Airport 1 No. Gate",
        "Barasat",
        "New Town",
        "Salt Lake City",
        "All of Kolkata",
      ],
      active: false,
    },
    {
      name: "Banglore",
      subItem: [
        "Howrah Railway Station",
        "Kolkata International Airport",
        "Chinar Park",
        "Park Street",
        "Near Acropolis Mall",
        "Esplanade Metro Station",
        "Dum Dum Airport 1 No. Gate",
        "Barasat",
        "New Town",
        "Salt Lake City",
        "All of Kolkata",
      ],
      active: false,
    },
    {
      name: "Leh",
      subItem: [
        "Howrah Railway Station",
        "Kolkata International Airport",
        "Chinar Park",
        "Park Street",
        "Near Acropolis Mall",
        "Esplanade Metro Station",
        "Dum Dum Airport 1 No. Gate",
        "Barasat",
        "New Town",
        "Salt Lake City",
        "All of Kolkata",
      ],
      active: false,
    },
  ]);
  const activateHover = (index) => {
    setList((prevList) => {
      const newList = [...prevList];
      newList[index].active = true;
      return newList;
    });
  };

  const deactivateHover = (index) => {
    setList((prevList) => {
      const newList = [...prevList];
      newList[index].active = false;
      return newList;
    });
  };

  return (
    <div className="flex px-10 py-3 justify-between bg-gray-100">
      {list.map((item, index) => {
        return (
          <div className="relative" onMouseLeave={() => deactivateHover(index)}>
            <span
              onMouseEnter={() => activateHover(index)}
              className={`cursor-pointer `}
              key={index}
            >
              {item.name}
            </span>
            <div
              className={`absolute w-72 p-4 space-y-2 ${
                item.active ? "block" : "hidden"
              } bg-white shadow-md transition-all duration-300 ease-in-out`}
            >
              <h3 className="font-bold text-lg">Popular Localities</h3>
              {item.subItem.map((subItem, i) => {
                return (
                  <h4 className="cursor-pointer hover:text-red-400 text-gray-500  ">
                    {subItem}
                  </h4>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Header2;
