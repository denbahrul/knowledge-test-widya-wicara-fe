export interface UserEntity {
  id: number;
  email: string;
  username: string;
  gender: genderEnum;
}

export enum genderEnum {
  Male = "Male",
  Female = "Female",
}
