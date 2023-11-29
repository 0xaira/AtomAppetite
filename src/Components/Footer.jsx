const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4 text-center flex items-center justify-center gap-4">
      <div> Created By{" "}
      <i className="fas fa-heart text-red-500 mx-1"></i>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Aira Jena
      </a>
      <i className="fas fa-copyright mx-1"></i>2023</div>
     
      <strong>
        Atom<span className="text-yellow-500">Appeteite</span>
      </strong>
    </div>
  );
};

export default Footer;
