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
    <div className="grid grid-cols-3 gap-4">
      {getAllBlogs && getAllBlogs.length > 0 ? (
        getAllBlogs.map((blogItem) => (
          <div className="p-4 border border-red-600" key={blogItem._id}>
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
