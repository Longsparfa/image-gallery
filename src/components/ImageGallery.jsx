import { signOut } from "firebase/auth";
import { useRef, useState } from "react";
import { auth } from "../firebase/config";
import { Draggable } from "react-drag-reorder";

const ImageGallery = () => {
  const [images, setImages] = useState([
    {
      photo_by: "Parfa Longs",
      tag: "Avee",
      image: "/images/Im1.png",
      id: "1",
    },
    {
      photo_by: "Jemcit Longs",
      tag: "new",
      image: "/images/Im2.png",
      id: "2",
    },
    {
      photo_by: "Jemcit Longs",
      tag: "pro",
      image: "/images/Im3.png",
      id: "3",
    },
    {
      photo_by: "Mantim Longs",
      tag: "new",
      image: "/images/Im4.png",
      id: "4",
    },
    {
      photo_by: "Parfa Longs",
      tag: "pro",
      image: "/images/Im5.png",
      id: "5",
    },
    {
      photo_by: "Mantim Longs",
      tag: "free",
      image: "/images/Im32.png",
      id: "6",
    },
    {
      photo_by: "Mantim Longs",
      tag: "free",
      image: "/images/Im33.png",
      id: "7",
    },
    {
      photo_by: "Mantim Longs",
      tag: "Zoom",
      image: "/images/Im40.png",
      id: "8",
    },
    {
      photo_by: "Mantim Longs",
      tag: "bee",
      image: "/images/Im9.png",
      id: "9",
    },
    {
      photo_by: "Mantim Longs",
      tag: "meat",
      image: "/images/Im10.png",
      id: "10",
    },
    {
      photo_by: "Mantim Longs",
      tag: "free",
      image: "/images/Im11.png",
      id: "11",
    },
    {
      photo_by: "Mantim Longs",
      tag: "free",
      image: "/images/Im12.png",
      id: "12",
    },
    {
      photo_by: "Mantim Longs",
      tag: "free",
      image: "/images/Im31.png",
      id: "13",
    },
    {
      photo_by: "Mantim Longs",
      tag: "view",
      image: "/images/Im24.png",
      id: "14",
    },
    {
      photo_by: "Mantim Longs",
      tag: "monk",
      image: "/images/Im23.png",
      id: "15",
    },
    {
      photo_by: "Mantim Longs",
      tag: "pray",
      image: "/images/Im22.png",
      id: "16",
    },
    {
      photo_by: "Mantim Longs",
      tag: "people",
      image: "/images/Im17.png",
      id: "17",
    },
    {
      photo_by: "Mantim Longs",
      tag: "nature",
      image: "/images/Im18.png",
      id: "18",
    },
    {
      photo_by: "Mantim Longs",
      tag: "music",
      image: "/images/Im21.png",
      id: "19",
    },
    {
      photo_by: "Mantim Longs",
      tag: "video",
      image: "/images/Im20.png",
      id: "20",
    },
  ]);
  const [search, setSearch] = useState("");

  // const dragItem = useRef(null);
  // const dragOverItem = useRef(null);

  // //handle drag sorting
  // const sortImage = () => {
  //   //duplicate items
  //   let _images = [...images];

  //   //remove and save the dragged item
  //   const draggedItemContent = _images.splice(dragItem, 1)[0];

  //   //switch the positon
  //   _images.splice(dragOverItem.current, 0, draggedItemContent);

  //   //reset the position ref
  //   dragItem.current = null;
  //   dragOverItem.current = null;

  //   setImages(_images);
  // };

  const logoutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  const navbar = (
    <div className="bg-[#0f1624] flex justify-center items-center p-6 lg:p-10 ">
      <div className="text-white flex-1 ">
        <span>i</span>Gallery
      </div>
      <button
        type="submit"
        className="bg-[#0f1624] text-white p-2 rounded-[5px]"
        onClick={logoutUser}
      >
        Logout
      </button>
      <div className="ml-4">
        <input
          type="text"
          placeholder="Search based on the tags"
          className="text-sm h-8 px-4 rounded-[5px]"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="ml-4">
        <img
          src="/favicon.ico"
          alt=""
          className="rounded-full h-5 w-5 md:h-8 md:w-8 "
        />
      </div>
    </div>
  );

  return (
    <>
      {navbar}
      <section className="grid sm:grid-cols-2 md:grid-cols-3 place-items-center ">
        <Draggable>
        {images
          .filter((image) => {
            return search.toLowerCase() === ""
              ? image
              : image.tag.toLowerCase().includes(search.toLowerCase());
          })
          .map((image, index) => {
            return (
              <div
                className="rounded-[10px] shadow-lg m-4 bg-white cursor-move "
                key={index}
                // draggable
                // onDragStart={(e) => (dragItem.current = index)}
                // onDragEnter={(e) => (dragOverItem.current = index)}
                // onDragEnd={sortImage}
                // onDragOver={(e) => e.preventDefault()}
              >
                <img
                  src={image.image}
                  alt={image.photo_by}
                  className="w-[20rem] lg:w-[40rem] h-[20rem] md:h-[30rem] object-cover overflow-hidden"
                />
                <div className="flex justify-center p-2">
                  <p className="text-sm">
                    <span className="md:text-xl">#</span>
                    {image.tag}
                  </p>
                </div>
              </div>
            );
          })}
          </Draggable>
      </section>
    </>
  );
};

export default ImageGallery;
