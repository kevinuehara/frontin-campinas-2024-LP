export interface Person {
  name: string;
  description: string;
  pathMedia?: string;
  socialMedias: {
    instagram?: string;
    twitter?: string;
    linktree?: string;
    youtube?: string;
    linkedin?: string;
  };
}
