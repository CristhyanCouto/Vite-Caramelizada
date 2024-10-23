import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";

type PictureCarouselProps = {
  pictures: string[]; // Array of image URLs
};

export default function PictureCarousel(props: PictureCarouselProps) {
  return (
    <div className="">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[60%] mx-auto"
      >
        <CarouselContent>
          {props.pictures
            .filter((picture) => picture !== "") // Filter out empty strings
            .map((picture, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div className="p-1">
                  <Card className="h-[150px] w-64 bg-zinc-400">
                    <CardContent className="flex h-full w-full aspect-square items-center justify-center p-1">
                        <Dialog>
                            <DialogTrigger className="object-cover">
                            <img src={picture} alt={`Picture ${index}`} 
                            className="rounded-sm"/>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <DialogTitle></DialogTitle>
                                <img src={picture} alt={`Picture ${index}`} 
                                className=""/>
                            </DialogContent>
                        </Dialog>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
