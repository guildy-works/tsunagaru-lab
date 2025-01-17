import { MetadataRoute } from 'next'
import { footerItems } from './Footer'
import { resources } from '@/resources'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: resources.host,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${resources.host}/mission`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        ...footerItems.map(item => ({
            url: `${resources.host}${item.href}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as any,
            priority: 0.5,
        }))
    ]
}