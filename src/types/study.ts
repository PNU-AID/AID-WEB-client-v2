import { ChangeEvent } from 'react';

export interface StudyItem {
  id: number;
  leaderId: number;
  status: string;
  studyName: string;
  studyDescription: string;
  studyLink: string;
  imgUrl: string;
  // 추가
  date: string;
  number: string;
  target: string;
}

export interface ProjectItem {
  id: number;
  status: string;
  projectName: string;
  projectDescription: string;
  projectLink: string;
  imgUrl: string;
  // 추가
  date: string;
  number: string;
  target: string;
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
  selectedItem: CombinedItem | null;
}

type CombinedItem = StudyItem | ProjectItem;
