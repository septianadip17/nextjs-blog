import BlogListComponent from "@/components/blog/list";
export default function BlogList() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1 className="font-bold text-lg">Blog List</h1>
      <BlogListComponent />
    </main>
  );
}
