export interface FaqButtonProps {
  onClick: () => void;
  label: string;
  isContent?: boolean;
  isActivate?: boolean;
}

export enum FaqCategory {
  TOP = 0,
  REGISTER,
  STUDY,
  CONTEST,
}

export interface FaqContentItem {
  contentId: number;
  contentTitle: string;
  content: string;
  categoryId: FaqCategory;
  date: string;
}

export interface FaqCategoryItem {
  categoryId: FaqCategory;
  categoryName: string;
  contentList: FaqContentItem[];
}
