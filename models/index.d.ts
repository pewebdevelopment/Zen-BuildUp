import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum TaskStatus {
  PLANNED = "PLANNED",
  ASSIGNED = "ASSIGNED",
  INPROGRESS = "INPROGRESS",
  COMPLETED = "COMPLETED",
  OVERDUE = "OVERDUE",
  ARCHIVED = "ARCHIVED"
}



type EagerBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly posts?: (Post | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBlog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly posts: AsyncCollection<Post>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Blog = LazyLoading extends LazyLoadingDisabled ? EagerBlog : LazyBlog

export declare const Blog: (new (init: ModelInit<Blog>) => Blog) & {
  copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly blog?: Blog | null;
  readonly comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly blogPostsId?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly blog: AsyncItem<Blog | undefined>;
  readonly comments: AsyncCollection<Comment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly blogPostsId?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post?: Post | null;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCommentsId?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post: AsyncItem<Post | undefined>;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCommentsId?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Student, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly task?: (Task | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Student, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly task: AsyncCollection<Task>;
  readonly updatedAt?: string | null;
}

export declare type Student = LazyLoading extends LazyLoadingDisabled ? EagerStudent : LazyStudent

export declare const Student: (new (init: ModelInit<Student>) => Student) & {
  copyOf(source: Student, mutator: (draft: MutableModel<Student>) => MutableModel<Student> | void): Student;
}

type EagerTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly thumbnailURL?: string | null;
  readonly dueAt?: string | null;
  readonly status?: (TaskStatus | null)[] | keyof typeof TaskStatus | null;
  readonly student?: Student | null;
  readonly studentID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly thumbnailURL?: string | null;
  readonly dueAt?: string | null;
  readonly status?: (TaskStatus | null)[] | keyof typeof TaskStatus | null;
  readonly student: AsyncItem<Student | undefined>;
  readonly studentID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Task = LazyLoading extends LazyLoadingDisabled ? EagerTask : LazyTask

export declare const Task: (new (init: ModelInit<Task>) => Task) & {
  copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}