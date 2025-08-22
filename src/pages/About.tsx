import {
  Package,
  Truck,
  Clock,
  Users,
  Shield,
  Zap,
  Globe,
  Award,
  ArrowRight,
  Star,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-tr from-red-50 to-red-100  dark:from-black dark:to-black">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Package className="text-white w-6 h-6" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Swift<span className="text-red-600">Drop</span>
                </h1>
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 text-sm font-medium rounded-full">
                  Professional Logistics
                </div>

                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Reliable Delivery
                  <span className="text-red-600 block">Solutions</span>
                </h2>

                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                  Enterprise-grade logistics services with real-time tracking
                  and guaranteed delivery times for businesses worldwide.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="group px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:border-red-600 dark:hover:border-red-600 font-semibold rounded-lg transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {[
                  { value: "500K+", label: "Deliveries", icon: Package },
                  { value: "99.2%", label: "On Time", icon: Clock },
                  { value: "25+", label: "Cities", icon: Globe },
                  { value: "24/7", label: "Support", icon: Users },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white dark:bg-black rounded-lg shadow shadow-red-500"
                  >
                    <stat.icon className="w-6 h-6 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://i.pinimg.com/736x/dd/32/42/dd3242f752532dc893c3ad89ae57498a.jpg"
                  alt="Professional delivery service"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-black">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 text-sm font-medium rounded-full">
                  Our Services
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Advanced Delivery
                  <span className="text-red-600 block">Network</span>
                </h3>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Smart logistics platform with AI-powered routing and real-time
                optimization for fast, reliable deliveries.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: "Real-time Tracking",
                    description:
                      "Live GPS monitoring with accurate delivery estimates and notifications",
                  },
                  {
                    icon: Truck,
                    title: "Flexible Delivery",
                    description:
                      "Same-day, next-day, and scheduled delivery options available",
                  },
                  {
                    icon: Shield,
                    title: "Secure Handling",
                    description:
                      "End-to-end security with full insurance coverage protection",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 rounded-lg hover:bg-red-50 dark:hover:hover:bg-black dark:hover:shadow dark:hover:shadow-red-600 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 bg-red-50 dark:bg-red-950 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-red-600 dark:text-red-400 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://i.pinimg.com/736x/27/14/c3/2714c35852082a0f8d31fdc755c88d80.jpg"
                  alt="Advanced delivery network"
                  className="w-full h-[600px] object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://i.pinimg.com/736x/6c/4d/77/6c4d77bed67ca71c837db75b495fec58.jpg"
                  alt="Smart package management"
                  className="w-full h-[600px] object-fill"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 text-sm font-medium rounded-full">
                  Technology
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Smart Package
                  <span className="text-red-600 block">Management</span>
                </h3>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                AI-powered systems optimize package handling, routing, and
                delivery scheduling for maximum efficiency.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Secure",
                    description: "Advanced security protocols",
                  },
                  {
                    icon: Zap,
                    title: "Fast",
                    description: "Optimized delivery routes",
                  },
                  {
                    icon: Globe,
                    title: "Global",
                    description: "Worldwide coverage",
                  },
                  {
                    icon: Award,
                    title: "Reliable",
                    description: "Industry-leading service",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-white dark:bg-black shadow shadow-red-500 hover:shadow-md duration-300"
                  >
                    <div className="w-12 h-12 bg-red-50 dark:bg-red-950 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="text-red-600 dark:text-red-400 w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-black">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-2 bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 text-sm font-medium rounded-full">
              Customer Success
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Trusted by <span className="text-red-600">Businesses</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From startups to Fortune 500 companies, SwiftDrop delivers
              reliable logistics solutions worldwide.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://i.pinimg.com/1200x/06/5f/f7/065ff7694d136e86c57dd2cf619c65e8.jpg"
                alt="Customer service team"
                className="w-full h-96 object-fill"
              />
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                      <Users className="text-white w-6 h-6" />
                    </div>
                    <h4 className="text-xl lg:text-2xl font-bold">
                      24/7 Support Team
                    </h4>
                  </div>
                  <p className="text-gray-200 mb-4">
                    Expert support available around the clock for all your
                    logistics needs.
                  </p>
                  <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="ml-2 font-medium">
                      4.9/5 Customer Rating
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 lg:py-32 dark:bg-zinc-950">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/30 text-red-400 text-sm font-medium rounded-full">
                Our Mission
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold">
                Connecting <span className="text-red-400">Communities</span>
              </h3>
            </div>

            <blockquote className="shadow-sm shadow-red-600 italic font-serif text-lg lg:text-xl leading-relaxed p-8 lg:p-12 rounded-lg border border-white/10">
              "To revolutionize global logistics through innovative technology,
              sustainable practices, and exceptional service that connects
              communities and empowers businesses worldwide."
            </blockquote>

            <div className="pt-8">
              <div className="inline-flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Package className="text-white w-6 h-6" />
                </div>
                <span className="text-lg font-medium">
                  Delivering excellence, connecting the world.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
