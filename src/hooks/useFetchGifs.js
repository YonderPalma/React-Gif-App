import React, { useState, useEffect } from 'react'
import { getGif } from '../helpers/getGifs_API';

export const useFetchGifs = (category) => {

    const [Image, setImage] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    const getImages = async () => {
        const newImages = await getGif( category );
        setImage(newImages)
        setIsloading(false);
    }

    useEffect(() => {
        getImages();
    }, [])
  return { 
        Image, 
        isLoading
    }
}
