"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BlogListComponent({ getAllBlogs }) {
  console.log(getAllBlogs);

  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <div>
      {getAllBlogs && getAllBlogs.length > 0 ? (
        getAllBlogs.map((blogItem) => (
          <div key={blogItem._id}>
            <p>{blogItem.title}</p>
            <p>{blogItem.description}</p>
          </div>
        ))
      ) : (
        <h1>No Blogs Available</h1>
      )}
    </div>
  );
}
