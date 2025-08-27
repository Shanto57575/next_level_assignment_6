import { Button } from "@/components/ui/button";
import { AlertTriangle, Home } from "lucide-react";
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-600">Maybe, You hit the wrong route</p>
        </div>
        <Link to="/">
          <Button className="cursor-pointer">
            <Home />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
