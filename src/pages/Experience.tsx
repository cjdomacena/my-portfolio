import React from 'react'

type Props = {}

const Experience = (props: Props) => {
  return (
    <section className="max-w-2xl mx-auto my-4 h-full text-white">
      <h1 className="p-4">Experience</h1>
      <div className="mt-8 space-y-4 p-4">
        <h1 className="font-heading text-4xl font-black">United Nation Capital Development Fund</h1>
        <p>Web and Graphic Design Intern</p>
        <p className="text-sm">Jun. 2021 - Dec. 2021</p>
      </div>
      <div className="mt-12 space-y-4 p-4">
        <h1 className="font-heading text-4xl font-black">Platform of Hope</h1>
        <p>Frontend Developer Intern</p>
        <p className="text-sm">Jan. 2021 - Jun. 2021</p>
      </div>
      <hr className="my-12" />
      <h1 className="p-4">Related Coursework</h1>
      <div className="mt-8 space-y-4 p-4">
        <h1 className="font-heading text-4xl font-black">Mobile Design Applications</h1>
        <p>IS322 - React, redux, react-native</p>
        <p className="text-sm">Spring 2022</p>
      </div>
      <div className="mt-12 space-y-4 p-4">
        <h1 className="font-heading text-4xl font-black">
          Database Design, Management & Application
        </h1>
        <p>IS331 - Mysql, Visio</p>
        <p className="text-sm">Spring 2022</p>
      </div>
      <div className="mt-8 space-y-4 p-4">
        <h1 className="font-heading text-4xl font-black">Building Web Applications</h1>
        <p>IS218 - Laravel & Docker</p>
        <p className="text-sm">Spring 2021</p>
      </div>
    </section>
  );
}

export default Experience