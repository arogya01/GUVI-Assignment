

export default function HousesCard(props) {
  const { name, region,coatOfFarms, words,founded,founder} =
    props.data;

  return (
    <div className="shadow-xl hover:shadow-2xl bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 flex flex-col p-4 border-2 rounded-lg">
      <p className="font-bold font-2xl">Name : {name}</p>
      <p className="">
        coatOfFarms:
        {coatOfFarms?.map((el) => {
          return <span key={el}>{el}</span>;
        })}
      </p>
      <p className="">region : {region}</p>
      <p className="">words : {words}</p>
      <p className="">founded : {founded}</p>
      <p className="overflow-hidden">founder : {founder}</p>
    </div>
  );
}
