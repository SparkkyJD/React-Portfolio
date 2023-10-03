import React from "react";
import { Button, Card } from "flowbite-react";
import "font-awesome/css/font-awesome.min.css";
import JATE from "../assets/JATE.jpg";
import { BsGithub } from "react-icons/bs";

const Portfolio = () => {
  return (
    <section className="m-24 dark:text-white">
      <h2 id="portfolio" className="font-bold mb-20 text-center text-5xl">
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        <Card className="max-w-xs">
          <div className="flex flex-col h-full justify-between">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p className="flex justify-center">Squad Sync</p>
              <a href="https://squad-sync-5e36d690cf8e.herokuapp.com/">
                <img
                  className="rounded-t-lg"
                  src="https://i.ibb.co/RpCLb30/screenshot1.png"
                  alt=""
                />
              </a>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                SquadSync is an innovative task management application that
                leverages technologies like{" "}
                <span className="text-blue-500">
                  GraphQL, React, MongoDB, and Tailwind
                </span>{" "}
                to centralize and organize user lists, promote collaboration,
                and prioritize tasks for efficient and collaborative task
                management.
              </p>
            </p>
            <Button>
              <p>Visit Deployed App</p>
            </Button>
          </div>
        </Card>

        <Card className="max-w-xs">
          <div className="flex flex-col h-full justify-between">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p className="flex justify-center">Challenge Fitness</p>
              <a href="https://challenge-fitness-9cf387429034.herokuapp.com/login">
                <img
                  className="rounded-t-lg"
                  src="https://i.ibb.co/6HrKGmx/screenshot2.png"
                  alt=""
                />
              </a>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Celebrate your fitness journey with our{" "}
                <span className="text-blue-500">MERN stack-powered app.</span>{" "}
                Effortlessly track exercises, set challenges, and conquer your
                goals – all in one place.
              </p>
            </p>
            <Button>
              <p>Visit Deployed App</p>
            </Button>
          </div>
        </Card>

        <Card className="max-w-xs">
          <div className="flex flex-col h-full justify-between">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p className="flex justify-center">Marvel Comic Search</p>
              <a href="https://sparkkyjd.github.io/Marvel-comic-search/">
                <img
                  className="rounded-t-lg"
                  src="https://i.ibb.co/f9NVPWH/screenshot3.png"
                  alt=""
                />
              </a>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Discover the ultimate Marvel comic collector's app. Effortlessly
              build and visualize your virtual long box collection, with quick
              access to detailed comic information through an integrated
              Wikipedia search. Powered by{" "}
              <span className="text-blue-500">JS/CSS/HTML/API</span>.
            </p>
            <Button>
              <p>Visit Deployed App</p>
            </Button>
          </div>
        </Card>

        <Card className="max-w-xs">
          <div className="flex flex-col h-full justify-between">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p className="flex justify-center">J.A.T.E</p>
              <a href="https://pwa-jate-unc-6a94338fea53.herokuapp.com/">
                <img className="rounded-t-lg" src={JATE} />
              </a>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Welcome to Just Another Text Editor, a versatile and user-friendly{" "}
              <span className="text-blue-500">Progressive Web App (PWA)</span>{" "}
              for effortless text document creation and editing. Enjoy syntax
              highlighting, a responsive interface, and the convenience of
              offline access.
            </p>
            <Button>
              <p>Visit Deployed App</p>
            </Button>
          </div>
        </Card>
        <Button
        href="https://github.com/SparkkyJD"
          className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 
          focus:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-600"
        >
          <BsGithub className="text-3xl" />
          <span className="text-lg">See My Other Projects on GitHub</span>
        </Button>
      </div>
    </section>
  );
};

export default Portfolio;
