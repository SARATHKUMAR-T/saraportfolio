/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
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
    y: 500,
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
  const isInView = useInView(ref, { margin: "-100px" });
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
      className="h-screen pt-12 max-w-6xl mx-auto flex items-center justify-center gap-[50px]"
    >
      <motion.div
        variants={variants}
        className="flex-1 flex flex-col gap-[40px]"
      >
        <motion.h1 variants={variants} className="text-[100px] font-semibold">
          Let's Talk
        </motion.h1>
        <motion.div variants={variants}>
          <h2 className="font-semibold">mail</h2>
          <span className="text-sm text-muted-foreground">mail@.com</span>
        </motion.div>
        <motion.div variants={variants}>
          <h2>mail</h2>
          <span>mail@.com</span>
        </motion.div>
        <motion.div variants={variants}>
          <h2>mail</h2>
          <span>mail@.com</span>
        </motion.div>
      </motion.div>
      <div className="flex-1 relative">
        <motion.div
          className="absolute -z-10 flex items-center justify-center h-full w-full"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg fill="#facc15" width="250px" height="250px" viewBox="0 0 64 64">
            <motion.path
              initial={{ scale: 0 }}
              animate={isInView && { scale: 1 }}
              transition={{ duration: 1 }}
              d="M62.9891,2.5618c-0.0765-0.5779-0.6611-0.9805-1.2299-0.8401L7.4043,15.2065c-0.3535,0.0879-0.6318,0.3608-0.7256,0.7129     s0.0112,0.7275,0.2744,0.9795l13.9343,13.3583l-2.7649,17.1495c-0.1079,0.6712,0.4969,1.2576,1.1582,1.1445l18.0805-3.1324     l17.1832,9.6988c0.1523,0.0859,0.3218,0.1289,0.4917,0.1289c0.1523,0,0.3047-0.0347,0.4453-0.1045     c0.2969-0.1475,0.5015-0.4331,0.5459-0.7617l6.9639-51.5542C63.0031,2.7372,63.0007,2.6487,62.9891,2.5618z M9.647,16.7109     L56.8914,4.9902L22.2545,28.7978L9.647,16.7109z M36.9146,43.4663l-16.5942,2.875l2.4995-15.5054L58.8633,6.0615L36.9146,43.4663     z M54.2427,52.6504l-15.3231-8.6492l21.4231-36.509L54.2427,52.6504z"
            />

            <motion.path
              fillOpacity={0}
              initial={{ x: 20 }}
              animate={isInView && { x: 0, fillOpacity: 1 }}
              transition={{ duration: 1 }}
              d="M14.4438,51.6099l-4.6948,5.209c-0.3701,0.4102-0.3369,1.0425,0.0732,1.4121c0.1909,0.1724,0.4307,0.2573,0.6689,0.2573     c0.2734,0,0.5459-0.1113,0.7432-0.3306l4.6948-5.209c0.3701-0.4102,0.3369-1.0425-0.0732-1.4121     C15.4463,51.1675,14.8135,51.2002,14.4438,51.6099z"
            />

            <motion.path
              fillOpacity={0}
              initial={{ x: 20 }}
              animate={isInView && { x: 0, fillOpacity: 1 }}
              transition={{ duration: 1 }}
              d="M5.9478,29.0562l-4.6909,5.2085c-0.3696,0.4106-0.3364,1.043,0.0742,1.4126c0.1909,0.1719,0.4302,0.2568,0.6685,0.2568     c0.2739,0,0.5459-0.1113,0.7437-0.3311l4.6909-5.2085c0.3696-0.4106,0.3364-1.043-0.0742-1.4126     C6.9487,28.6128,6.3179,28.6455,5.9478,29.0562z"
            />

            <motion.path
              fillOpacity={0}
              initial={{ x: 20 }}
              animate={isInView && { x: 0, fillOpacity: 1 }}
              transition={{ duration: 1 }}
              d="M40.8164,55.4331l-4.6909,5.2051c-0.3701,0.4102-0.3369,1.0425,0.0732,1.4121c0.1909,0.1724,0.4307,0.2573,0.6689,0.2573     c0.2734,0,0.5459-0.1113,0.7432-0.3306l4.6909-5.2051c0.3701-0.4102,0.3369-1.0425-0.0732-1.4121     C41.8188,54.9907,41.186,55.0234,40.8164,55.4331z"
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
