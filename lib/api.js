import client from './sanity';
import ImageUrlBuilder from '@sanity/image-url';

const blogFields = `
    title,
    subtitle,
    'slug': slug.current,
    date,
    'author': author->{ name, 'avatar': avatar.asset->url},
    coverImage,
`;

export function urlFor( source ) {
    return ImageUrlBuilder(client).image(source);
}


export async function getAllBlogs() {
    const results = await client
            .fetch(`*[_type == "blog"]{ ${blogFields} }`);
    return results;
}

export async function getBlogBySlug(slug) {
    const result = await client
            .fetch(`*[_type == "blog" && slug.current == $slug] {
             ${blogFields}
             content[]{..., "asset": asset->}
            }`, { slug }).then( res => res?.[0])
    return result;
}