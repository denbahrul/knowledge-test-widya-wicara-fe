export interface UserEntity {
  id: number;
  email: string;
  fullName: string;
  gender: genderEnum;
  profilePhoto?: string;
}

export enum genderEnum {
  Male = "Male",
  Female = "Female",
}
