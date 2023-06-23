import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const ContactModal = ({ numProjects, toggleContact }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 p-2">
      <div className="flex flex-col items-center bg-white rounded-md p-2 pt-4 md:pt-8">
        <header className="flex justify-around">
          <div className="flex flex-col flex-grow-3">
            <Image src="/profile-pic.jpg" className="rounded-full mb-2" alt="Profile Image" width={100} height={100} />
            <p className="">Web Developer</p>
            <p>London, UK</p>
          </div>
          <div className="flex flex-col flex-grow-1 ml-4">
            <div className="mb-2">
              <p className="font-bold">{numProjects}</p>
              <p>Projects Completed</p>
            </div>
            <div className="mb-2">
              <p className="font-bold">1288</p>
              <p>Codewars Score</p>
            </div>
            <div>
              <p className="font-bold">156</p>
              <p>Stack Overflow</p>
            </div>
          </div>
        </header>
        <article className="py-4 md:px-56 lg:px-80 xl:pd-96">
          <p className="max-w-md">I conquered the world of psychiatry for 15 years and now I code for fun and build useful tools for businesses around the world.</p>
        </article>
        <footer>
          <div className="flex justify-around mb-4 md:px-8">
            <Link href="tel:+1234567890">
              <div className="m-2">
                <Image src="/phone.png" alt="Phone" width={48} height={48} />
              </div>
            </Link>
            <Link href="mailto:your-email@example.com">
              <div className="m-2">
                <Image src="/email.png" alt="Email" width={48} height={48} />
              </div>
            </Link>
            <Link href="https://github.com/jasonjjjc">
              <div className="m-2">
                <Image src="/github-sign.png" alt="GitHub" width={48} height={48} />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/jason-chalangary">
              <div className="m-2">
                <Image src="/linkedin.png" alt="LinkedIn" width={48} height={48} />
              </div>
            </Link>
          </div>
        </footer>
        <button
          onClick={toggleContact}
          className="bg-blue-500 text-white rounded m-2 px-4 py-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;


