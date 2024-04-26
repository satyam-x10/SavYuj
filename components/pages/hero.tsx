import Link from "next/link";
import data from "@/lib/data.json";
import Image from "next/image";
export function Hero() {
  const welcomeMessage =
    "Welcome to Ur Organization. Connect with your peers, share your knowledge, and grow together. Let's get started!";
  const collegeImg =
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/Morgan_Hall_of_Williams_College_in_the_fall_%2827_October_2010%29.jpg";
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
              Connect With Ur Peers from{" "}
              {data.organisation.name || " Ur Organization"}
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-6">
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {data.organisation.Bio || welcomeMessage}
            </p>
            <div className="space-x-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/savyuj/groups"
              >
                Get Started
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-6 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                target="none"
                href={data.organisation.website || "#"}
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
        <div className="p-auto flex items-center justify-center">
          <Image
            className="rounded-2xl"
            src={data.organisation.CollegeIMG || collegeImg}
            width={800}
            height={800}
            alt="orgLogo"
          />
        </div>
      </div>
    </section>
  );
}
