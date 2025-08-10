interface CarCardItemProps {
  id: string;
  label: string;
  description: string;
  color: string;
  colorCircle: string;
  textColor: string;
}

const car_card_list: CarCardItemProps[] = [
  {
    id: "0",
    label: "SEDANS",
    description:
      "Choose a sedan for its affodability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    color: "bg-amber-600",
    colorCircle: "bg-amber-900",
    textColor: "text-amber-600",
  },
  {
    id: "1",
    label: "SUVS",
    description:
      "Take a SUV for its spacious interior, power and versatility. Perfect for your next family vacation and off-road adventures.",
    color: "bg-teal-800",
    colorCircle: "bg-teal-900",
    textColor: "text-teal-800",
  },
  {
    id: "2",
    label: "LUXURY",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    color: "bg-teal-900",
    colorCircle: "bg-teal-950",
    textColor: "text-teal-900",
  },
];

const CarCardItem = ({
  label,
  description,
  color,
  colorCircle,
  id,
  textColor,
}: CarCardItemProps) => {
  const roundedMap: Record<string, string> = {
    "0": "rounded-t-xl lg:rounded-t-none lg:rounded-l-xl",
    "1": "",
    "2": "rounded-b-xl lg:rounded-b-none lg:rounded-r-xl lg:rounded-br-xl",
  };

  return (
    <div className={`${color} ${roundedMap[id]} flex flex-col justify-around`}>
      <div className="ml-15 mb-12">
        <div className={`w-15 h-15 rounded-full ${colorCircle} mt-13`}></div>
        <h1 className="font-semibold text-3xl transform scale-y-180 md:text-4xl mt-13">
          {label}
        </h1>
        <p className="mr-17 font-normal text-amber-50 text-xl md:text-2xl mt-13">
          {description}
        </p>
        <button
          className={`rounded-4xl ${textColor} bg-amber-50 pt-4 pb-4 pl-9 pr-9 text-center text-xl font-medium mt-13`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

const CarCardList = () => {
  return (
    <ul className="flex flex-col text-white p-13 lg:flex-row">
      {car_card_list.map((item) => (
        <CarCardItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

function App() {
  return <CarCardList />;
}

export default App;
