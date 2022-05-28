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
  id: number | undefined;
  sectionName?: string;
};

/* -------------------------------------------------------------------------- */
/*                      --------------------------------                      */
/* -------------------------------------------------------------------------- */
export type Section = {
  id: number;
  sectionTitle: string;
  visible: boolean;
};

export type PersonInfo = {
  [key: string]: string | number;
  dni: number;
  fullName: string;
  title: string;
  profileImg: string;
  bannerImg: string;
};

export type ContactContent = {
  id: number;
  email: string;
  phone: string;
  linkedin: string;
  address: string;
};

export type CursoSchool = {
  [key: string]: string | number | SchoolClass[];
  id: number;
  company: string;
  logo: string;
  classes: SchoolClass[];
};

export type SchoolClass = {
  [key: string]: string | number;
  id: number;
  title: string;
  date: string;
  certificate: string;
  schoolId: number;
};
