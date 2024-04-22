import Link from "next/link";

export default function Home() {
  return (
<div>
<Link href={"/page2"}>go to page 2</Link>;
<ul>
    <li>HomePage</li>
</ul>
</div>
);;
}
