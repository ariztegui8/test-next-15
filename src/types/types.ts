import { StaticImageData } from "next/image"

export type Card = {
    id: number,
    title: string,
    description: string,
    image: string | StaticImageData
}