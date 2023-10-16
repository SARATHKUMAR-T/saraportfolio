/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  FileCheck,
  Linkedin,
  LinkedinIcon,
  Loader2,
  Mails,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

import {
  FormControl,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

const variants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isInView = useInView(ref, { margin: "-200px" });
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email({
      message: "Invalid email address.",
    }),
    message: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsLoading(true);
    const res = await fetch(`https://email-service-three.vercel.app/mail`, {
      method: "POST",
      body: JSON.stringify(values),
    });
    const result = await res.json();
    console.log(result);
    if (result.message === "Email sent successfully") {
      setIsLoading(false);
      form.reset();
      toast({
        title: result.message,
        variant: "default",
        description:
          "I appreciate your reaching out to me; your message is noted and valued!",
        duration: 5000,
      });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      setIsLoading(false);
      toast({
        title: result.message,
        description: "Try Again🚀",
        duration: 3000,
      });
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="initial"
      whileInView="animate"
      variants={variants}
      className="h-screen  max-w-6xl mx-auto flex-col sm:flex-row px-4 flex items-center justify-center gap-[50px]"
    >
      <motion.div
        variants={variants}
        className="flex-1 flex flex-col gap-[40px]"
      >
        <motion.h1
          variants={variants}
          className="text-6xl sm:text-8xl md:text-[100px] font-semibold"
        >
          Let's{" "}
          <span className="hover:text-yellow-400 duration-300 transition-all cursor-pointer hover:scale-105 ">
            Talk
          </span>
        </motion.h1>
        <motion.div
          variants={variants}
          className="flex gap-3 items-center  bg-slate-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 px-3 py-2 rounded-xl "
        >
          <Mails className="h-14 w-14 text-yellow-500" />
          <div>
            <h2 className="font-bold">Email</h2>
            <a
              className="text-blue-700"
              href="mailto:sarathkumartk98@gmail.com"
            >
              sarathkumartk98@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={variants}
          className="flex gap-3 items-center  bg-slate-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 px-3 py-2 rounded-xl "
        >
          <FileCheck className="h-14 w-14 text-yellow-500" />
          <div>
            <h2 className="font-bold">My Resume</h2>
            <a
              className="text-blue-700"
              href="https://drive.google.com/file/d/17Dey8mDvQDky9eIseSyPpm1Y933nZsCb/view"
              target="_blank"
              rel="noreferrer"
            >
              See My Resume
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          className="flex gap-3 items-center  bg-slate-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 px-3 py-2 rounded-xl "
        >
          <Linkedin className="h-14 w-14 text-yellow-500" />
          <div>
            <h2 className="font-bold">LinkedIn</h2>
            <a
              className="text-blue-700"
              href="https://www.linkedin.com/in/sarathfsd/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </motion.div>
      <div className="flex-1 relative">
        <motion.div
          className="absolute -z-10 flex items-center justify-center h-full w-full"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg width="200px" height="200px" viewBox="0 0 24 24" fill="none">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1, stroke: "#facc15" }}
              transition={{ duration: 1, delay: 1 }}
              d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
              stroke="#ffff"
              stroke-width="1.5"
              stroke-miterlimit="0"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1, stroke: "#facc15" }}
              transition={{ duration: 1, delay: 1 }}
              d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5"
              stroke-width="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1, stroke: "#facc15" }}
              transition={{ duration: 1, delay: 1 }}
              d="M22 9C22 5.13 18.87 2 15 2"
              stroke="#ffff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </motion.div>
        <Form {...form}>
          <motion.form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Jhon" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email</FormLabel>
                  <FormControl>
                    <Input placeholder="jhon@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Message</FormLabel>
                  <FormControl>
                    <Textarea rows={4} {...field} placeholder="Say Hello!" />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full disabled:cursor-wait "
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                  <span>Sending Message...</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </Button>
          </motion.form>
        </Form>
      </div>
    </motion.div>
  );
}
