import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const currentBlogId = searchParams.get("id");
    console.log(currentBlogId);

    if (!currentBlogId) {
      return NextResponse.json({
        success: false,
        message: "ID is required",
      });
    }

    const deleteBlogItem = await Blog.findByIdAndDelete(currentBlogId);

    if (deleteBlogItem) {
      return NextResponse.json({
        success: true,
        message: "Blog item is deleted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong! Failed to delete blog item",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong!",
    });
  }
}
