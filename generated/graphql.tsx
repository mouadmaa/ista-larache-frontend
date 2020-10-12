import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  users: Array<User>;
  formation?: Maybe<Formation>;
  formations: Array<Formation>;
  teacherFormations: Array<Formation>;
  modules: Array<Module>;
  class?: Maybe<Class>;
  classes: Array<Class>;
  student?: Maybe<Student>;
  students: Array<Student>;
  notes: Array<Note>;
  activity?: Maybe<Activity>;
  activities?: Maybe<Activities>;
};


export type QueryFormationArgs = {
  where: FormationWhereUniqueInput;
};


export type QueryClassArgs = {
  where: ClassWhereUniqueInput;
};


export type QueryStudentArgs = {
  where: StudentWhereUniqueInput;
};


export type QueryActivityArgs = {
  where: ActivityWhereInput;
};


export type QueryActivitiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ActivityOrderByInput>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  role: Role;
};

export enum Role {
  Admin = 'ADMIN',
  Teacher = 'TEACHER'
}

export type FormationWhereUniqueInput = {
  id: Scalars['String'];
};

export type Formation = {
  __typename?: 'Formation';
  id: Scalars['String'];
  name: Scalars['String'];
  descUrl: Scalars['String'];
  level: Level;
  modules: Array<Module>;
  classes: Array<Class>;
};

export enum Level {
  TechnicienSpecialise = 'Technicien_Specialise',
  Technicien = 'Technicien',
  Qualification = 'Qualification',
  Specialisation = 'Specialisation',
  BacProfessionnel = 'Bac_Professionnel',
  ParcoursCollegial = 'Parcours_Collegial',
  FormationQualifiante = 'Formation_Qualifiante'
}

export type Module = {
  __typename?: 'Module';
  id: Scalars['String'];
  number: Scalars['Int'];
  name: Scalars['String'];
  classes: Array<Class>;
  notes: Array<Note>;
  formation: Formation;
};

export type Class = {
  __typename?: 'Class';
  id: Scalars['String'];
  year: Year;
  group: Group;
  timetable?: Maybe<Scalars['String']>;
  students: Array<Student>;
  modules: Array<Module>;
  formation: Formation;
  teacher: User;
};

export enum Year {
  First = 'First',
  Second = 'Second'
}

export enum Group {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E'
}

export type Student = {
  __typename?: 'Student';
  id: Scalars['String'];
  fullName: Scalars['String'];
  cef?: Maybe<Scalars['String']>;
  cin?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  notes: Array<Note>;
  finalNote1?: Maybe<Scalars['Float']>;
  finalNote2?: Maybe<Scalars['Float']>;
  class: Class;
};

export type Note = {
  __typename?: 'Note';
  id: Scalars['String'];
  note1?: Maybe<Scalars['Float']>;
  note2?: Maybe<Scalars['Float']>;
  note3?: Maybe<Scalars['Float']>;
  efm?: Maybe<Scalars['Float']>;
  student: Student;
  module: Module;
};

export type ClassWhereUniqueInput = {
  id: Scalars['String'];
};

export type StudentWhereUniqueInput = {
  id: Scalars['String'];
};

export type ActivityWhereInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type Activity = {
  __typename?: 'Activity';
  id: Scalars['String'];
  image: Scalars['String'];
  title: Scalars['String'];
  desc: Scalars['String'];
  date: Scalars['String'];
  creator: Scalars['String'];
  slug: Scalars['String'];
};

export type ActivityOrderByInput = {
  title?: Maybe<Sort>;
  date?: Maybe<Sort>;
};

export enum Sort {
  Asc = 'asc',
  Desc = 'desc'
}

export type Activities = {
  __typename?: 'Activities';
  activities: Array<Activity>;
  count: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register?: Maybe<User>;
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
  deleteUser: User;
  createFormation: Formation;
  updateFormation: Formation;
  deleteFormation: Formation;
  createModule: Module;
  updateModule: Module;
  deleteModule: Module;
  createClass: Class;
  updateClass: Class;
  deleteClass: Class;
  createStudent: Student;
  updateStudent: Student;
  deleteStudent: Student;
  createNote: Note;
  updateNote: Note;
  deleteNote: Note;
  createActivity: Activity;
  updateActivity: Activity;
  deleteActivity: Activity;
};


export type MutationRegisterArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationCreateFormationArgs = {
  data: FormationCreateInput;
};


export type MutationUpdateFormationArgs = {
  where: FormationWhereUniqueInput;
  data: FormationUpdateInput;
};


export type MutationDeleteFormationArgs = {
  where: FormationWhereUniqueInput;
};


export type MutationCreateModuleArgs = {
  data: ModuleCreateInput;
};


export type MutationUpdateModuleArgs = {
  where: ModuleWhereUniqueInput;
  data: ModuleUpdateInput;
};


export type MutationDeleteModuleArgs = {
  where: ModuleWhereUniqueInput;
};


export type MutationCreateClassArgs = {
  data: ClassCreateInput;
};


export type MutationUpdateClassArgs = {
  where: ClassWhereUniqueInput;
  data: ClassUpdateInput;
  file?: Maybe<Scalars['String']>;
};


export type MutationDeleteClassArgs = {
  where: ClassWhereUniqueInput;
};


export type MutationCreateStudentArgs = {
  data: StudentCreateInput;
};


export type MutationUpdateStudentArgs = {
  where: StudentWhereUniqueInput;
  data: StudentUpdateInput;
};


export type MutationDeleteStudentArgs = {
  where: StudentWhereUniqueInput;
};


export type MutationCreateNoteArgs = {
  data: NoteCreateInput;
};


export type MutationUpdateNoteArgs = {
  where: NoteWhereUniqueInput;
  data: NoteUpdateInput;
};


export type MutationDeleteNoteArgs = {
  where: NoteWhereUniqueInput;
};


export type MutationCreateActivityArgs = {
  data: ActivityCreateInput;
  file: Scalars['String'];
};


export type MutationUpdateActivityArgs = {
  where: ActivityWhereUniqueInput;
  data: ActivityUpdateInput;
  file?: Maybe<Scalars['String']>;
};


export type MutationDeleteActivityArgs = {
  where: ActivityWhereUniqueInput;
};

export type UserWhereUniqueInput = {
  id: Scalars['String'];
};

export type FormationCreateInput = {
  name: Scalars['String'];
  descUrl: Scalars['String'];
  level: Level;
};

export type FormationUpdateInput = {
  name?: Maybe<Scalars['String']>;
  descUrl?: Maybe<Scalars['String']>;
  level?: Maybe<Level>;
};

export type ModuleCreateInput = {
  number: Scalars['Int'];
  name: Scalars['String'];
  formation: FormationConnectModuleInput;
};

export type FormationConnectModuleInput = {
  connect: FormationWhereUniqueInput;
};

export type ModuleWhereUniqueInput = {
  id: Scalars['String'];
};

export type ModuleUpdateInput = {
  number?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  formation?: Maybe<FormationConnectModuleInput>;
};

export type ClassCreateInput = {
  year: Year;
  group: Group;
  formation: FormationConnectClassInput;
  teacher: UserConnectClassInput;
};

export type FormationConnectClassInput = {
  connect: FormationWhereUniqueInput;
};

export type UserConnectClassInput = {
  connect: UserWhereUniqueInput;
};

export type ClassUpdateInput = {
  year?: Maybe<Year>;
  group?: Maybe<Group>;
  timetable?: Maybe<Scalars['String']>;
  formation?: Maybe<FormationConnectClassInput>;
  teacher?: Maybe<UserConnectClassInput>;
};

export type StudentCreateInput = {
  fullName: Scalars['String'];
  cef?: Maybe<Scalars['String']>;
  cin?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  finalNote1?: Maybe<Scalars['Float']>;
  finalNote2?: Maybe<Scalars['Float']>;
  class: ClassConnectStudentInput;
};

export type ClassConnectStudentInput = {
  connect: ClassWhereUniqueInput;
};

export type StudentUpdateInput = {
  fullName?: Maybe<Scalars['String']>;
  cef?: Maybe<Scalars['String']>;
  cin?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  finalNote1?: Maybe<Scalars['Float']>;
  finalNote2?: Maybe<Scalars['Float']>;
  class?: Maybe<ClassConnectStudentInput>;
};

export type NoteCreateInput = {
  note1?: Maybe<Scalars['Float']>;
  note2?: Maybe<Scalars['Float']>;
  note3?: Maybe<Scalars['Float']>;
  efm?: Maybe<Scalars['Float']>;
  student: StudentConnectNoteInput;
  module: ModuleConnectNoteInput;
};

export type StudentConnectNoteInput = {
  connect: StudentWhereUniqueInput;
};

export type ModuleConnectNoteInput = {
  connect: ModuleWhereUniqueInput;
};

export type NoteWhereUniqueInput = {
  id: Scalars['String'];
};

export type NoteUpdateInput = {
  note1?: Maybe<Scalars['Float']>;
  note2?: Maybe<Scalars['Float']>;
  note3?: Maybe<Scalars['Float']>;
  efm?: Maybe<Scalars['Float']>;
  module?: Maybe<ModuleConnectNoteInput>;
};

export type ActivityCreateInput = {
  title: Scalars['String'];
  desc: Scalars['String'];
  date: Scalars['String'];
  creator: Scalars['String'];
};

export type ActivityWhereUniqueInput = {
  id: Scalars['String'];
};

export type ActivityUpdateInput = {
  image?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  creator?: Maybe<Scalars['String']>;
};

export type FormationFragment = (
  { __typename?: 'Formation' }
  & Pick<Formation, 'id' | 'name' | 'descUrl' | 'level'>
);

export type FormationsQueryVariables = Exact<{ [key: string]: never; }>;


export type FormationsQuery = (
  { __typename?: 'Query' }
  & { formations: Array<(
    { __typename?: 'Formation' }
    & FormationFragment
  )> }
);

export const FormationFragmentDoc = gql`
    fragment Formation on Formation {
  id
  name
  descUrl
  level
}
    `;
export const FormationsDocument = gql`
    query Formations {
  formations {
    ...Formation
  }
}
    ${FormationFragmentDoc}`;

/**
 * __useFormationsQuery__
 *
 * To run a query within a React component, call `useFormationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFormationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFormationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFormationsQuery(baseOptions?: Apollo.QueryHookOptions<FormationsQuery, FormationsQueryVariables>) {
        return Apollo.useQuery<FormationsQuery, FormationsQueryVariables>(FormationsDocument, baseOptions);
      }
export function useFormationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FormationsQuery, FormationsQueryVariables>) {
          return Apollo.useLazyQuery<FormationsQuery, FormationsQueryVariables>(FormationsDocument, baseOptions);
        }
export type FormationsQueryHookResult = ReturnType<typeof useFormationsQuery>;
export type FormationsLazyQueryHookResult = ReturnType<typeof useFormationsLazyQuery>;
export type FormationsQueryResult = Apollo.QueryResult<FormationsQuery, FormationsQueryVariables>;