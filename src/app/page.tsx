import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h3 className="text-7xl flex justify-center">Imaginarium</h3>
      <nav className="flex justify-center space-x-4 text-4xl">
        <Link href={"/movies"}>Movies</Link>
        <Link href={"/tv"}>Tv shows</Link>
      </nav>
      <VideoComponent />
    </div>
  );
}
export function VideoComponent() {
  return (
    <div className="flex justify-center">
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <video width="600" height="400" controls>
            <source src={"/movie.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div style={{ marginRight: "20px" }}>
          <video width="600" height="400" controls>
            <source src={"/movie2.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <video width="600" height="400" controls>
            <source src={"/movie3.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
