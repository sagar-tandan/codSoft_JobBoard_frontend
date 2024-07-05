import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PopularCompanies = () => {
  const [allCompany, setAllCompany] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllCompanyDetails = async () => {
      try {
        const response = await axios.get("/getAllCompany");
        if (response.statusText === "OK") {
          setAllCompany(response.data.allCompanies);
          // console.log(allCompany.allCompanies);
        } else {
          toast.error("Error getting data!");
        }
      } catch (error) {
        console.log(error);
        toast.error("Error getting data!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllCompanyDetails();
  }, []);

  // const companyDetails = (e, comps) => {
  //   navigate('/')
  // };

  return (
    <section className="text-gray-600 body-font font-poppins bg-white">
      <div className="max-w-screen-2xl mx-auto px-2">
        {isLoading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="flex justify-start xl:justify-between gap-4 overflow-x-scroll scroll-smooth scrollbar-hide">
            {allCompany.length > 0 &&
              allCompany.map((comp) => (
                <div
                  // onClick={(e, comp) => companyDetails(e)}
                  key={comp.company.id}
                  className="relative w-full sm:w-[40%] lg:w-[30%] flex-shrink-0 flex flex-col gap-2 justify-center items-center px-2 py-1 lg:py-2 border-[1px] bg-[#f2f2f2] hover:border-[#6e6e6e] hover:bg-white hover:cursor-pointer transition-all ease-in-out duration-300 rounded"
                >
                  {/* <div className="border border-gray-200 bg-gray-50 shadow-md px-6 py-8 rounded-lg text-center flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg"> */}
                  <img
                    className="w-16 h-16 mt-2 mb-2 object-cover"
                    src={comp.company.image}
                    alt={comp.company.name}
                  />
                  <h2 className="title-font font-semibold text-2xl text-gray-900 font-poppins">
                    {comp.company.name}
                  </h2>
                  <p className="text-gray-500">
                    {comp.company.selectedCity}, {comp.company.selectedCountry}
                  </p>
                  {/* </div> */}

                  {comp.job.length === 0 ? (
                    <div className="absolute top-0 right-0 bg-red-600 rounded-tr rounded-bl px-3 py-1 font-poppins font-medium text-white">
                      <h1>0 Vacancy</h1>
                    </div>
                  ) : (
                    <div className="absolute top-0 right-0 bg-green-600 rounded-tr rounded-bl px-3 py-1 font-poppins font-medium text-white">
                      <h1>
                        {comp.job.length > 1
                          ? `${comp.job.length} Vacancies`
                          : `${comp.job.length} Vacancy`}
                      </h1>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularCompanies;
