import * as z from "zod"



export const EventFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters").max(500, "Description must be at most 500 characters"),
  location: z.string().min(5, "Location must be at least 5 characters").max(500, "Location must be at most 500 characters"),
  imageUrl: z.string().url("Image URL must be a valid URL"),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url("URL must be a valid URL"),
})