export type Blog = {
    title: string;
    body: string;
    author: string;
    id: string;
  };
  
 export type BlogListProps = {
    blogs: Blog[];
    title: string;
    // status: 'loading' | 'error';
    // handleDelete: (id: number) => void;
  };
  
  