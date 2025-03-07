"use client"

import Image from "next/image"
import FormInput from "./auth/FormInput"
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addToWaitlist } from "@/app/actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const waitlistSchema = z.object({
  email: z.string().email("Please enter your email address")
})

type WaitlistFormInputs = z.infer<typeof waitlistSchema>

export default function Hero() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<WaitlistFormInputs>({
    resolver: zodResolver(waitlistSchema)
  });

  const onSubmit = async (data: WaitlistFormInputs) => {
    const response = await addToWaitlist(data.email)

    if (response.error) {
      return
    }

    reset()
    toast.success("Added to waitlist!")
  }

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
              Elevate Your Golf Game
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black">
              Master Your Swing, <span className="text-emerald-600">Perfect Your Game</span>
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              Get personalized swing analysis, expert tips, and stay updated with the latest golf news. Your journey to
              becoming a better golfer starts here.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-1 w-full md:w-2/3">
              {/* Wrapping the input and button so that the button can be positioned
              absolutely */}
              <div className="relative">
                <FormInput
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  {...register("email")}
                  error={errors.email?.message}
                  // Add extra right padding so the text doesn't go underneath the button
                />
                <button
                  type="submit"
                  className="absolute top-1/2 right-0 transform -translate-y-5.5 rounded-full bg-emerald-600 py-3 px-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Join the Waitlist
                </button>
              </div>
            </form>
            
          </div>
          <div className="relative mx-auto lg:ml-auto">
            <div className="relative aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Golfer using the app"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-emerald-600 p-2 shadow-lg">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">30%</div>
                  <div className="text-xs text-black font-semibold">Improve</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}