import AdminArea from "./AdminArea";

const TvShows = function () {
  return (
    <>
      <h1 className="text-center text-white">Tv Shows</h1>
      <AdminArea saga="Simpson" />
    </>
  );
};

export default TvShows;