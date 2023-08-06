import Link from "next/link";
import { BiSolidHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsTwitter, BsThreeDots } from "react-icons/bs";
import { HiOutlineEnvelope, HiOutlineHashtag } from "react-icons/hi2";

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiSolidHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Messages",
    icon: HiOutlineEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

const LeftSidebar = () => {
  return (
    <section className="fixed w-[275px] flex flex-col items-stretch h-screen">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
            href={`/${item.title.toLowerCase()}`}
            key={item.title}
          >
            <div>
              <item.icon />
            </div>
            {item.title !== "Twitter" && <div>{item.title}</div>}
          </Link>
        ))}
        <button className="w-full rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
          Tweet
        </button>
      </div>
      <button className="rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/20 transition duration-200 w-full justify-between">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-10 h-10"></div>
          <div className="text-left text-sm">
            <div className="font-semibold">Club of Coders</div>
            <div className="">@clubofcoderscom</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSidebar;
