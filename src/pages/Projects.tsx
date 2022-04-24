import React, { useEffect, useState } from 'react';
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
        {records && records.map((record, index) => <Card title={record.title} description={record.description} tags={record.tags} siteLink={record.siteLink} githubLink={record.githubLink} image={record.image} key={index} />)}
      </div>
    </section>
  );
};

export default Projects;
