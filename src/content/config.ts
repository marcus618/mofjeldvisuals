import { defineCollection } from 'astro:content';
import { cldAssetsLoader } from 'astro-cloudinary/loaders';

const photographyCollection = defineCollection({
  loader: cldAssetsLoader({
    folder: 'Portfolio',
    resourceType: 'image',
    limit: 500,
    deliveryType: 'fetch'

    })
});

export const collections = {
  'photography': photographyCollection,
};