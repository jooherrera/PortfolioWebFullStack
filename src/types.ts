export type Credenciales = {
  email: string;
  password: string;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  token: string;
};

export type UpdateKey = {
  [key: string]: string | number | undefined;
  key: string;
  value: string;
  position: number | undefined;
  id: number | undefined;
};

export type Profile = {
  profileInfo: ProfileInfo;
  about: About;
  experience: ExpEducation;
  education: ExpEducation;
  curso: Curso;
  hardSkill: HardSkill;
  softSkill: SoftSkill;
  project: Project;
};

export type ProfileInfo = {
  [key: string]: string;
  name: string;
  title: string;
  from: string;
  imgProfile: string;
  imgBanner: string;
  phone: string;
  mail: string;
  linkedin: string;
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
export type Curso = {
  title: string;
  schools: SchoolItem[];
};
export type SchoolItem = {
  [key: string]: string | number | SchoolClass[];
  id: number;
  logoUrl: string;
  company: string;
  class: SchoolClass[];
};
export type SchoolClass = {
  [key: string]: string | number;
  id: number;
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

export type About = {
  id: number;
  title: string;
  items: string[];
};
