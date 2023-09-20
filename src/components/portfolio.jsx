import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Portfolio = () => {
  return (
    <section className="">

      <h2 id="portfolio" className="font-bold  mb-20 text-center text-5xl">Projects</h2>

      <div className="flex flex-wrap gap-4 lg:flex-row justify-center mx-8">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <a href="https://squad-sync-5e36d690cf8e.herokuapp.com/">
            <img className="rounded-t-lg" src="https://i.ibb.co/RpCLb30/screenshot1.png" alt="" />
          </a>
          <div className="p-5">
            <a>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SquadSync</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">React/GraphQL/Appolo/flowbite</p>
          </div>
        </div>


        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <a href="https://challenge-fitness-9cf387429034.herokuapp.com/login">
            <img className="rounded-t-lg" src="https://i.ibb.co/6HrKGmx/screenshot2.png" alt="" />
          </a>
          <div className="p-5">
            <a>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Challenge Fitness App</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Mern Stack</p>
          </div>
        </div>


        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <a href="https://sparkkyjd.github.io/Marvel-comic-search/">
            <img className="rounded-t-lg" src="https://i.ibb.co/f9NVPWH/screenshot3.png" alt="" />
          </a>
          <div className="p-5">
            <a>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Marvel Longbox App</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">JS/CSS/HTML/API</p>
          </div>
        </div>


        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <a href="https://sparkkyjd.github.io/weather-dashboard/">
            <img className="rounded-t-lg" src="https://fox59.com/wp-content/uploads/sites/21/2022/10/GettyImages-1147913430.jpg?w=2560&h=1440&crop=1" alt="" />
          </a>
          <div className="p-5">
            <a>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Weather Dashboard App</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">JS/HTML</p>
          </div>
        </div>


        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <a href="https://github.com/SparkkyJD/E-Commerce-Back-End">
            <img className="rounded-t-lg" src="https://previews.123rf.com/images/9george/9george1807/9george180700110/115003155-two-running-men-cartoon-jogging-buddy-vector-illustration.jpg" alt="" />
          </a>
          <div className="p-5">
            <a>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">E-Commerce ORM</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">dotenv/express/mysql/sequelize</p>
          </div>
        </div>


        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <a href="https://github.com/SparkkyJD/Note-Taker">
            <img className="rounded-t-lg" src="https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2015/11/5-Ways-to-Analyze-Employee-Performance-1024x508.jpg" alt="" />
          </a>
          <div className="p-5">
            <a>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Employee Tracker</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">express/mysql/schema/inquirer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;