import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Package,
  Truck,
  Shield,
  Headphones,
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    toast.success("Message sent successfully!", {
      description: (
        <div className="w-full mx-auto text-center">
          <p>Thank you for contacting SwiftDrop.</p>
          <p>We'll get back to you within 24 hours,</p>
        </div>
      ),
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "",
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Logistics Avenue, Commerce City, NY 10001",
      color: "text-red-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-SWIFT",
      color: "text-red-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "support@swiftdrop.com",
      color: "text-red-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-5PM",
      color: "text-red-600",
    },
  ];

  const services = [
    {
      icon: Package,
      title: "Package Tracking",
      description: "Real-time tracking for all your deliveries",
    },
    {
      icon: Truck,
      title: "Express Delivery",
      description: "Same-day and next-day delivery options",
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Your packages are safe with our secure system",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer service",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 dark:from-black dark:to-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about your delivery? Need assistance with tracking?
            Our team is here to help you 24/7.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="dark:bg-zinc-950 hover:shadow-lg dark:hover:shadow shadow-red-600 transition-all duration-300 border-0 shadow-md"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4`}
                >
                  <info.icon className={`w-6 h-6 ${info.color}`} />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-sm">{info.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 dark:bg-zinc-950">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className="h-11"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className="h-11"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="h-11"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("inquiryType", value)
                      }
                    >
                      <SelectTrigger className="h-11 w-full">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tracking">
                          Package Tracking
                        </SelectItem>
                        <SelectItem value="delivery">
                          Delivery Issues
                        </SelectItem>
                        <SelectItem value="billing">
                          Billing Questions
                        </SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your inquiry"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="cursor-pointer w-full h-12 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-700 hover:to-red-800 text-white font-medium transition-all duration-200"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-xl border-0 dark:bg-zinc-950">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Our Services
                </CardTitle>
                <CardDescription>
                  Discover what makes SwiftDrop the best choice for your
                  delivery needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-red-100 dark:bg-transparent hover:shadow hover:shadow-red-500 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <service.icon className="w-6 h-6 text-red-600 mt-1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{service.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400  mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="shadow-xl border-0 bg-gradient-to-tr from-red-400 to-red-600 text-white">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-3 text-white" />
                <h3 className="font-bold text-lg mb-2">Need Immediate Help?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Call our 24/7 support hotline for urgent delivery assistance.
                </p>
                <Button
                  variant="secondary"
                  className="w-full bg-white text-red-600 hover:bg-blue-50"
                  onClick={() =>
                    toast.info("Calling support...", {
                      description: "Redirecting to phone dialer",
                    })
                  }
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
