import { GraduationCap } from "lucide-react";


export default function Details({ backgroundImage = "" }) {
  return (
    <section
      className="relative min-h-[400px] overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "linear-gradient(to bottom right, #00b5d6, #0361c8)", // Default gradient if no backgroundImage
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Decorative curved shape */}
      <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/4 translate-y-1/4">
        <div className="h-full w-full rounded-full bg-white/10" />
      </div>

      {/* Content container */}
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Icon */}
          <div className="mb-6">
            <GraduationCap className="h-12 w-12 text-white/90" />
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            About Us
          </h1>

          {/* Description */}
          <p className="text-xl text-white/90">
            We are Pune&apos;s finest and practical-oriented IT Training Institute.
          </p>

          {/* Additional content */}
          <div className="mt-8 flex gap-4">
            <div className="rounded-lg bg-white/10 px-6 py-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-white/80">Students Trained</p>
            </div>
            <div className="rounded-lg bg-white/10 px-6 py-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-sm text-white/80">Courses Offered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]" />
      </div>
    </section>
  );
}
