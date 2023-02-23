/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          blog {
            id
            name
            posts {
              items {
                id
                title
                blog {
                  id
                  name
                  createdAt
                  updatedAt
                }
                comments {
                  nextToken
                }
                createdAt
                updatedAt
                blogPostsId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            items {
              id
              post {
                id
                title
                blog {
                  id
                  name
                  createdAt
                  updatedAt
                }
                comments {
                  nextToken
                }
                createdAt
                updatedAt
                blogPostsId
              }
              content
              createdAt
              updatedAt
              postCommentsId
            }
            nextToken
          }
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          items {
            id
            title
            blog {
              id
              name
              posts {
                items {
                  id
                  title
                  createdAt
                  updatedAt
                  blogPostsId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            comments {
              items {
                id
                post {
                  id
                  title
                  createdAt
                  updatedAt
                  blogPostsId
                }
                content
                createdAt
                updatedAt
                postCommentsId
              }
              nextToken
            }
            createdAt
            updatedAt
            blogPostsId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blog {
        id
        name
        posts {
          items {
            id
            title
            blog {
              id
              name
              posts {
                items {
                  id
                  title
                  createdAt
                  updatedAt
                  blogPostsId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            comments {
              items {
                id
                post {
                  id
                  title
                  createdAt
                  updatedAt
                  blogPostsId
                }
                content
                createdAt
                updatedAt
                postCommentsId
              }
              nextToken
            }
            createdAt
            updatedAt
            blogPostsId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          post {
            id
            title
            blog {
              id
              name
              posts {
                items {
                  id
                  title
                  createdAt
                  updatedAt
                  blogPostsId
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            comments {
              items {
                id
                post {
                  id
                  title
                  createdAt
                  updatedAt
                  blogPostsId
                }
                content
                createdAt
                updatedAt
                postCommentsId
              }
              nextToken
            }
            createdAt
            updatedAt
            blogPostsId
          }
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blog {
          id
          name
          posts {
            items {
              id
              title
              blog {
                id
                name
                posts {
                  nextToken
                }
                createdAt
                updatedAt
              }
              comments {
                items {
                  id
                  content
                  createdAt
                  updatedAt
                  postCommentsId
                }
                nextToken
              }
              createdAt
              updatedAt
              blogPostsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        comments {
          items {
            id
            post {
              id
              title
              blog {
                id
                name
                posts {
                  nextToken
                }
                createdAt
                updatedAt
              }
              comments {
                items {
                  id
                  content
                  createdAt
                  updatedAt
                  postCommentsId
                }
                nextToken
              }
              createdAt
              updatedAt
              blogPostsId
            }
            content
            createdAt
            updatedAt
            postCommentsId
          }
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        blog {
          id
          name
          posts {
            items {
              id
              title
              blog {
                id
                name
                posts {
                  nextToken
                }
                createdAt
                updatedAt
              }
              comments {
                items {
                  id
                  content
                  createdAt
                  updatedAt
                  postCommentsId
                }
                nextToken
              }
              createdAt
              updatedAt
              blogPostsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        comments {
          items {
            id
            post {
              id
              title
              blog {
                id
                name
                posts {
                  nextToken
                }
                createdAt
                updatedAt
              }
              comments {
                items {
                  id
                  content
                  createdAt
                  updatedAt
                  postCommentsId
                }
                nextToken
              }
              createdAt
              updatedAt
              blogPostsId
            }
            content
            createdAt
            updatedAt
            postCommentsId
          }
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          blog {
            id
            name
            posts {
              items {
                id
                title
                blog {
                  id
                  name
                  createdAt
                  updatedAt
                }
                comments {
                  nextToken
                }
                createdAt
                updatedAt
                blogPostsId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            items {
              id
              post {
                id
                title
                blog {
                  id
                  name
                  createdAt
                  updatedAt
                }
                comments {
                  nextToken
                }
                createdAt
                updatedAt
                blogPostsId
              }
              content
              createdAt
              updatedAt
              postCommentsId
            }
            nextToken
          }
          createdAt
          updatedAt
          blogPostsId
        }
        content
        createdAt
        updatedAt
        postCommentsId
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      name
      email
      createdAt
      task {
        items {
          id
          name
          description
          thumbnailURL
          dueAt
          status
          student {
            id
            name
            email
            createdAt
            task {
              items {
                id
                name
                description
                thumbnailURL
                dueAt
                status
                student {
                  id
                  name
                  email
                  createdAt
                  updatedAt
                }
                studentID
                createdAt
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        createdAt
        task {
          items {
            id
            name
            description
            thumbnailURL
            dueAt
            status
            student {
              id
              name
              email
              createdAt
              task {
                items {
                  id
                  name
                  description
                  thumbnailURL
                  dueAt
                  status
                  studentID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            studentID
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      name
      description
      thumbnailURL
      dueAt
      status
      student {
        id
        name
        email
        createdAt
        task {
          items {
            id
            name
            description
            thumbnailURL
            dueAt
            status
            student {
              id
              name
              email
              createdAt
              task {
                items {
                  id
                  name
                  description
                  thumbnailURL
                  dueAt
                  status
                  studentID
                  createdAt
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            studentID
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      studentID
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        thumbnailURL
        dueAt
        status
        student {
          id
          name
          email
          createdAt
          task {
            items {
              id
              name
              description
              thumbnailURL
              dueAt
              status
              student {
                id
                name
                email
                createdAt
                task {
                  nextToken
                }
                updatedAt
              }
              studentID
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        studentID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const tasksByStudentIDAndName = /* GraphQL */ `
  query TasksByStudentIDAndName(
    $studentID: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksByStudentIDAndName(
      studentID: $studentID
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        thumbnailURL
        dueAt
        status
        student {
          id
          name
          email
          createdAt
          task {
            items {
              id
              name
              description
              thumbnailURL
              dueAt
              status
              student {
                id
                name
                email
                createdAt
                task {
                  nextToken
                }
                updatedAt
              }
              studentID
              createdAt
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        studentID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
