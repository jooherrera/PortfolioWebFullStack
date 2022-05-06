export type Credenciales = {
  user: string;
  password: string;
};

export type UpdateKey = {
  [key: string]: string | number | undefined;
  key: string;
  value: string;
  position: number | undefined;
  id: number | undefined;
};

export type Profile = {
  name: string;
  title: string;
  from: string;
  imgProfile: string;
  imgBanner: string;
  contactInfo: ContactInfo;
  about: About;
  experience: ExpEducation;
  education: ExpEducation;
  curso: Curso;
  hardSkill: HardSkill;
  softSkill: SoftSkill;
  project: Project;
};

export type Project = {
  title: string;
  items: ProjectItem[];
};
export type ProjectItem = {
  [key: string]: string | number;
  id: number;
  name: string;
  description: string;
  webLink: string;
  githubLink: string;
};
export type SoftSkill = {
  title: string;
  items: SoftSkillItem[];
};
export type SoftSkillItem = {
  [key: string]: string;
  name: string;
  porcent: string;
};
export type HardSkill = {
  title: string;
  items: HardSkillItem[];
};
export type HardSkillItem = {
  [key: string]: string;
  name: string;
  logoUrl: string;
};
type Curso = {
  title: string;
  schools: SchoolItem[];
};
type SchoolItem = {
  company: string;
  class: SchoolClass[];
};
type SchoolClass = {
  title: string;
  date: string;
  certificate: string;
};
export type ExpEducation = {
  title: string;
  items: ExpEducationItem[];
};
export type ExpEducationItem = {
  [key: string]: string | number | undefined;
  id: number;
  logoUrl: string;
  name: string;
  company: string;
  title: string;
  date: string;
  extra: string;
};
export type ContactInfo = {
  phone: string;
  mail: string;
  linkedin: string;
};
export type About = {
  title: string;
  items: string[];
};
