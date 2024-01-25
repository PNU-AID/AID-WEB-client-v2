export interface NewsItem {
  newsId: number;
  newsTitle: string;
  newsContent: string;
  date: string;
  author: string;
  tags: string[];
  newsImage?: string;
  hits: number;
}
