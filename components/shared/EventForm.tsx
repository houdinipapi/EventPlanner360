"use client"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { EventFormSchema } from "@/lib/validator"
import * as z from "zod"
import { eventDefaultValues } from "@/constants"



type EventFormProps = {
  userId: string
  type: "Create" | "Update"
}

const EventForm = ({ userId, type }: EventFormProps) => {

  const initialValues = {
    ...eventDefaultValues,
    isFree: false, // Set the initial value of isFree to false
  };

  const form = useForm<z.infer<typeof EventFormSchema>>({
    resolver: zodResolver(EventFormSchema),
    defaultValues: initialValues
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof EventFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-4 gap-5">

        <div className="flex flex-col gap-5 md:flex-row">
           <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Event Title" {...field} className="input-field" />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default EventForm