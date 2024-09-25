import Head from "next/head";
import Homepage from "@/components/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Karl-Christian Oelker</title>
        <meta name="description" content="Website von Karl-Christian Oelker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Etwas
          Romantik, etwas Sehnsucht und immer wieder ein Nachdenken über den
          eigenen Weg zum Glück und zur Selbsterkenntnis."
        />
        <meta
          name="description"
          content="Lebenslinien, Klopfzeichen, Homos Technicus, Nachkommen"
        />
      </Head>
      <Homepage />
    </>
  );
}
