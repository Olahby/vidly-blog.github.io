// types.d.ts
export type Blog = {
    find(arg0: (blog: any) => boolean): unknown;
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
  
  