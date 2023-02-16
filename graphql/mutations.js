/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
