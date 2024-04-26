import Link from "next/link"

export function Hero() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
              Connect With Ur Peers @IIT BBS
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-6">
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            "Welcome, College Student!

Ready to explore? Dive into all the amazing opportunities waiting for you here. From classes to clubs, the adventure starts now. Let's make your college experience unforgettable!"
            </p>
            <div className="space-x-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Get Started
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-6 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <img
          alt="Hero"
          className="mx-auto aspect-[2/1] overflow-hidden rounded-t-xl object-cover"
          height="400"
          src="/placeholder.svg"
          width="800"
        />
      </div>
    </section>
  )
}
