import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const ContactModal = ({ onClose, numProjects }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <header className="flex justify-center">
          <div className="flex flex-col mx-2 flex-grow-3">
            <Image src="/profile-pic.jpg" className="rounded-full" alt="Profile Image" width={150} height={150} />
            <p className="mt-3">Web Developer</p>
            <p>London, UK</p>
          </div>
          <div className="flex flex-col mx-2 flex-grow-1">
            <div className="mb-5">
              <p className="font-bold">{numProjects}</p>
              <p>Projects Completed</p>
            </div>
            <div className="mb-5">
              <p className="font-bold">1288</p>
              <p>Codewars Score</p>
            </div>
            <div>
              <p className="font-bold">156</p>
              <p>Stack Overflow</p>
            </div>
          </div>
        </header>
        <article>
          <p className="max-w-md my-5">I conquered the world of psychiatry for 15 years and now I code for fun and build useful tools for businesses around the world.</p>
        </article>
        <footer>
          <div className="flex flex-col lg:flex-row lg:justify-center my-5">
            <div className="flex justify-center">
              <Link href="tel:+1234567890">
                <div className="m-2">
                  <Image src="/phone.png" alt="Phone" width={64} height={64} />
                </div>
              </Link>
              <Link href="mailto:your-email@example.com">
                <div className="m-2">
                  <Image src="/email.png" alt="Email" width={64} height={64} />
                </div>
              </Link>
            </div>
            <div className="flex justify-center">
              <Link href="https://github.com/jasonjjjc">
                <div className="m-2">
                  <Image src="/github-sign.png" alt="GitHub" width={64} height={64} />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/jason-chalangary">
                <div className="m-2">
                  <Image src="/linkedin.png" alt="LinkedIn" width={64} height={64} />
                </div>
              </Link>
            </div>
          </div>
        </footer>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;