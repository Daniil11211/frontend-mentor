function App() {
  return (

    <div className="flex flex-col text-white lg:flex-row lg:mt-30 lg:mb-20">
      <div className="bg-amber-600 rounded-t-xl ml-10 mr-10 mt-25 md:mr-15 md:ml-15 lg:rounded-t-none lg:rounded-l-xl lg:mt-0 lg:mr-0 lg:ml-20">
        <div className="w-10 h-10 rounded-full bg-amber-900 ml-11 mt-15 md:ml-20 md:mb-5 md:w-18 md:h-18 md:mt-20 lg:ml-15 lg:w-15 lg:h-15"></div>
        <h1 className="pt-7 font-semibold text-3xl transform scale-y-180 ml-11 md:ml-20 md:text-4xl lg:ml-15">
          SEDANS
        </h1>
        <p className="pt-14 font-normal text-amber-50 ml-10 mr-15 text-xl md:text-2xl md:ml-20 md:mr-20 lg:ml-15">
          Choose a sedan for its affodability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className="ml-10 mt-12 mb-12 rounded-4xl text-amber-600 bg-amber-50 pt-4 pb-4 pl-9 pr-9 text-center text-xl font-medium md:ml-20 md:pb-6 md:pt-6 md:rounded-full md:pl-12 md:pr-12 md:text-2xl md:mb-20 lg:mt-25 lg:mb-15 lg:ml-15 lg:pt-4 lg:pb-4 lg:pl-10 lg:pr-10 lg:text-xl">
          Learn More
        </button>
      </div>

      <div className="bg-teal-800 ml-10 mr-10 md:mr-15 md:ml-15 lg:ml-0 lg:mr-0">
        <div className="w-10 h-10 rounded-full bg-teal-900 ml-11 mt-15 md:ml-20 md:mb-5 md:w-18 md:h-18 md:mt-20 lg:ml-15 lg:w-15 lg:h-15"></div>
        <h1 className="pt-7 font-semibold text-3xl transform scale-y-170 ml-11 md:ml-20 md:text-4xl lg:ml-15">
          SUVS
        </h1>
        <p className="pt-14 font-normal text-amber-50 ml-10 mr-15 text-xl md:text-2xl md:ml-20 md:mr-20 lg:ml-15">
          Take a SUV for its spacious interior, power and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>

        <button className="ml-10 mt-14 mb-12 rounded-4xl text-teal-800 bg-amber-50 pt-4 pb-4 pl-9 pr-9 text-center text-xl font-medium md:ml-20 md:pb-6 md:pt-6 md:rounded-full md:pl-12 md:pr-12 md:text-2xl md:mb-20 lg:mt-25 lg:mb-15 lg:ml-15 lg:pt-4 lg:pb-4 lg:pl-10 lg:pr-10 lg:text-xl">
          Learn More
        </button>
      </div>

      <div className="bg-teal-900 rounded-b-xl ml-10 mr-10 mb-25 md:mr-15 md:ml-15 lg:rounded-b-none lg:rounded-r-xl lg:rounded-br-xl lg:mb-0 lg:ml-0 lg:mr-20">
        <div className="w-10 h-10 rounded-full bg-teal-950 ml-11 mt-15 md:ml-20 md:mb-5 md:w-18 md:h-18 md:mt-20 lg:ml-15 lg:w-15 lg:h-15"></div>
        <h1 className="pt-9 font-semibold text-3xl transform scale-y-170 ml-11 md:ml-20 md:text-4xl lg:ml-15">
          LUXURY
        </h1>
        <p className="pt-14 font-normal text-amber-50 ml-10 mr-15 text-xl md:text-2xl md:ml-20 md:mr-20 lg:ml-15">
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>

        <button className="ml-10 mt-14 mb-12 rounded-4xl text-teal-900 bg-amber-50 pt-4 pb-4 pl-9 pr-9 text-center text-xl font-medium md:ml-20 md:pb-6 md:pt-6 md:rounded-full md:pl-12 md:pr-12 md:text-2xl md:mb-20 lg:mt-25 lg:mb-15 lg:ml-15 lg:pt-4 lg:pb-4 lg:pl-10 lg:pr-10 lg:text-xl">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default App;
