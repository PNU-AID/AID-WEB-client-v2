import { ChangeEvent } from 'react';

export interface StudyItem {
  name: string;
  category: string;
  date: string;
  number: string;
  target: string;
  image: string;
  leader: string;
  status: string;
  description: string;
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
