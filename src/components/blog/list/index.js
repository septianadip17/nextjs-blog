"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BlogListComponent({ getAllBlogs }) {
  console.log(getAllBlogs);

  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  async function handleDeleteBlogItem(getCurrentBlogItemId) {
    const response = await fetch(
      `/api/blog/delete-blog?id=${getCurrentBlogItemId}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    console.log(data);

    if (data?.success) router.refresh();
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {getAllBlogs && getAllBlogs.length > 0 ? (
        getAllBlogs.map((blogItem) => (
          <div
            className="p-4 border flex flex-col gap-4  border-red-600"
            key={blogItem._id}
          >
            <p className="font-bold">{blogItem.title}</p>
            <p>{blogItem.description}</p>
            <button
              onClick={() => handleDeleteBlogItem(blogItem._id)}
              className="border border-red-500 p-4 bg-black text-white"
            >
              Delete Blog Item
            </button>
            <button className="border border-red-500 p-4 bg-black text-white">View Blog Details</button>
          </div>
        ))
      ) : (
        <h1>No Blogs Available</h1>
      )}
    </div>
  );
}
