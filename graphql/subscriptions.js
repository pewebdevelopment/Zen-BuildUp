/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
