import { defineCollection } from 'astro:content';
import { cldAssetsLoader } from 'astro-cloudinary/loaders';

const photographyCollection = defineCollection({
  loader: cldAssetsLoader({
    folder: 'Portfolio',
    resourceType: 'image'
    })
});

export const collections = {
  'photography': photographyCollection,
};