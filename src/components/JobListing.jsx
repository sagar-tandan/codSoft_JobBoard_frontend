import React from "react";
import JobCards from "./JobCards.jsx";

export default function JobListing() {
  const jobs = [
    {
      id: 1,
      name: "SiiRA",
      image:
        "https://media.licdn.com/dms/image/D4D0BAQEcAFJG_gyagw/company-logo_200_200/0/1705401328664?e=1726099200&v=beta&t=p49IdOGAqALIHB3Hs_Olg1sKK3WiEf0y0LHbxHJ-mfM",
      location: "New York,USA",
      position: "Frontend Developer",
      time: "Full Time",
      skills: "HTML, CSS, JavaScript, ReactJs",
      salary: "1000",
    },
    {
      id: 2,
      name: "Texcel",
      image:
        "https://media.licdn.com/dms/image/D4E0BAQE1dbtXikj0uA/company-logo_100_100/0/1694602158159?e=1726099200&v=beta&t=saQOcvOurB5FE_9s1xsYocZpdc6OcjTHCYombz_swps",
      location: "New York,USA",
      position: "Backend Developer",
      time: "Full Time",
      skills: "Python, FAST API, Django",
      salary: "4000",
    },
    {
      id: 3,
      name: "CodSoft",
      image:
        "https://media.licdn.com/dms/image/D560BAQHDmIfYA5sY7w/company-logo_100_100/0/1685777115831?e=1726099200&v=beta&t=zlFFpm6AH7zqvrPOAmToJHLjKs32kO1lWp5NOGpB1Do",
      location: "New York,USA",
      position: "Frontend Developer",
      time: "Full Time",
      skills: "HTML, CSS, JavaScript, Nextjs",
      salary: "2000",
    },
    {
      id: 4,
      name: "Oliver Bernard",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQHgIGQd_-1HXw/company-logo_100_100/0/1630573464999/oliverbernard_logo?e=1726099200&v=beta&t=oW7JRE3pzh3ooKnuci88N0MieMwVszWntPxGwfwEIWU",
      location: "New York,USA",
      position: "Python Developer",
      time: "Full Time",
      skills: "Python, Django",
      salary: "2000",
    },
    {
      id: 5,
      name: "First Point Group",
      image:
        "https://media.licdn.com/dms/image/C4E0BAQFooqETuQq_JA/company-logo_100_100/0/1631301501434?e=1726099200&v=beta&t=kE9NlOrDO3bZ0J3exfPtiwOL2nC_f_-U200VjGAUmqw",
      location: "New York,USA",
      position: "FullStack Developer",
      time: "Full Time",
      skills: "MERN, Nodejs, Express, MongoDb",
      salary: "4000",
    },
    {
      id: 6,
      name: "Manual",
      image:
        "https://media.licdn.com/dms/image/C560BAQEt7p-nrFitKg/company-logo_100_100/0/1630607939644?e=1726099200&v=beta&t=kcaTyVDmClFapN70h-cpISgHftfqgU_uzHOS9eNDC7s",
      location: "New York,USA",
      position: "AI/ML Enginner",
      time: "Full Time",
      skills: "Python, data science, deep learning",
      salary: "6000",
    },
    {
      id: 7,
      name: "SiiRA",
      image:
        "https://media.licdn.com/dms/image/D4D0BAQEcAFJG_gyagw/company-logo_200_200/0/1705401328664?e=1726099200&v=beta&t=p49IdOGAqALIHB3Hs_Olg1sKK3WiEf0y0LHbxHJ-mfM",
      location: "New York,USA",
      position: "Frontend Developer",
      time: "Full Time",
      skills: "HTML, CSS, JavaScript, ReactJs",
      salary: "1000",
    },
    {
      id: 8,
      name: "SiiRA",
      image:
        "https://media.licdn.com/dms/image/D4D0BAQEcAFJG_gyagw/company-logo_200_200/0/1705401328664?e=1726099200&v=beta&t=p49IdOGAqALIHB3Hs_Olg1sKK3WiEf0y0LHbxHJ-mfM",
      location: "New York,USA",
      position: "Frontend Developer",
      time: "Full Time",
      skills: "HTML, CSS, JavaScript, ReactJs",
      salary: "1000",
    },

    // Add the remaining categories here
  ];

  const topJObs = jobs.slice(0, 6);
  return (
    <div>
      <div className="w-full flex gap-5 overflow-hidden flex-wrap mx-auto justify-start">
        {topJObs.map((job) => (
          <div key={job.id}>
            <JobCards
              name={job.name}
              image={job.image}
              location={job.location}
              position={job.position}
              time={job.time}
              skills={job.skills}
              salary={job.salary}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
