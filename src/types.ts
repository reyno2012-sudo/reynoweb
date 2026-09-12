export interface NavigationItem {
  label: string;
  href: string;
}

export interface WorkbenchTool {
  index: string;
  name: string;
}

export interface SelectedProject {
  id: string;
  number: string;
  name: string;
  label: string;
  description: string;
  image: string;
  status: 'OPEN' | 'PRIVATE';
  tags: string;
  url: string;
}

export interface FloppyProject {
  id: string;
  name: string;
  summary: string;
  repositoryUrl: string;
  stack: string;
  platform: string;
  version: string;
  color: 'teal' | 'blue' | 'amber' | 'plum' | 'olive' | 'ivory' | 'brick' | 'graphite';
  visible: boolean;
}

export interface NoteArticle {
  id: string;
  url: string;
  date: string;
  year?: string;
  month?: string;
  day?: string;
  category: string;
  readTime: number;
  title: string;
  summary: string;
  featured?: boolean;
  tag?: string;
}

export interface CvFormData {
  name: string;
  email: string;
  organization?: string;
  reason: string;
  message: string;
  website?: string;
}
