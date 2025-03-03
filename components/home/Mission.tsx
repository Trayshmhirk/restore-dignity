import React from "react";
import {
  Heart,
  HandHelping,
  BookOpen,
  Briefcase,
  Home,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Mission = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1300px] m-auto px-5 md:px-9 slg:px-12 lg:px-[74px] py-20">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          {/* Mission Statement Side */}
          <div className="flex flex-col space-y-6 md:w-1/2">
            <h3 className="text-dark_primary font-bold tracking-[2px] uppercase">
              Our Mission
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Creating Pathways to Recovery and Reintegration
            </h2>

            <p className="text-[#393939] leading-relaxed">
              We are dedicated to providing a safe and supportive environment
              that fosters recovery, rehabilitation, and reintegration for
              individuals overcoming challenges. Through compassionate care and
              personalized support, we empower our clients to rebuild their
              lives and achieve sustainable change.
            </p>

            <Separator className="bg-green-200 h-[2px] my-4" />

            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <Heart className="stroke-[#2b7a33] h-5 w-5" />
                <p className="font-medium">
                  Compassionate, evidence-based services
                </p>
              </div>
              <div className="flex items-center gap-3">
                <HandHelping className="stroke-[#2b7a33] h-5 w-5" />
                <p className="font-medium">
                  Personalized treatment and support
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Users className="stroke-[#2b7a33] h-5 w-5" />
                <p className="font-medium">Community safety and well-being</p>
              </div>
            </div>
          </div>

          {/* Key Focus Areas */}
          <div className="md:w-1/2">
            <h3 className="text-dark_primary font-bold mb-6 tracking-[2px] uppercase md:text-right">
              Our Approach
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-[#EEF8F2] border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-3">
                    <Home className="stroke-[#2b7a33] h-8 w-8 mb-2" />
                    <h4 className="font-semibold text-lg">Safe Environment</h4>
                    <p className="text-sm text-[#393939]">
                      Creating secure spaces for healing and sustainable
                      recovery
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#EEF8F2] border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-3">
                    <Briefcase className="stroke-[#2b7a33] h-8 w-8 mb-2" />
                    <h4 className="font-semibold text-lg">Holistic Support</h4>
                    <p className="text-sm text-[#393939]">
                      Addressing physical, emotional, and social aspects of
                      recovery
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#EEF8F2] border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-3">
                    <Users className="stroke-[#2b7a33] h-8 w-8 mb-2" />
                    <h4 className="font-semibold text-lg">Empowerment</h4>
                    <p className="text-sm text-[#393939]">
                      Helping clients rebuild their lives and achieve lasting
                      change
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#EEF8F2] border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-3">
                    <BookOpen className="stroke-[#2b7a33] h-8 w-8 mb-2" />
                    <h4 className="font-semibold text-lg">Brighter Future</h4>
                    <p className="text-sm text-[#393939]">
                      Creating pathways to fulfilling futures for every
                      individual
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
