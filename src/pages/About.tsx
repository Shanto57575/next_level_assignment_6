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
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-all duration-500">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Package className="text-white w-6 h-6" />
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                  Swift<span className="text-red-600">Drop</span>
                </h1>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Professional
                  <span className="text-red-600 block">Delivery Solutions</span>
                </h2>

                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Experience reliable, efficient logistics with our cutting-edge
                  delivery network designed for businesses of all sizes.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="group px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-red-600 dark:hover:border-red-600 transition-all duration-300">
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
                    className="text-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700"
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
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://i.pinimg.com/736x/dd/32/42/dd3242f752532dc893c3ad89ae57498a.jpg"
                  alt="Professional delivery service"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-full">
                  <span className="text-red-600 dark:text-red-400 font-medium text-sm">
                    Our Network
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Advanced Delivery
                  <span className="text-red-600 block">Network</span>
                </h3>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our intelligent logistics ecosystem uses AI-powered routing and
                real-time optimization for fast, accurate deliveries.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: "Real-time Tracking",
                    description:
                      "GPS monitoring with live updates and accurate delivery estimates",
                  },
                  {
                    icon: Truck,
                    title: "Flexible Options",
                    description:
                      "Same-day, next-day, and scheduled delivery services",
                  },
                  {
                    icon: Shield,
                    title: "Secure Handling",
                    description:
                      "End-to-end protection with insurance coverage",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
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
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://i.pinimg.com/736x/27/14/c3/2714c35852082a0f8d31fdc755c88d80.jpg"
                  alt="Advanced delivery truck"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://i.pinimg.com/736x/6c/4d/77/6c4d77bed67ca71c837db75b495fec58.jpg"
                  alt="Smart package management system"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                  <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                    Technology
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Smart Package
                  <span className="text-blue-600 block">Management</span>
                </h3>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                AI-powered systems and machine learning algorithms optimize
                package handling, routing, and delivery scheduling.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Secure",
                    description: "Advanced security protocols",
                    color: "green",
                  },
                  {
                    icon: Zap,
                    title: "Fast",
                    description: "Optimized delivery routes",
                    color: "yellow",
                  },
                  {
                    icon: Globe,
                    title: "Global",
                    description: "Worldwide network",
                    color: "blue",
                  },
                  {
                    icon: Award,
                    title: "Premium",
                    description: "Award-winning service",
                    color: "purple",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div
                      className={`w-12 h-12 ${
                        item.color === "green"
                          ? "bg-green-100 dark:bg-green-900/30"
                          : item.color === "yellow"
                          ? "bg-yellow-100 dark:bg-yellow-900/30"
                          : item.color === "blue"
                          ? "bg-blue-100 dark:bg-blue-900/30"
                          : "bg-purple-100 dark:bg-purple-900/30"
                      } rounded-lg flex items-center justify-center mb-4`}
                    >
                      <item.icon
                        className={`${
                          item.color === "green"
                            ? "text-green-600 dark:text-green-400"
                            : item.color === "yellow"
                            ? "text-yellow-600 dark:text-yellow-400"
                            : item.color === "blue"
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-purple-600 dark:text-purple-400"
                        } w-6 h-6`}
                      />
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
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-full">
              <span className="text-red-600 dark:text-red-400 font-medium text-sm">
                Customer Focus
              </span>
            </div>
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white">
              Trusted by <span className="text-red-600">Businesses</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From startups to Fortune 500 companies, SwiftDrop delivers
              reliable logistics solutions worldwide.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://t3.ftcdn.net/jpg/03/14/24/92/240_F_314249282_gkhyrsFR5ODot1VDtEPlbrnXySA2DIsj.jpg"
                alt="Customer service team"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                    <Users className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold">
                    24/7 Support Team
                  </h4>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-4">
                  Our dedicated specialists provide personalized assistance
                  around the clock.
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
      </section>

      {/* Mission Statement */}
      <section className="py-20 lg:py-32 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-red-900/30 rounded-full border border-red-500/30">
                <span className="text-red-400 font-medium text-sm">
                  Our Mission
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
                Connecting <span className="text-red-400">Communities</span>
              </h3>
            </div>

            <blockquote className="text-xl lg:text-2xl leading-relaxed font-light italic bg-white/5 backdrop-blur-sm p-8 lg:p-12 rounded-2xl border border-white/10">
              "To revolutionize global logistics through innovative technology,
              sustainable practices, and exceptional service that connects
              communities and empowers businesses worldwide."
            </blockquote>

            <div className="pt-8">
              <div className="inline-flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Users className="text-white w-6 h-6" />
                </div>
                <span className="text-lg font-medium">
                  Connecting communities, one delivery at a time.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
