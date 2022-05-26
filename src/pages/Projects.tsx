import { motion } from "framer-motion";
import React, {  useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { AirtableRecord } from "../interface";


const container = {
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const child = {
  hidden: {opacity: 0},
  show: {opacity: 1},
}

const Projects: React.FC = () => {
  const [records, setRecords] = useState<AirtableRecord[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchRecords = async () => {
    setLoading(true);
    try {
      const req = await fetch("/.netlify/functions/get-portfolio");
      const res = await req.json();
      if (res) {
        setRecords(res);
      } else {
        alert(res.message);
      }
    } catch (error: any) {
      alert(error.message || error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <section className="container mx-auto my-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="font-heading text-lg font-bold">Projects</h1>
      </div>

      {loading ? (
        <div className="mt-4">
          <Loading />
        </div>
      ) : (
        <motion.div
          className="grid justify-center grid-cols-[repeat(auto-fill,minmax(325px,1fr))] gap-24 my-8"
          variants={container}
          initial="hidden"
          animate="show">
          {records &&
            records.map((record, index) => (
              <motion.div variants={child}>
                <Card
                  title={record.title}
                  description={record.description}
                  tags={record.tags}
                  siteLink={record.siteLink}
                  githubLink={record.githubLink}
                  image={record.image}
                  key={index}
                />
              </motion.div>
            ))}
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
