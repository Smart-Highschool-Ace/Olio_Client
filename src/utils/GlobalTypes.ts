export type ProjectType = {
  id: number;
  title: string;
  views: number;
  skill: string;
  date: string;
};

export type BoardObj = {
  id: number;
  title: string;
  list: ProjectType[];
};

export type UserObj = {
  id: number;
  name: string;
  grade: number;
  skills: string;
  school: string;
  major: string;
};

export type ServiceType = {
  title: string;
  desc: string;
  skill: string[];
};
