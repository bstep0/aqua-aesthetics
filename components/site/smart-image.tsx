import Image, { type ImageProps } from "next/image"
import { IMAGE_BLUR } from "@/lib/image-blur"

/** next/image with an automatic blurred placeholder for photos in /public/images. */
export default function SmartImage(props: ImageProps) {
  const blur = typeof props.src === "string" ? IMAGE_BLUR[props.src] : undefined
  return <Image {...props} {...(blur ? { placeholder: "blur" as const, blurDataURL: blur } : {})} />
}
