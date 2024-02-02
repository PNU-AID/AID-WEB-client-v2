export interface QnaButtonProps {
  onClick: () => void;
  label: string;
  isContent?: boolean;
  isActivate?: boolean;
}

export interface QnaContentItem {
  contentId: number;
  contentTitle: string;
  content: string;
  categoryId: QnaCategory;
  date: string;
}

export interface QnaCategoryItem {
  categoryId: QnaCategory;
  categoryName: string;
  contentList: QnaContentItem[];
}

export enum QnaCategory {
  TOP = 0,
  REGISTER,
  STUDY,
  CONTEST,
}
