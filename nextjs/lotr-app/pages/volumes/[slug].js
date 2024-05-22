import { useRouter } from "next/router";
import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function VolumeDetail() {
  const router = useRouter();

  const { slug } = router.query;
  const foundVolume = volumes.find((volume) => volume.slug === slug);

  if (!foundVolume) {
    return <h1>Loading...</h1>;
  }

  const { title, description, books, cover } = foundVolume;

  return (
    <>
      <article>
        <h2>{title}</h2>
        <div>
          <p>{description}</p>
        </div>
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              {book.ordinal}: {book.title}
            </li>
          ))}
        </ul>
        <Image src={cover} alt={title} width={140} height={230} />
      </article>
      <Link href="/volumes">← Back to all Volumes</Link>
    </>
  );
}
