// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TaskStatus = {
  "PLANNED": "PLANNED",
  "ASSIGNED": "ASSIGNED",
  "INPROGRESS": "INPROGRESS",
  "COMPLETED": "COMPLETED",
  "OVERDUE": "OVERDUE",
  "ARCHIVED": "ARCHIVED"
};

const { Blog, Post, Comment, Student, Task } = initSchema(schema);

export {
  Blog,
  Post,
  Comment,
  Student,
  Task,
  TaskStatus
};