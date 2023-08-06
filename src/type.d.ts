// types.d.ts
type Blog = {
    title: string;
    body: string;
    author: string;
    id: number;
  };
  
  type BlogListProps = {
    blogs: Blog[];
    title: string;
    // status: 'loading' | 'error';
    // handleDelete: (id: number) => void;
  };
  