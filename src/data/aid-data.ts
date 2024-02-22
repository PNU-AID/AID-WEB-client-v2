import { RiGithubFill } from 'react-icons/ri';
import { RiNotionFill } from 'react-icons/ri';
import { SiVelog } from 'react-icons/si';

export const aidUrls = [
  {
    label: 'Github',
    url: import.meta.env.VITE_AID_GITHUB_URL,
    image: RiGithubFill,
  },
  {
    label: 'Notion',
    url: import.meta.env.VITE_AID_NOTION_NEWS_URL,
    image: RiNotionFill,
  },
  {
    label: 'Blog',
    url: import.meta.env.VITE_AID_BLOG_URL,
    image: SiVelog,
  },
] as const;
