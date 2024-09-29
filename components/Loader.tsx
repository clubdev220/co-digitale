import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Image
        src="/icons/loading-circle.svg"
        width={50}
        height={50}
        alt="Loading"
        color="#FFF"
      />
    </div>
  );
};

export default Loader;
