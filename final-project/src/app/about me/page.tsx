type aboutmeParam = { params: { aboutme: string } };
import Link from "next/link";

export function generateMetadata({ params }: aboutmeParam) {
  const modTitle = params.aboutme[0].toUpperCase() + params.aboutme.slice(1);
  return {
    title: `About me - ${modTitle}`,
    description: "About me"[0],
  };
}

export default function page({ params }: aboutmeParam) {
  return (
    <div>
      <h2>this is a dynamoic route</h2>
      <Link href="/about me">{`<-- Go back`}</Link>
    </div>
  );
}
