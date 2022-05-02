export type Profile = {
  name: string;
  title: string;
  from: string;
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
type ProjectItem = {
  name: string;
  description: string;
  webLink: string;
  githubLink: string;
};
export type SoftSkill = {
  title: string;
  items: SoftSkillItem[];
};
type SoftSkillItem = {
  name: string;
  porcent: number;
};
export type HardSkill = {
  title: string;
  items: HardSkillItem[];
};
type HardSkillItem = {
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
type ExpEducationItem = {
  logoUrl: string;
  name: string;
  company?: string;
  title?: string;
  date: string;
  extra: string;
};
type ContactInfo = {
  phone: string;
  mail: string;
  linkedin: string;
};
export type About = {
  title: string;
  items: string[];
};
