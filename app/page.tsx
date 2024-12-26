import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="w-full py-6 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <Image src={'/logo.svg'} alt='logo' width={120} height={100} />
          <div className="text-2xl font-bold text-gray-800">LocallyYours AI</div>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-24 pb-10 bg-white">
        <div className="max-w-[85rem] mx-auto">
    
          <div className="mt-5 max-w-2xl mx-auto text-center">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              LocallyYours AI 
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"> Generator</span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <Link href='/dashboard'><Button className="p-6 text-xl from-violet-600 to-blue-600 borrder rounded-lg">Get Started</Button></Link>
          </div>
        </div>
      </main>

      <section id="features" className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Features</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
              <div className="bg-blue-600 text-white p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 10h11M3 6h18M3 14h18M3 18h11" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Easy to Use</h3>
              <p className="mt-4 text-gray-600 text-center">
                Our intuitive interface makes it easy to generate content quickly.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
              <div className="bg-purple-400 text-white p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 8v8m4-4H8" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">High Quality</h3>
              <p className="mt-4 text-gray-600 text-center">
                Generate high-quality content that engages your audience.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
              <div className="bg-blue-300 text-white p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 4.354a4 4 0 100 15.292 4 4 0 100-15.292z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Customizable</h3>
              <p className="mt-4 text-gray-600 text-center">
                Tailor the content to your specific needs with our customization options.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
              <div className="bg-purple-500 text-white p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 12H4" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">24/7 Support</h3>
              <p className="mt-4 text-gray-600 text-center">
                Get support anytime, day or night, from our dedicated team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-6 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; 2024 AI Content Generator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
