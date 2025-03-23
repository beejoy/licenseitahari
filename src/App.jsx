import MemberCard from "./components/MemberCard";
import licenseData from "./license.json";
import React, { useState } from "react";
import logo from "./assets/tmo-logo.jpg";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [license, setLicense] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchTerm.match(/[a-z]/)
      ? setLicense(
          licenseData.filter((data) =>
            data.NAME.toLowerCase().match(
              searchTerm.length > 0 ? searchTerm : "xiaomi"
            )
          )
        )
      : setLicense(licenseData.filter((data) => data.DLNO.match(searchTerm.length > 0 ? searchTerm : "xiaomi")));
    setSearchTerm("");
  };

  return (
    <>
      <div className="flex flex-col items-center mx-auto py-8 text-sky-600 max-w-xs sm:max-w-xs">
        <img
          src={logo}
          alt="TMO Driving License, Itahari"
          className="rounded-full w-1/2 border-sky-600 mb-8"
          width="160px"
          height="235px"
        />
        <div className="text-justify mb-8">
          <p>यातायात व्यवस्था कार्यालय (स.चा.अ.प.), सुनसरीबाट नयाँ लाइसेन्स, वर्ग थप, नवीकरणको लागि आवेदन दिनुभएका सेवाग्राहीले आफ्नो स्मार्ट कार्ड लाइसेन्स आए नआएको चेक गर्न तलको बक्समा आफ्नो लाइसेन्स नम्बरको अन्तिमको आठ अङ्क टाइप गरेर Search बटनमा क्लिक गर्नुहोस्। यदि तपाईको लाइसेन्स आएको रहेछ भने तपाईको विवरण देखिनेछ। त्यसपछि स्मार्ट कार्ड लाइसेन्स लिन सक्कल नागरिकता र राजस्व तिरेको सक्कल रसिद लिएर कार्यालयमा आउनुहोला।</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 mb-0 items-center w-full"
        >
          <input
            id="code-number"
            type="text"
            value={searchTerm}
            placeholder="Enter license number or name"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            className="text-sky-600 border-sky-600 outline-sky-600 outline-1 text-center px-5 py-2 rounded-md border w-full"
          />
          <button
            type="submit"
            className="bg-sky-600 py-2 px-10 rounded-md text-white hover:outline-1 hover:outline-sky-600/40 hover:bg-sky-600 hover:shadow-md"
          >
            Search
          </button>
        </form>
      </div>

      <div className="flex flex-col items-center mx-auto py-8 text-sky-600 max-w-xs sm:max-w-xs md:max-w-2xl">
        {license && license.length > 0 ? (
          <>
            <div className="flex flex-col gap-y-3 w-full">
              <h2 className="text-center font-semibold mb-2">
                {license.length} {license.length === 1 ? "record" : "records"}
              </h2>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-y-4 sm:max-w-xs md:max-w-2xl">
              {license.map((data) => (
                <MemberCard data={data} key={data.ID} />
              ))}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default App;
