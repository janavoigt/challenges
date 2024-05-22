import React from "react";
import { volumes } from "../../lib/data.js";
import { introduction } from "../../lib/data.js";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AllVolumes() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Lord of the Rings</title>
      </Head>
      <main>
        <h1>Lord of the Rings</h1>
        <p>{introduction}</p>
        <h2>All Volumes </h2>

        <section>
          <ul>
            {volumes.map((volume, index) => {
              return (
                <>
                  <li>
                    <Link
                      key={index}
                      href={`./volumes/${volume.slug.toLowerCase()}`}
                    >
                      {volume.title}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
