import { ChangeEvent } from 'react';

export interface StudyItem {
  id: number;
  status: string;
  study_type: string;
  study_name: string;
  study_description: string;
  study_link: string;
  max_participants: number;
  leader: string;
  participants: string[];
  img_url: string;
  created_at: string;
  study_start: string;
  study_end: string;
}

export interface ProjectItem {
  id: number;
  status: string;
  project_type: string;
  project_name: string;
  project_description: string;
  project_link: string;
  max_participants: number;
  leader: string;
  participants: string[];
  img_url: string;
  created_at: string;
  project_start: string;
  project_end: string;
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
