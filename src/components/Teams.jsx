import Title from "../components/Title";
import { Link } from "react-router-dom";
import { persons } from "../assets/assets";

const Teams = () => {
  return (
    <>
      <div className="text-2xl text-center pt-10">
        <Title text1="MEET THE DREAM" text2="TEAM" />
      </div>

      <div className="my-10">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {persons.map((item, index) => (
            <Link key={index} className="cursor-pointer group" to="#">
              <div className="w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  className="h-[400px] w-full object-cover object-center productImage"
                  src={item.image}
                  alt={`Person_${item.name}`}
                />
              </div>
              <h3 className="mt-4 text-xl text-gray-800">{item.name}</h3>
              <h3 className="mt-1 text-sm text-gray-700">{item.jobTitle}</h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;
