import { useGetShoesQuery } from '../../services/apiCallShoes';

const ShoesList = () => {
  const { data: shoes, isLoading, isError } = useGetShoesQuery();
  console.log('tnh', shoes);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }
  return (
    <div>
      {shoes?.map((shoe) => (
        <div key={shoe.id}>{shoe.title}</div>
      ))}
    </div>
  );
};

export default ShoesList;
