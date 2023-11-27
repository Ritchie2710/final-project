import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Hobbies",
  description: "My Hobbies",
};

type hobbiesSearchQuery = {
  sortBy: string;
};

type hobbiesType = {
  Type: string;
  id: number;
  source: string;
};

let hobbies: hobbiesType[] = [
  {
    Type: "Xbox",
    id: 1,
    source: "/images/xbox.jpg",
  },
  {
    Type: "Lego",
    id: 2,
    source: "/images/lego.jpg",
  },
  {
    Type: "Photography",
    id: 3,
    source: "/images/photo1.jpg",
  },
  {
    Type: "History",
    id: 4,
    source: "/images/history1.jpg",
  },
  {
    Type: "Crazy golf",
    id: 5,
    source: "/images/mini-golf.jpg",
  },
];

function compareHobbies(a: hobbiesType, b: hobbiesType) {
  if (a.Type < b.Type) {
    return -1;
  } else if (a.Type > b.Type) {
    return 1;
  } else {
    return 0;
  }
}
export default function Page({
  searchParams,
}: {
  searchParams: hobbiesSearchQuery;
}) {
  let sortedHobbies = [...hobbies];

  if (searchParams.sortBy == "asc") {
    sortedHobbies.sort(compareHobbies);
  } else if (searchParams.sortBy == "desc") {
    hobbies.sort(compareHobbies).reverse();
  }
  return (
    <div>
      <Link href="/">About me</Link>
      <h4>My Hobbies </h4>
      <p>
        i like to get out looking at historical sights and just enjoying
        walking, play a little xbox. But my big passion is Lego it relaxes me
        and i enjoy the end product. i have over 400 sets of lego from all years
        and sets.
      </p>

      <br />
      <Link href="/hobbies">remove the sort</Link>
      <br />
      <Link href="/hobbies?sortBy=asc">Sort by ascending </Link>
      <br />
      <Link href="/hobbies?sortBy=desc">Sort by ascending </Link>
      <br />
      <br />
      <br />
      {sortedHobbies.map((hobbie) => {
        return (
          <div key={hobbie.id}>
            <br />
            <Link href={`/hobbies/${hobbie.Type.toLowerCase()}`}>
              {hobbie.Type}
              <img
                className="w-24 h-20 md:w-40 md:h-auto md:rounded-xl rounded-full "
                src={hobbie.source}
                alt=""
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
