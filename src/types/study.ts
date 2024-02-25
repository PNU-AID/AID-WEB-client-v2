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
  study_start?: string;
  study_end?: string;
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
  selectedItem: StudyItem | null;
  onClose: () => void;
}
