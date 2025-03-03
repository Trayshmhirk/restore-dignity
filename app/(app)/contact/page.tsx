"use client";

import React from "react";
import Button from "@/components/common/Button";
import Image from "next/image";
import { Clock, MapPinHouse, Phone } from "lucide-react";

function Card({
  title,
  value,
  valuebottom,
  icon: Icon,
}: {
  title: string;
  value: string;
  valuebottom?: string;
  icon: React.ElementType;
}) {
  return (
    <div className="border border-dark_primary rounded-lg p-6 flex smd:flex-col slg:flex-row gap-5 items-start flex-1 shadow-md bg-white">
      <div className="bg-green-600 text-white rounded-lg flex justify-center items-center w-16 h-16 flex-shrink-0">
        <Icon className="size-8" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-gray-800">{title}</p>
        <div className="text-sm text-gray-600">
          <p>{value}</p>
          {valuebottom && <p>{valuebottom}</p>}
        </div>
      </div>
    </div>
  );
}

const Contact = () => {
  return (
    <>
      {/* Page Header */}
      <div className="slg:pt-16 py-10 text-center">
        <h1 className="text-4xl font-bold text-dark_primary">Contact Us</h1>
      </div>

      <section className="max-w-[1300px] m-auto grid smd:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-9 slg:px-12 lg:px-[74px] py-10 md:py-16 md:pt-10">
        <Card
          title="Contact"
          value="Mobile: (+1) (444) 123-4567"
          valuebottom="E-mail: Hello@restorepolicy.com"
          icon={Phone}
        />
        <Card
          title="Address"
          value="Lorem ipsum dolor sit amet, consectetur elit."
          icon={MapPinHouse}
        />
        <Card
          title="Hours of Operation"
          value="Open 24 hours Everyday"
          icon={Clock}
        />
      </section>

      <section className="max-w-[1300px] m-auto flex flex-col gap-10 px-5 md:px-9 slg:px-12 lg:px-[74px] py-20 pt-14">
        <div className="px-5 space-y-3">
          <h2 className="text-center text-dark_primary tracking-[2px] font-bold">
            FEEDBACK & SUGGESTIONS
          </h2>
          <h3 className="text-center font-semibold text-[#212529] text-[30px]">
            We’d Love to Hear From You
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 md:gap-10 xl:gap-20 lg:flex-row">
          <Image
            src={"/img/contact-image.png"}
            alt="email"
            className="w-full smd:max-w-[450px] lg:max-w-[400px] xl:max-w-[500px] object-cover"
            width={500}
            height={450}
          />
          <form action="">
            <div className="flex flex-col gap-6 mb-[15px] smd:flex-row smd:gap-[15px]">
              <input
                type="text"
                name="name"
                placeholder="Name.."
                className="border border-[#39393933] px-[25px] py-[13px] rounded-[15px] flex-1 outline-dark_primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Email.."
                className="border border-[#39393933] px-[25px] py-[13px] rounded-[15px] flex-1 outline-dark_primary"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject.."
              className="border border-[#39393933] px-[25px] py-[13px] rounded-[15px] mb-[15px] w-full outline-dark_primary"
            />
            <textarea
              name="message"
              className="border border-[#39393933] px-[25px] py-[13px] rounded-[15px] mb-[15px] w-full h-[118px] outline-dark_primary"
              placeholder="Message..."
            />
            <Button className="text-white p-[14px] text-sm rounded-full w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <section className="bg-[#EEF8F2]">
        <div className="max-w-[1300px] m-auto px-5 md:px-9 slg:px-12 lg:px-[74px] py-10 text-center">
          <h2 className="text-dark_primary font-bold text-lg">
            Follow Us on Social Media
          </h2>
          <div className="flex justify-center gap-6 mt-5">
            <a href="#">
              <Image
                src={"/img/facebook.png"}
                alt="email"
                className="rounded-full shadow-lg object-cover"
                width={50}
                height={50}
              />
            </a>
            <a href="#">
              <Image
                src={"/img/insta.png"}
                alt="email"
                className="rounded-full shadow-lg object-cover"
                width={50}
                height={50}
              />
            </a>
            <a href="#">
              <Image
                src={"/img/x.png"}
                alt="email"
                className="rounded-full shadow-lg object-cover"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
