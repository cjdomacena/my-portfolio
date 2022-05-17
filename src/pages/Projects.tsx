import React, { Suspense, useEffect, useState } from 'react';
import Card from '../components/Card';
import { AirtableRecord } from '../interface';

const Projects:React.FC = () => {

  const [records, setRecords] = useState<AirtableRecord[] | null>(null);
  
  const fetchRecords = async () => {
    const req = await fetch('/.netlify/functions/get-portfolio');
    const res = await req.json();
    if(res) {
      setRecords(res);
    } else {
      alert(res.message)
    }
  }

  useEffect(() => {
      fetchRecords();
  }, [])
    
  return (
    <section className="container mx-auto my-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="font-heading text-lg font-bold">Projects</h1>
        {/* <select
          className="text-white border placeholder:text-white bg-black p-1 rounded "
          placeholder="Select">
          <option>javascript</option>
          <option>typescript</option>
          <option>react</option>
          <option>tailwindcss</option>
        </select> */}
      </div>

      <div className="grid justify-center grid-cols-[repeat(auto-fill,minmax(325px,1fr))] gap-24 my-8">
        <Suspense
          fallback={
            <svg
              className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          }>
          {records &&
            records.map((record, index) => (
              <Card
                title={record.title}
                description={record.description}
                tags={record.tags}
                siteLink={record.siteLink}
                githubLink={record.githubLink}
                image={record.image}
                key={index}
              />
            ))}
        </Suspense>
      </div>
    </section>
  );
};

export default Projects;
