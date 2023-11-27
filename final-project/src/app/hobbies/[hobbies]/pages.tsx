type hobbieParam = { params: { hobbie: string } };
import Link from "next/link";

export function generateMetadata({ params }: hobbieParam) {
  const modTitle = params.hobbie[0].toUpperCase() + params.hobbie.slice(1);
  return {
    title: `My Hobbies - ${modTitle}`,
    description: "Hobbies"[0],
  };
}

export default function page({ params }: hobbieParam) {
  return (
    <div>
      <h2>this is a dynamoic route</h2>
      <Link href="/hobbies">{`<-- Go back`}</Link>
    </div>
  );
}
