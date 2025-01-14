function Card() {
  return (
    <div className="container px-40">
      <div className="header flex items-center gap-5">
        <h1 className="font-medium text-white drop-shadow-xl">
          Destinasi Favorit
        </h1>
        <div className="badge text-white bg-gray-800 flex items-center w-fit gap-1 py-2 px-4 rounded-full shadow-xl">
          <i className="ri-star-smile-line ri-xs"></i>
          <p className="text-xs">Best Experience</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
