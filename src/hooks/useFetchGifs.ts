import { useEffect, useState } from "react";
import { getGif } from "../helpers";

export interface Gif {
  id?: string;
  title: string;
  url: string;
}
export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGif(category).then((gifs) => {
      setImages(gifs);
      setIsLoading(false);
    });
  }, []);

  return {
    images,
    isLoading,
  };
};
