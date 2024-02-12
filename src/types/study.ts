import { ChangeEvent } from 'react';

export interface StudyItem {
  id: number;
  leaderId: number;
  status: string;
  studyName: string;
  studyDescription: string;
  imgUrl: string;
  // 추가
  category: string;
  date: string;
  number: string;
  target: string;
  leader: string;
}

export interface OptionProps {
  value: string;
  label: string;
}

export interface SelectProps {
  value: string;
  options: OptionProps[];
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStudy: StudyItem | null;
}
