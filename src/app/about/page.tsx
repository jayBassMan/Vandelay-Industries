import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Page() {
  return (
    <>
      <main>
        <Navbar />

        <div
          style={{
            zIndex: -1,
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Image
            src="/chris-mok-cr-mok-prXwCmJolGA-unsplash.jpg"
            alt="bla bla bla"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="text-slate-700 dark:text-slate-500 pt-6 md:p-8 text-center">
          <h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ab
              iste pariatur ipsum necessitatibus ipsa in nobis dignissimos ad
              voluptatem deleniti totam autem cum dolorum qui voluptas, dicta
              dolorem quae!
            </p>
          </h1>
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left dark:text-slate-500">
          <a
            href="https://youtu.be/Ugx06TlVyw4"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Vandelay Industries{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Vandelay Industries.
            </p>
          </a>

          <a
            href="https://www.reddit.com/r/seinfeldtrivia/comments/2oies9/what_does_art_vandelay_importexport_according_to/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn more about Vandelay Industries!
            </p>
          </a>

          <a
            href="https://www.forbes.com/sites/emilsayegh/2021/10/20/vandelay-industries--on-seinfeld-and-privacy/?sh=5b3f65937027"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
            Our Core Values{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Over the years, we’ve continued to uphold the same business ethics in everything we do..
            </p>
          </a>

          <a
            href="https://safetyculture.com/topics/lockout-tagout/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
            Safety First{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Nothing is more important than safety. Our craft-led safety programs and commitment at all levels of our operations ensure our focus is on what matters most.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
