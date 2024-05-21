import React from "react";
import { volumes } from "../../data/data.js";
import { introduction } from "../../data/data.js";
import Head from "next/head";
import Link from "next/link";

export default function AllVolumes() {
  return (
    <>
      <Head>
        <title>Lord of the Rings</title>
      </Head>
      <main>
        <h1>Lord of the Rings</h1>
        <p>{introduction}</p>
        <h2>All volumes</h2>

        <section>
          <ul>
            {volumes.map((volume, index) => {
              return (
                <>
                  <li>
                    <Link
                      key={index}
                      href={`/pages/volumes/${volume.slug.toLowerCase()}`}
                    >
                      <text>{volume.title}</text>
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
