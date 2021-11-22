export interface User {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  userId: string;
}

export interface PostsResponse {
  posts: Post[];
}
export interface Post {
  title: string;
  description: string;
  time: string;
}
